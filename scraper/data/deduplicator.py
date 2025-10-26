"""
Deduplication System
Handles duplicate detection using URL+title+price fingerprinting
"""

import hashlib
import json
import logging
from typing import Dict, Any, Optional, List, Set
from datetime import datetime, timezone
import redis
from dataclasses import dataclass

from ..config.scraper_config import get_redis_config

logger = logging.getLogger(__name__)

@dataclass
class ProductFingerprint:
    """Product fingerprint for deduplication"""
    url_hash: str
    title_hash: str
    price_hash: str
    brand_hash: str
    combined_hash: str
    product_id: str
    site_id: str
    created_at: datetime

class Deduplicator:
    """Handles product deduplication using multiple strategies"""
    
    def __init__(self, site_id: str):
        self.site_id = site_id
        self.redis_config = get_redis_config()
        self.redis_client = self._connect_redis()
        self.logger = logging.getLogger(__name__)
        
        # Cache for in-memory deduplication
        self.fingerprint_cache: Set[str] = set()
        self._load_fingerprint_cache()
    
    def _connect_redis(self) -> Optional[redis.Redis]:
        """Connect to Redis for distributed deduplication"""
        try:
            if self.redis_config['host']:
                client = redis.Redis(
                    host=self.redis_config['host'],
                    port=self.redis_config['port'],
                    db=self.redis_config['db'],
                    password=self.redis_config['password'],
                    decode_responses=self.redis_config['decode_responses']
                )
                # Test connection
                client.ping()
                self.logger.info("Connected to Redis for deduplication")
                return client
        except Exception as e:
            self.logger.warning(f"Redis connection failed: {str(e)}")
            return None
    
    def _load_fingerprint_cache(self):
        """Load existing fingerprints into memory cache"""
        if not self.redis_client:
            return
        
        try:
            # Load fingerprints for this site
            pattern = f"fingerprint:{self.site_id}:*"
            keys = self.redis_client.keys(pattern)
            
            for key in keys:
                fingerprint_data = self.redis_client.get(key)
                if fingerprint_data:
                    data = json.loads(fingerprint_data)
                    self.fingerprint_cache.add(data['combined_hash'])
            
            self.logger.info(f"Loaded {len(self.fingerprint_cache)} fingerprints for site {self.site_id}")
            
        except Exception as e:
            self.logger.error(f"Error loading fingerprint cache: {str(e)}")
    
    def create_fingerprint(self, product_data: Dict[str, Any]) -> ProductFingerprint:
        """Create fingerprint for product data"""
        # Extract key fields
        url = product_data.get('url', '')
        title = product_data.get('title', '').lower().strip()
        price = product_data.get('price', {})
        brand = product_data.get('brand', '').lower().strip()
        product_id = product_data.get('product_id', '')
        
        # Create hashes
        url_hash = self._hash_string(url)
        title_hash = self._hash_string(title)
        price_hash = self._hash_string(self._normalize_price(price))
        brand_hash = self._hash_string(brand)
        
        # Combined hash for quick lookup
        combined_data = f"{url_hash}:{title_hash}:{price_hash}:{brand_hash}"
        combined_hash = self._hash_string(combined_data)
        
        return ProductFingerprint(
            url_hash=url_hash,
            title_hash=title_hash,
            price_hash=price_hash,
            brand_hash=brand_hash,
            combined_hash=combined_hash,
            product_id=product_id,
            site_id=self.site_id,
            created_at=datetime.now(timezone.utc)
        )
    
    def _hash_string(self, text: str) -> str:
        """Create SHA-256 hash of string"""
        return hashlib.sha256(text.encode('utf-8')).hexdigest()
    
    def _normalize_price(self, price_data: Dict[str, Any]) -> str:
        """Normalize price data for consistent hashing"""
        if not price_data:
            return "0"
        
        current_price = price_data.get('current', 0)
        if current_price:
            return str(round(float(current_price), 2))
        
        return "0"
    
    def is_duplicate(self, product_data: Dict[str, Any]) -> bool:
        """Check if product is a duplicate"""
        try:
            fingerprint = self.create_fingerprint(product_data)
            
            # Check in-memory cache first
            if fingerprint.combined_hash in self.fingerprint_cache:
                self.logger.debug(f"Duplicate found in cache: {product_data.get('url', '')}")
                return True
            
            # Check Redis if available
            if self.redis_client:
                redis_key = f"fingerprint:{self.site_id}:{fingerprint.combined_hash}"
                if self.redis_client.exists(redis_key):
                    self.logger.debug(f"Duplicate found in Redis: {product_data.get('url', '')}")
                    return True
            
            return False
            
        except Exception as e:
            self.logger.error(f"Error checking duplicate: {str(e)}")
            return False
    
    def add_fingerprint(self, product_data: Dict[str, Any]) -> bool:
        """Add product fingerprint to deduplication store"""
        try:
            fingerprint = self.create_fingerprint(product_data)
            
            # Add to in-memory cache
            self.fingerprint_cache.add(fingerprint.combined_hash)
            
            # Add to Redis if available
            if self.redis_client:
                redis_key = f"fingerprint:{self.site_id}:{fingerprint.combined_hash}"
                fingerprint_data = {
                    'url_hash': fingerprint.url_hash,
                    'title_hash': fingerprint.title_hash,
                    'price_hash': fingerprint.price_hash,
                    'brand_hash': fingerprint.brand_hash,
                    'combined_hash': fingerprint.combined_hash,
                    'product_id': fingerprint.product_id,
                    'site_id': fingerprint.site_id,
                    'created_at': fingerprint.created_at.isoformat()
                }
                
                # Store with expiration (30 days)
                self.redis_client.setex(
                    redis_key,
                    30 * 24 * 60 * 60,  # 30 days in seconds
                    json.dumps(fingerprint_data)
                )
            
            self.logger.debug(f"Added fingerprint for: {product_data.get('url', '')}")
            return True
            
        except Exception as e:
            self.logger.error(f"Error adding fingerprint: {str(e)}")
            return False
    
    def find_similar_products(self, product_data: Dict[str, Any], 
                            similarity_threshold: float = 0.8) -> List[Dict[str, Any]]:
        """Find similar products using fuzzy matching"""
        try:
            title = product_data.get('title', '').lower().strip()
            brand = product_data.get('brand', '').lower().strip()
            
            similar_products = []
            
            if not self.redis_client:
                return similar_products
            
            # Search for similar titles and brands
            pattern = f"fingerprint:{self.site_id}:*"
            keys = self.redis_client.keys(pattern)
            
            for key in keys:
                try:
                    fingerprint_data = self.redis_client.get(key)
                    if fingerprint_data:
                        data = json.loads(fingerprint_data)
                        
                        # Calculate similarity
                        similarity = self._calculate_similarity(
                            title, brand,
                            data.get('title_hash', ''),
                            data.get('brand_hash', '')
                        )
                        
                        if similarity >= similarity_threshold:
                            similar_products.append({
                                'product_id': data.get('product_id', ''),
                                'similarity': similarity,
                                'fingerprint': data
                            })
                            
                except Exception as e:
                    self.logger.debug(f"Error processing fingerprint: {str(e)}")
                    continue
            
            # Sort by similarity
            similar_products.sort(key=lambda x: x['similarity'], reverse=True)
            
            return similar_products
            
        except Exception as e:
            self.logger.error(f"Error finding similar products: {str(e)}")
            return []
    
    def _calculate_similarity(self, title1: str, brand1: str, 
                            title_hash2: str, brand_hash2: str) -> float:
        """Calculate similarity between two products"""
        # This is a simplified similarity calculation
        # In production, you might want to use more sophisticated algorithms
        
        # For now, we'll use a basic approach
        # In practice, you'd want to store the original text for similarity calculation
        # or use a more sophisticated hashing approach
        
        # This is a placeholder - implement proper similarity calculation
        return 0.0
    
    def remove_fingerprint(self, product_id: str) -> bool:
        """Remove product fingerprint from deduplication store"""
        try:
            if not self.redis_client:
                return False
            
            # Find and remove fingerprint
            pattern = f"fingerprint:{self.site_id}:*"
            keys = self.redis_client.keys(pattern)
            
            for key in keys:
                try:
                    fingerprint_data = self.redis_client.get(key)
                    if fingerprint_data:
                        data = json.loads(fingerprint_data)
                        if data.get('product_id') == product_id:
                            self.redis_client.delete(key)
                            
                            # Remove from cache
                            if data.get('combined_hash') in self.fingerprint_cache:
                                self.fingerprint_cache.remove(data['combined_hash'])
                            
                            self.logger.info(f"Removed fingerprint for product: {product_id}")
                            return True
                            
                except Exception as e:
                    self.logger.debug(f"Error processing fingerprint for removal: {str(e)}")
                    continue
            
            return False
            
        except Exception as e:
            self.logger.error(f"Error removing fingerprint: {str(e)}")
            return False
    
    def get_duplicate_stats(self) -> Dict[str, Any]:
        """Get deduplication statistics"""
        try:
            stats = {
                'site_id': self.site_id,
                'total_fingerprints': len(self.fingerprint_cache),
                'redis_available': self.redis_client is not None,
                'cache_hit_rate': 0.0,  # Would need to track this
                'last_updated': datetime.now(timezone.utc).isoformat()
            }
            
            if self.redis_client:
                try:
                    pattern = f"fingerprint:{self.site_id}:*"
                    keys = self.redis_client.keys(pattern)
                    stats['redis_fingerprints'] = len(keys)
                except Exception:
                    stats['redis_fingerprints'] = 0
            
            return stats
            
        except Exception as e:
            self.logger.error(f"Error getting duplicate stats: {str(e)}")
            return {}

