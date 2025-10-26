"""
Firestore Schema and Storage Service
Handles Firestore collections for sites, crawl_jobs, and products
"""

import logging
from typing import Dict, Any, List, Optional
from datetime import datetime, timezone
from google.cloud import firestore
from google.cloud.firestore_v1.base_query import FieldFilter

from ..config.scraper_config import get_firestore_collections
from app.firebase.client import get_firestore_client

logger = logging.getLogger(__name__)

class FirestoreSchema:
    """Manages Firestore schema and collections"""
    
    def __init__(self):
        self.collections = get_firestore_collections()
        self.db = get_firestore_client()
        self.logger = logging.getLogger(__name__)
    
    def create_site(self, site_data: Dict[str, Any]) -> str:
        """Create a new site document"""
        try:
            site_id = site_data.get('site_id', '')
            if not site_id:
                raise ValueError("site_id is required")
            
            # Prepare site document
            site_doc = {
                'site_id': site_id,
                'sitemap_url': site_data.get('sitemap_url', ''),
                'crawl_config': site_data.get('crawl_config', {}),
                'last_crawled': site_data.get('last_crawled'),
                'status': site_data.get('status', 'active'),
                'created_at': datetime.now(timezone.utc),
                'updated_at': datetime.now(timezone.utc)
            }
            
            # Add to Firestore
            doc_ref = self.db.collection(self.collections['sites']).document(site_id)
            doc_ref.set(site_doc)
            
            self.logger.info(f"Created site: {site_id}")
            return site_id
            
        except Exception as e:
            self.logger.error(f"Error creating site: {str(e)}")
            raise
    
    def get_site(self, site_id: str) -> Optional[Dict[str, Any]]:
        """Get site document by ID"""
        try:
            doc_ref = self.db.collection(self.collections['sites']).document(site_id)
            doc = doc_ref.get()
            
            if doc.exists:
                return doc.to_dict()
            return None
            
        except Exception as e:
            self.logger.error(f"Error getting site {site_id}: {str(e)}")
            return None
    
    def update_site(self, site_id: str, update_data: Dict[str, Any]) -> bool:
        """Update site document"""
        try:
            doc_ref = self.db.collection(self.collections['sites']).document(site_id)
            
            # Add updated_at timestamp
            update_data['updated_at'] = datetime.now(timezone.utc)
            
            doc_ref.update(update_data)
            self.logger.info(f"Updated site: {site_id}")
            return True
            
        except Exception as e:
            self.logger.error(f"Error updating site {site_id}: {str(e)}")
            return False
    
    def create_crawl_job(self, job_data: Dict[str, Any]) -> str:
        """Create a new crawl job document"""
        try:
            job_id = job_data.get('job_id', '')
            if not job_id:
                raise ValueError("job_id is required")
            
            # Prepare job document
            job_doc = {
                'job_id': job_id,
                'site_id': job_data.get('site_id', ''),
                'status': job_data.get('status', 'pending'),
                'priority_weights': job_data.get('priority_weights', {}),
                'urls_to_crawl': job_data.get('urls_to_crawl', []),
                'urls_crawled': job_data.get('urls_crawled', []),
                'urls_failed': job_data.get('urls_failed', []),
                'products_found': job_data.get('products_found', 0),
                'products_processed': job_data.get('products_processed', 0),
                'started_at': job_data.get('started_at'),
                'completed_at': job_data.get('completed_at'),
                'created_at': datetime.now(timezone.utc),
                'updated_at': datetime.now(timezone.utc)
            }
            
            # Add to Firestore
            doc_ref = self.db.collection(self.collections['crawl_jobs']).document(job_id)
            doc_ref.set(job_doc)
            
            self.logger.info(f"Created crawl job: {job_id}")
            return job_id
            
        except Exception as e:
            self.logger.error(f"Error creating crawl job: {str(e)}")
            raise
    
    def update_crawl_job(self, job_id: str, update_data: Dict[str, Any]) -> bool:
        """Update crawl job document"""
        try:
            doc_ref = self.db.collection(self.collections['crawl_jobs']).document(job_id)
            
            # Add updated_at timestamp
            update_data['updated_at'] = datetime.now(timezone.utc)
            
            doc_ref.update(update_data)
            self.logger.info(f"Updated crawl job: {job_id}")
            return True
            
        except Exception as e:
            self.logger.error(f"Error updating crawl job {job_id}: {str(e)}")
            return False
    
    def get_crawl_job(self, job_id: str) -> Optional[Dict[str, Any]]:
        """Get crawl job document by ID"""
        try:
            doc_ref = self.db.collection(self.collections['crawl_jobs']).document(job_id)
            doc = doc_ref.get()
            
            if doc.exists:
                return doc.to_dict()
            return None
            
        except Exception as e:
            self.logger.error(f"Error getting crawl job {job_id}: {str(e)}")
            return None
    
    def list_crawl_jobs(self, site_id: Optional[str] = None, 
                       status: Optional[str] = None, 
                       limit: int = 100) -> List[Dict[str, Any]]:
        """List crawl jobs with optional filters"""
        try:
            query = self.db.collection(self.collections['crawl_jobs'])
            
            # Apply filters
            if site_id:
                query = query.where('site_id', '==', site_id)
            if status:
                query = query.where('status', '==', status)
            
            # Order by created_at desc
            query = query.order_by('created_at', direction=firestore.Query.DESCENDING)
            
            # Limit results
            query = query.limit(limit)
            
            # Execute query
            docs = query.stream()
            
            jobs = []
            for doc in docs:
                job_data = doc.to_dict()
                job_data['id'] = doc.id
                jobs.append(job_data)
            
            return jobs
            
        except Exception as e:
            self.logger.error(f"Error listing crawl jobs: {str(e)}")
            return []
    
    def create_product(self, product_data: Dict[str, Any]) -> str:
        """Create a new product document"""
        try:
            product_id = product_data.get('product_id', '')
            if not product_id:
                raise ValueError("product_id is required")
            
            # Prepare product document
            product_doc = {
                'product_id': product_id,
                'site_id': product_data.get('site_id', ''),
                'url': product_data.get('url', ''),
                'title': product_data.get('title', ''),
                'brand': product_data.get('brand', ''),
                'price': product_data.get('price', {}),
                'discount_percent': product_data.get('discount_percent'),
                'sizes': product_data.get('sizes', []),
                'colors': product_data.get('colors', []),
                'category': product_data.get('category', []),
                'material': product_data.get('material', ''),
                'availability': product_data.get('availability', 'Unknown'),
                'rating': product_data.get('rating'),
                'reviews_count': product_data.get('reviews_count'),
                'images': product_data.get('images', []),  # Array of image metadata objects
                'priority_score': product_data.get('priority_score', 0.0),
                'text_embedding': product_data.get('text_embedding'),  # Only text embeddings for search
                'gender': product_data.get('gender', 'Unknown'),
                'style': product_data.get('style', 'Unknown'),
                'season': product_data.get('season', 'All Season'),
                'formality': product_data.get('formality', 'Casual'),
                'sku': product_data.get('sku', ''),
                'gtin': product_data.get('gtin', ''),
                'mpn': product_data.get('mpn', ''),
                'scraped_at': product_data.get('scraped_at'),
                'enriched_at': product_data.get('enriched_at'),
                'created_at': datetime.now(timezone.utc),
                'updated_at': datetime.now(timezone.utc)
            }
            
            # Add to Firestore
            doc_ref = self.db.collection(self.collections['products']).document(product_id)
            doc_ref.set(product_doc)
            
            self.logger.info(f"Created product: {product_id}")
            return product_id
            
        except Exception as e:
            self.logger.error(f"Error creating product: {str(e)}")
            raise
    
    def get_product(self, product_id: str) -> Optional[Dict[str, Any]]:
        """Get product document by ID"""
        try:
            doc_ref = self.db.collection(self.collections['products']).document(product_id)
            doc = doc_ref.get()
            
            if doc.exists:
                return doc.to_dict()
            return None
            
        except Exception as e:
            self.logger.error(f"Error getting product {product_id}: {str(e)}")
            return None
    
    def update_product(self, product_id: str, update_data: Dict[str, Any]) -> bool:
        """Update product document"""
        try:
            doc_ref = self.db.collection(self.collections['products']).document(product_id)
            
            # Add updated_at timestamp
            update_data['updated_at'] = datetime.now(timezone.utc)
            
            doc_ref.update(update_data)
            self.logger.info(f"Updated product: {product_id}")
            return True
            
        except Exception as e:
            self.logger.error(f"Error updating product {product_id}: {str(e)}")
            return False
    
    def search_products(self, filters: Dict[str, Any], 
                       limit: int = 100) -> List[Dict[str, Any]]:
        """Search products with filters"""
        try:
            query = self.db.collection(self.collections['products'])
            
            # Apply filters
            if 'site_id' in filters:
                query = query.where('site_id', '==', filters['site_id'])
            
            if 'brand' in filters:
                query = query.where('brand', '==', filters['brand'])
            
            if 'category' in filters:
                query = query.where('category', 'array_contains', filters['category'])
            
            if 'gender' in filters:
                query = query.where('gender', '==', filters['gender'])
            
            if 'style' in filters:
                query = query.where('style', '==', filters['style'])
            
            if 'min_price' in filters:
                query = query.where('price.current', '>=', filters['min_price'])
            
            if 'max_price' in filters:
                query = query.where('price.current', '<=', filters['max_price'])
            
            if 'availability' in filters:
                query = query.where('availability', '==', filters['availability'])
            
            # Order by priority score desc
            query = query.order_by('priority_score', direction=firestore.Query.DESCENDING)
            
            # Limit results
            query = query.limit(limit)
            
            # Execute query
            docs = query.stream()
            
            products = []
            for doc in docs:
                product_data = doc.to_dict()
                product_data['id'] = doc.id
                products.append(product_data)
            
            return products
            
        except Exception as e:
            self.logger.error(f"Error searching products: {str(e)}")
            return []
    
    def get_products_by_site(self, site_id: str, limit: int = 100) -> List[Dict[str, Any]]:
        """Get all products for a specific site"""
        return self.search_products({'site_id': site_id}, limit)
    
    def delete_product(self, product_id: str) -> bool:
        """Delete product document"""
        try:
            doc_ref = self.db.collection(self.collections['products']).document(product_id)
            doc_ref.delete()
            
            self.logger.info(f"Deleted product: {product_id}")
            return True
            
        except Exception as e:
            self.logger.error(f"Error deleting product {product_id}: {str(e)}")
            return False
    
    def get_product_stats(self, site_id: Optional[str] = None) -> Dict[str, Any]:
        """Get product statistics"""
        try:
            query = self.db.collection(self.collections['products'])
            
            if site_id:
                query = query.where('site_id', '==', site_id)
            
            docs = query.stream()
            
            stats = {
                'total_products': 0,
                'by_brand': {},
                'by_category': {},
                'by_gender': {},
                'by_style': {},
                'price_range': {'min': float('inf'), 'max': 0},
                'avg_rating': 0,
                'total_ratings': 0
            }
            
            total_rating = 0
            rating_count = 0
            
            for doc in docs:
                product_data = doc.to_dict()
                stats['total_products'] += 1
                
                # Brand stats
                brand = product_data.get('brand', 'Unknown')
                stats['by_brand'][brand] = stats['by_brand'].get(brand, 0) + 1
                
                # Category stats
                categories = product_data.get('category', [])
                for category in categories:
                    stats['by_category'][category] = stats['by_category'].get(category, 0) + 1
                
                # Gender stats
                gender = product_data.get('gender', 'Unknown')
                stats['by_gender'][gender] = stats['by_gender'].get(gender, 0) + 1
                
                # Style stats
                style = product_data.get('style', 'Unknown')
                stats['by_style'][style] = stats['by_style'].get(style, 0) + 1
                
                # Price range
                price = product_data.get('price', {}).get('current')
                if price:
                    stats['price_range']['min'] = min(stats['price_range']['min'], price)
                    stats['price_range']['max'] = max(stats['price_range']['max'], price)
                
                # Rating stats
                rating = product_data.get('rating')
                if rating:
                    total_rating += rating
                    rating_count += 1
            
            # Calculate average rating
            if rating_count > 0:
                stats['avg_rating'] = total_rating / rating_count
                stats['total_ratings'] = rating_count
            
            # Handle price range edge cases
            if stats['price_range']['min'] == float('inf'):
                stats['price_range']['min'] = 0
            
            return stats
            
        except Exception as e:
            self.logger.error(f"Error getting product stats: {str(e)}")
            return {}

