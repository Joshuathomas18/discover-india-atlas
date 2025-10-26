"""
Advanced Ranking Engine for Large-Scale Product Analysis

Implements two-phase ranking system for 200+ products:
Phase 1: Quick filter (remove obvious mismatches)
Phase 2: Detailed ranking (top 50 → top 10)
Phase 3: Final selection (top 10 with explanations)
"""

import logging
from typing import Dict, List, Any, Tuple
from datetime import datetime, timezone
import re

logger = logging.getLogger(__name__)

class AdvancedRankingEngine:
    """Advanced ranking engine for large-scale product analysis"""
    
    def __init__(self):
        self.weights = {
            'query_relevance': 0.35,
            'quality_score': 0.25,
            'value_proposition': 0.20,
            'availability': 0.10,
            'popularity': 0.10
        }
    
    def rank_products(self, products: List[Dict[str, Any]], query: str, 
                     filters: Dict[str, Any] = None, top_n: int = 10) -> Dict[str, Any]:
        """
        Main ranking function with two-phase approach
        
        Args:
            products: List of products to rank
            query: Search query
            filters: Applied filters
            top_n: Number of top products to return
            
        Returns:
            Dictionary with ranked products and explanation
        """
        try:
            logger.info(f"Starting advanced ranking for {len(products)} products")
            
            if not products:
                return self._empty_result()
            
            # Phase 1: Quick filter (remove obvious mismatches)
            filtered_products = self._phase1_quick_filter(products, query, filters)
            logger.info(f"Phase 1: Filtered to {len(filtered_products)} products")
            
            if len(filtered_products) <= top_n:
                # If filtered results are already small enough, rank them directly
                ranked_products = self._rank_products_detailed(filtered_products, query)
                return self._format_result(ranked_products[:top_n], query, len(products), len(filtered_products))
            
            # Phase 2: Detailed ranking (top 50)
            phase2_count = min(50, len(filtered_products))
            phase2_products = self._rank_products_detailed(filtered_products, query)[:phase2_count]
            logger.info(f"Phase 2: Ranked top {len(phase2_products)} products")
            
            # Phase 3: Final selection (top 10)
            final_products = self._phase3_final_selection(phase2_products, query, top_n)
            logger.info(f"Phase 3: Selected top {len(final_products)} products")
            
            return self._format_result(final_products, query, len(products), len(filtered_products))
            
        except Exception as e:
            logger.error(f"Error in ranking engine: {e}")
            return self._empty_result()
    
    def _phase1_quick_filter(self, products: List[Dict[str, Any]], query: str, 
                            filters: Dict[str, Any] = None) -> List[Dict[str, Any]]:
        """Phase 1: Quick filter to remove obvious mismatches"""
        filtered = []
        query_terms = set(query.lower().split())
        
        for product in products:
            # Basic quality checks
            if not self._has_essential_data(product):
                continue
            
            # Query relevance check
            if not self._basic_query_match(product, query_terms):
                continue
            
            # Filter compliance check
            if filters and not self._passes_filters(product, filters):
                continue
            
            filtered.append(product)
        
        return filtered
    
    def _phase3_final_selection(self, products: List[Dict[str, Any]], query: str, 
                               top_n: int) -> List[Dict[str, Any]]:
        """Phase 3: Final selection with refined scoring"""
        # Re-rank with more precise scoring
        for product in products:
            product['final_score'] = self._calculate_final_score(product, query)
        
        # Sort by final score
        products.sort(key=lambda x: x.get('final_score', 0), reverse=True)
        
        # Add ranking metadata
        for i, product in enumerate(products[:top_n]):
            product['rank'] = i + 1
            product['ranking_explanation'] = self._generate_ranking_explanation(product, query)
        
        return products[:top_n]
    
    def _rank_products_detailed(self, products: List[Dict[str, Any]], query: str) -> List[Dict[str, Any]]:
        """Detailed ranking of products"""
        query_terms = set(query.lower().split())
        
        for product in products:
            # Calculate individual scores
            product['query_relevance'] = self._calculate_query_relevance(product, query_terms)
            product['quality_score'] = self._calculate_quality_score(product)
            product['value_score'] = self._calculate_value_score(product)
            product['availability_score'] = self._calculate_availability_score(product)
            product['popularity_score'] = self._calculate_popularity_score(product)
            
            # Calculate weighted total score
            product['total_score'] = (
                product['query_relevance'] * self.weights['query_relevance'] +
                product['quality_score'] * self.weights['quality_score'] +
                product['value_score'] * self.weights['value_proposition'] +
                product['availability_score'] * self.weights['availability'] +
                product['popularity_score'] * self.weights['popularity']
            )
        
        # Sort by total score
        products.sort(key=lambda x: x.get('total_score', 0), reverse=True)
        return products
    
    def _has_essential_data(self, product: Dict[str, Any]) -> bool:
        """Check if product has essential data"""
        return bool(
            product.get('name') and 
            product.get('price') and 
            product.get('url')
        )
    
    def _basic_query_match(self, product: Dict[str, Any], query_terms: set) -> bool:
        """Basic query matching"""
        product_text = ' '.join([
            product.get('name', ''),
            product.get('brand', ''),
            product.get('category', '')
        ]).lower()
        
        # At least one query term should match
        return any(term in product_text for term in query_terms)
    
    def _passes_filters(self, product: Dict[str, Any], filters: Dict[str, Any]) -> bool:
        """Check if product passes filters"""
        # Size filter
        if filters.get('size'):
            if filters['size'] not in product.get('sizes', []):
                return False
        
        # Brand filter
        if filters.get('brand'):
            if product.get('brand', '').lower() != filters['brand'].lower():
                return False
        
        # Price filter
        if filters.get('min_price') or filters.get('max_price'):
            price = self._extract_price(product.get('price', '0'))
            min_price = filters.get('min_price', 0)
            max_price = filters.get('max_price', 999999)
            if not (min_price <= price <= max_price):
                return False
        
        return True
    
    def _calculate_query_relevance(self, product: Dict[str, Any], query_terms: set) -> float:
        """Calculate query relevance score"""
        product_text = ' '.join([
            product.get('name', ''),
            product.get('brand', ''),
            product.get('category', ''),
            product.get('description', '')
        ]).lower()
        
        matches = sum(1 for term in query_terms if term in product_text)
        return min(matches / len(query_terms), 1.0) if query_terms else 0.0
    
    def _calculate_quality_score(self, product: Dict[str, Any]) -> float:
        """Calculate quality score"""
        score = 0.0
        
        # Rating score
        rating = product.get('rating', 0)
        if rating:
            try:
                if isinstance(rating, str):
                    rating = float(rating.split()[0])
                score += (rating / 5.0) * 0.6
            except (ValueError, TypeError):
                pass
        
        # Brand reputation
        brand = product.get('brand', '').lower()
        premium_brands = ['nike', 'adidas', 'levis', 'allen solly', 'van heusen', 'peter england', 'zara', 'hm']
        if brand in premium_brands:
            score += 0.4
        elif brand and brand != 'n/a':
            score += 0.2
        
        return min(score, 1.0)
    
    def _calculate_value_score(self, product: Dict[str, Any]) -> float:
        """Calculate value proposition score"""
        score = 0.0
        
        # Discount score
        discount = product.get('discount_percentage', 0)
        if discount > 50:
            score += 0.5
        elif discount > 30:
            score += 0.4
        elif discount > 10:
            score += 0.3
        else:
            score += 0.1
        
        # Price positioning
        try:
            price = self._extract_price(product.get('price', '0'))
            if 500 <= price <= 2000:
                score += 0.3
            elif 200 <= price <= 5000:
                score += 0.2
            else:
                score += 0.1
        except:
            score += 0.2
        
        return min(score, 1.0)
    
    def _calculate_availability_score(self, product: Dict[str, Any]) -> float:
        """Calculate availability score"""
        score = 0.0
        
        if product.get('image_url') and product['image_url'] != 'N/A':
            score += 0.3
        
        if product.get('price') and product['price'] != 'N/A':
            score += 0.3
        
        if product.get('brand') and product['brand'] != 'N/A':
            score += 0.2
        
        if product.get('url'):
            score += 0.2
        
        return score
    
    def _calculate_popularity_score(self, product: Dict[str, Any]) -> float:
        """Calculate popularity score"""
        score = 0.0
        
        # Rating count
        rating_count = product.get('rating_count', '0')
        if rating_count:
            try:
                count = self._extract_number(rating_count)
                if count > 1000:
                    score += 0.5
                elif count > 100:
                    score += 0.3
                else:
                    score += 0.1
            except:
                score += 0.1
        
        # Brand popularity
        brand = product.get('brand', '').lower()
        popular_brands = ['nike', 'adidas', 'levis', 'zara', 'hm', 'allen solly']
        if brand in popular_brands:
            score += 0.5
        
        return min(score, 1.0)
    
    def _calculate_final_score(self, product: Dict[str, Any], query: str) -> float:
        """Calculate final refined score"""
        # Use existing scores if available
        if 'total_score' in product:
            return product['total_score']
        
        # Calculate fresh score
        query_terms = set(query.lower().split())
        return (
            self._calculate_query_relevance(product, query_terms) * self.weights['query_relevance'] +
            self._calculate_quality_score(product) * self.weights['quality_score'] +
            self._calculate_value_score(product) * self.weights['value_proposition'] +
            self._calculate_availability_score(product) * self.weights['availability'] +
            self._calculate_popularity_score(product) * self.weights['popularity']
        )
    
    def _generate_ranking_explanation(self, product: Dict[str, Any], query: str) -> str:
        """Generate explanation for why this product was ranked highly"""
        explanations = []
        
        if product.get('query_relevance', 0) > 0.8:
            explanations.append("Highly relevant to search query")
        
        if product.get('quality_score', 0) > 0.7:
            explanations.append("High quality product")
        
        if product.get('value_score', 0) > 0.6:
            explanations.append("Good value proposition")
        
        if product.get('discount_percentage', 0) > 30:
            explanations.append(f"Great discount ({product['discount_percentage']}% off)")
        
        if product.get('rating', 0) and float(str(product['rating']).split()[0]) > 4.0:
            explanations.append("Highly rated by customers")
        
        return "; ".join(explanations) if explanations else "Good overall match"
    
    def _extract_price(self, price_str: str) -> float:
        """Extract numeric price from string"""
        try:
            # Remove currency symbols and extract numbers
            price = re.sub(r'[^\d.]', '', str(price_str))
            return float(price) if price else 0.0
        except:
            return 0.0
    
    def _extract_number(self, num_str: str) -> int:
        """Extract number from string (e.g., '1.2k' -> 1200)"""
        try:
            num_str = str(num_str).lower().replace(',', '')
            if 'k' in num_str:
                return int(float(num_str.replace('k', '')) * 1000)
            elif 'm' in num_str:
                return int(float(num_str.replace('m', '')) * 1000000)
            else:
                return int(float(num_str))
        except:
            return 0
    
    def _format_result(self, products: List[Dict[str, Any]], query: str, 
                      total_scraped: int, total_filtered: int) -> Dict[str, Any]:
        """Format final result"""
        return {
            'products': products,
            'total_scraped': total_scraped,
            'total_filtered': total_filtered,
            'total_ranked': len(products),
            'search_query': query,
            'ranked_at': datetime.now(timezone.utc).isoformat(),
            'ranking_explanation': f"Ranked {len(products)} products from {total_filtered} filtered results (from {total_scraped} total scraped)",
            'selection_criteria': f"Multi-factor ranking based on query relevance, quality, value, availability, and popularity"
        }
    
    def _empty_result(self) -> Dict[str, Any]:
        """Return empty result"""
        return {
            'products': [],
            'total_scraped': 0,
            'total_filtered': 0,
            'total_ranked': 0,
            'search_query': '',
            'ranked_at': datetime.now(timezone.utc).isoformat(),
            'ranking_explanation': 'No products to rank',
            'selection_criteria': 'No products available'
        }

# Global ranking engine instance
ranking_engine = AdvancedRankingEngine()