class BatchDeduplicator:
    """Handles batch deduplication operations"""
    
    def __init__(self, site_id: str):
        self.deduplicator = Deduplicator(site_id)
        self.logger = logging.getLogger(__name__)
    
    def process_batch(self, products: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Process a batch of products for deduplication"""
        results = {
            'total_processed': len(products),
            'duplicates_found': 0,
            'new_products': 0,
            'errors': 0,
            'duplicate_urls': [],
            'new_product_ids': []
        }
        
        for product in products:
            try:
                if self.deduplicator.is_duplicate(product):
                    results['duplicates_found'] += 1
                    results['duplicate_urls'].append(product.get('url', ''))
                else:
                    # Add fingerprint for new product
                    if self.deduplicator.add_fingerprint(product):
                        results['new_products'] += 1
                        results['new_product_ids'].append(product.get('product_id', ''))
                    else:
                        results['errors'] += 1
                        
            except Exception as e:
                self.logger.error(f"Error processing product: {str(e)}")
                results['errors'] += 1
        
        return results
    
    def cleanup_old_fingerprints(self, days_old: int = 30) -> int:
        """Clean up old fingerprints"""
        try:
            if not self.deduplicator.redis_client:
                return 0
            
            cutoff_date = datetime.now(timezone.utc).timestamp() - (days_old * 24 * 60 * 60)
            pattern = f"fingerprint:{self.deduplicator.site_id}:*"
            keys = self.deduplicator.redis_client.keys(pattern)
            
            removed_count = 0
            for key in keys:
                try:
                    fingerprint_data = self.deduplicator.redis_client.get(key)
                    if fingerprint_data:
                        data = json.loads(fingerprint_data)
                        created_at = datetime.fromisoformat(data['created_at'].replace('Z', '+00:00'))
                        
                        if created_at.timestamp() < cutoff_date:
                            self.deduplicator.redis_client.delete(key)
                            removed_count += 1
                            
                except Exception as e:
                    self.logger.debug(f"Error processing fingerprint for cleanup: {str(e)}")
                    continue
            
            self.logger.info(f"Cleaned up {removed_count} old fingerprints")
            return removed_count
            
        except Exception as e:
            self.logger.error(f"Error cleaning up old fingerprints: {str(e)}")
            return 0