class ProductStorage:
    """High-level product storage operations"""
    
    def __init__(self):
        self.schema = FirestoreSchema()
        self.logger = logging.getLogger(__name__)
    
    def store_product(self, product_data: Dict[str, Any]) -> str:
        """Store a product with deduplication check"""
        try:
            product_id = product_data.get('product_id', '')
            
            # Check if product already exists
            existing_product = self.schema.get_product(product_id)
            if existing_product:
                # Update existing product
                self.schema.update_product(product_id, product_data)
                self.logger.info(f"Updated existing product: {product_id}")
            else:
                # Create new product
                self.schema.create_product(product_data)
                self.logger.info(f"Created new product: {product_id}")
            
            return product_id
            
        except Exception as e:
            self.logger.error(f"Error storing product: {str(e)}")
            raise
    
    def batch_store_products(self, products: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Store multiple products in batch"""
        results = {
            'total_processed': len(products),
            'created': 0,
            'updated': 0,
            'errors': 0,
            'error_details': []
        }
        
        for product in products:
            try:
                product_id = product.get('product_id', '')
                
                # Check if product already exists
                existing_product = self.schema.get_product(product_id)
                if existing_product:
                    self.schema.update_product(product_id, product)
                    results['updated'] += 1
                else:
                    self.schema.create_product(product)
                    results['created'] += 1
                    
            except Exception as e:
                results['errors'] += 1
                results['error_details'].append({
                    'product_id': product.get('product_id', ''),
                    'error': str(e)
                })
                self.logger.error(f"Error storing product {product.get('product_id', '')}: {str(e)}")
        
        return results
    
    def search_products(self, query: str, filters: Dict[str, Any] = None, 
                       limit: int = 100) -> List[Dict[str, Any]]:
        """Search products with text query and filters"""
        try:
            # For now, use basic filtering
            # In production, you'd implement vector search here
            search_filters = filters or {}
            
            products = self.schema.search_products(search_filters, limit)
            
            # Simple text matching (in production, use vector search)
            if query:
                query_lower = query.lower()
                filtered_products = []
                
                for product in products:
                    title = product.get('title', '').lower()
                    description = product.get('description', '').lower()
                    brand = product.get('brand', '').lower()
                    
                    if (query_lower in title or 
                        query_lower in description or 
                        query_lower in brand):
                        filtered_products.append(product)
                
                products = filtered_products
            
            return products
            
        except Exception as e:
            self.logger.error(f"Error searching products: {str(e)}")
            return []
    
    def get_product_recommendations(self, product_id: str, limit: int = 10) -> List[Dict[str, Any]]:
        """Get product recommendations based on similarity"""
        try:
            # Get the reference product
            product = self.schema.get_product(product_id)
            if not product:
                return []
            
            # Get products from same site with similar attributes
            filters = {
                'site_id': product.get('site_id'),
                'style': product.get('style'),
                'gender': product.get('gender')
            }
            
            recommendations = self.schema.search_products(filters, limit + 1)
            
            # Remove the reference product
            recommendations = [p for p in recommendations if p.get('product_id') != product_id]
            
            return recommendations[:limit]
            
        except Exception as e:
            self.logger.error(f"Error getting product recommendations: {str(e)}")
            return []
