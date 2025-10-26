"""
Hybrid Search Service
Combines vector similarity, filters, and reranking for product search
"""

import logging
import numpy as np
from typing import Dict, Any, List, Optional, Tuple
from datetime import datetime, timezone
import json

from .enrichment_service import TextEmbeddingService
from ..data.firestore_schema import ProductStorage
from ..config.scraper_config import get_priority_weights

logger = logging.getLogger(__name__)

class HybridSearchService:
    """Hybrid search combining multiple search strategies"""
    
    def __init__(self):
        self.enrichment_service = TextEmbeddingService()
        self.product_storage = ProductStorage()
        self.priority_weights = get_priority_weights()
        self.logger = logging.getLogger(__name__)
    
    def search(self, query: str, filters: Dict[str, Any] = None, 
              k: int = 20, rerank_alpha: float = 0.7) -> Dict[str, Any]:
        """
        Perform hybrid search combining vector similarity, filters, and reranking
        
        Args:
            query: Search query text
            filters: Additional filters (brand, category, price, etc.)
            k: Number of results to return
            rerank_alpha: Weight for reranking (0.0 = no reranking, 1.0 = full reranking)
            
        Returns:
            Search results with scores and metadata
        """
        try:
            # Step 1: Get candidate products using filters
            candidate_products = self._get_candidate_products(filters, k * 3)  # Get more candidates
            
            if not candidate_products:
                return {
                    'query': query,
                    'results': [],
                    'total': 0,
                    'filters_applied': filters or {},
                    'search_time_ms': 0
                }
            
            # Step 2: Calculate vector similarity scores
            similarity_scores = self._calculate_similarity_scores(query, candidate_products)
            
            # Step 3: Calculate business rule scores
            business_scores = self._calculate_business_scores(candidate_products)
            
            # Step 4: Combine scores and rerank
            ranked_products = self._rerank_products(
                candidate_products, 
                similarity_scores, 
                business_scores, 
                rerank_alpha
            )
            
            # Step 5: Return top k results
            top_results = ranked_products[:k]
            
            return {
                'query': query,
                'results': top_results,
                'total': len(top_results),
                'filters_applied': filters or {},
                'search_time_ms': 0  # Would be calculated in production
            }
            
        except Exception as e:
            self.logger.error(f"Error in hybrid search: {str(e)}")
            return {
                'query': query,
                'results': [],
                'total': 0,
                'filters_applied': filters or {},
                'error': str(e)
            }
    
    def _get_candidate_products(self, filters: Dict[str, Any], limit: int) -> List[Dict[str, Any]]:
        """Get candidate products using basic filters"""
        try:
            if not filters:
                # Get recent products if no filters
                return self.product_storage.schema.search_products({}, limit)
            
            return self.product_storage.schema.search_products(filters, limit)
            
        except Exception as e:
            self.logger.error(f"Error getting candidate products: {str(e)}")
            return []
    
    def _calculate_similarity_scores(self, query: str, products: List[Dict[str, Any]]) -> List[float]:
        """Calculate vector similarity scores for products"""
        try:
            if not query:
                return [0.0] * len(products)
            
            # Generate query embedding
            query_embedding = self.enrichment_service.multimodal_service.text_service.encode_text(query)
            if query_embedding is None:
                return [0.0] * len(products)
            
            similarity_scores = []
            
            for product in products:
                # Get product embedding
                product_embedding = product.get('combined_embedding') or product.get('text_embedding')
                
                if product_embedding:
                    # Calculate cosine similarity
                    similarity = self._cosine_similarity(query_embedding, product_embedding)
                    similarity_scores.append(similarity)
                else:
                    # Fallback to text-based similarity
                    similarity = self._text_similarity(query, product)
                    similarity_scores.append(similarity)
            
            return similarity_scores
            
        except Exception as e:
            self.logger.error(f"Error calculating similarity scores: {str(e)}")
            return [0.0] * len(products)
    
    def _cosine_similarity(self, vec1: np.ndarray, vec2: List[float]) -> float:
        """Calculate cosine similarity between two vectors"""
        try:
            vec2 = np.array(vec2)
            
            # Normalize vectors
            vec1_norm = vec1 / np.linalg.norm(vec1)
            vec2_norm = vec2 / np.linalg.norm(vec2)
            
            # Calculate cosine similarity
            similarity = np.dot(vec1_norm, vec2_norm)
            return float(similarity)
            
        except Exception as e:
            self.logger.error(f"Error calculating cosine similarity: {str(e)}")
            return 0.0
    
    def _text_similarity(self, query: str, product: Dict[str, Any]) -> float:
        """Calculate text-based similarity as fallback"""
        try:
            query_lower = query.lower()
            
            # Extract product text
            title = product.get('title', '').lower()
            description = product.get('description', '').lower()
            brand = product.get('brand', '').lower()
            categories = [cat.lower() for cat in product.get('category', [])]
            
            # Calculate simple text overlap
            product_text = f"{title} {description} {brand} {' '.join(categories)}"
            
            # Simple word overlap score
            query_words = set(query_lower.split())
            product_words = set(product_text.split())
            
            if not query_words:
                return 0.0
            
            overlap = len(query_words.intersection(product_words))
            similarity = overlap / len(query_words)
            
            return similarity
            
        except Exception as e:
            self.logger.error(f"Error calculating text similarity: {str(e)}")
            return 0.0
    
    def _calculate_business_scores(self, products: List[Dict[str, Any]]) -> List[float]:
        """Calculate business rule scores for products"""
        try:
            scores = []
            
            for product in products:
                score = 0.0
                
                # Size score (availability of sizes)
                sizes = product.get('sizes', [])
                size_score = min(1.0, len(sizes) / 5.0) if sizes else 0.5
                score += self.priority_weights['size'] * size_score
                
                # Cost score (discount percentage)
                discount = product.get('discount_percent', 0)
                cost_score = min(1.0, discount / 50.0) if discount else 0.5
                score += self.priority_weights['cost'] * cost_score
                
                # Style score (based on style classification)
                style = product.get('style', 'Unknown')
                style_score = 1.0 if style != 'Unknown' else 0.5
                score += self.priority_weights['style'] * style_score
                
                # Priority score (from original crawling)
                priority_score = product.get('priority_score', 0.5)
                score += self.priority_weights['priority'] * priority_score
                
                # Freshness score (based on scraped_at date)
                freshness_score = self._calculate_freshness_score(product)
                score += self.priority_weights['freshness'] * freshness_score
                
                scores.append(score)
            
            return scores
            
        except Exception as e:
            self.logger.error(f"Error calculating business scores: {str(e)}")
            return [0.0] * len(products)
    
    def _calculate_freshness_score(self, product: Dict[str, Any]) -> float:
        """Calculate freshness score based on scraped_at date"""
        try:
            scraped_at = product.get('scraped_at')
            if not scraped_at:
                return 0.5
            
            # Parse date
            if isinstance(scraped_at, str):
                scraped_date = datetime.fromisoformat(scraped_at.replace('Z', '+00:00'))
            else:
                scraped_date = scraped_at
            
            # Calculate days since scraped
            now = datetime.now(timezone.utc)
            days_old = (now - scraped_date).days
            
            # Exponential decay
            if days_old <= 1:
                return 1.0
            elif days_old <= 7:
                return 0.8
            elif days_old <= 30:
                return 0.6
            elif days_old <= 90:
                return 0.4
            else:
                return 0.2
                
        except Exception as e:
            self.logger.error(f"Error calculating freshness score: {str(e)}")
            return 0.5
    
    def _rerank_products(self, products: List[Dict[str, Any]], 
                        similarity_scores: List[float], 
                        business_scores: List[float], 
                        alpha: float) -> List[Dict[str, Any]]:
        """Rerank products combining similarity and business scores"""
        try:
            if not products:
                return []
            
            # Combine scores
            combined_scores = []
            for i, product in enumerate(products):
                similarity = similarity_scores[i] if i < len(similarity_scores) else 0.0
                business = business_scores[i] if i < len(business_scores) else 0.0
                
                # Weighted combination
                combined_score = alpha * similarity + (1 - alpha) * business
                
                # Add score to product data
                product_with_score = product.copy()
                product_with_score['search_score'] = combined_score
                product_with_score['similarity_score'] = similarity
                product_with_score['business_score'] = business
                
                combined_scores.append((combined_score, product_with_score))
            
            # Sort by combined score (descending)
            combined_scores.sort(key=lambda x: x[0], reverse=True)
            
            # Return products without the score tuple
            return [product for _, product in combined_scores]
            
        except Exception as e:
            self.logger.error(f"Error reranking products: {str(e)}")
            return products
    
    def get_search_suggestions(self, query: str, limit: int = 10) -> List[str]:
        """Get search suggestions based on query"""
        try:
            # Simple implementation - in production, use more sophisticated methods
            suggestions = []
            
            # Get recent products for suggestions
            recent_products = self.product_storage.schema.search_products({}, 100)
            
            # Extract unique brands, categories, and styles
            brands = set()
            categories = set()
            styles = set()
            
            for product in recent_products:
                if product.get('brand'):
                    brands.add(product['brand'])
                if product.get('category'):
                    categories.update(product['category'])
                if product.get('style'):
                    styles.add(product['style'])
            
            # Generate suggestions
            query_lower = query.lower()
            
            for brand in brands:
                if query_lower in brand.lower():
                    suggestions.append(brand)
            
            for category in categories:
                if query_lower in category.lower():
                    suggestions.append(category)
            
            for style in styles:
                if query_lower in style.lower():
                    suggestions.append(style)
            
            return suggestions[:limit]
            
        except Exception as e:
            self.logger.error(f"Error getting search suggestions: {str(e)}")
            return []
    
    def get_filters(self) -> Dict[str, List[str]]:
        """Get available filter options"""
        try:
            # Get all products for filter options
            all_products = self.product_storage.schema.search_products({}, 1000)
            
            filters = {
                'brands': set(),
                'categories': set(),
                'genders': set(),
                'styles': set(),
                'seasons': set(),
                'formalities': set(),
                'price_ranges': []
            }
            
            prices = []
            
            for product in all_products:
                if product.get('brand'):
                    filters['brands'].add(product['brand'])
                if product.get('category'):
                    category = product['category']
                    if isinstance(category, list):
                        filters['categories'].update(category)
                    else:
                        filters['categories'].add(category)
                if product.get('gender'):
                    filters['genders'].add(product['gender'])
                if product.get('style'):
                    filters['styles'].add(product['style'])
                if product.get('season'):
                    filters['seasons'].add(product['season'])
                if product.get('formality'):
                    filters['formalities'].add(product['formality'])
                
                price = product.get('price', {}).get('current')
                if price:
                    prices.append(price)
            
            # Convert sets to sorted lists
            filters['brands'] = sorted(list(filters['brands']))
            filters['categories'] = sorted(list(filters['categories']))
            filters['genders'] = sorted(list(filters['genders']))
            filters['styles'] = sorted(list(filters['styles']))
            filters['seasons'] = sorted(list(filters['seasons']))
            filters['formalities'] = sorted(list(filters['formalities']))
            
            # Calculate price ranges
            if prices:
                min_price = min(prices)
                max_price = max(prices)
                filters['price_ranges'] = [
                    {'label': 'Under $50', 'min': 0, 'max': 50},
                    {'label': '$50 - $100', 'min': 50, 'max': 100},
                    {'label': '$100 - $200', 'min': 100, 'max': 200},
                    {'label': '$200 - $500', 'min': 200, 'max': 500},
                    {'label': 'Over $500', 'min': 500, 'max': float('inf')}
                ]
            
            return filters
            
        except Exception as e:
            self.logger.error(f"Error getting filters: {str(e)}")
            return {}
