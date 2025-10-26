"""
Myntra Scraper Service
Service layer for Myntra scraping operations
"""

import logging
from typing import Dict, List, Any, Optional
from datetime import datetime, timezone
import uuid

from .myntra_scraper import MyntraComprehensiveScraper
from ..data.firestore_schema import ProductStorage
from ..data.temp_storage import temp_storage
from ..services.ranking_engine import ranking_engine

logger = logging.getLogger(__name__)

class MyntraScraperService:
    """Service for Myntra scraping operations"""
    
    def __init__(self):
        self.scraper = MyntraComprehensiveScraper()
        self.storage = ProductStorage()
    
    def search_products_with_progress(self, query: str, max_products: int = 50, filters: Dict[str, Any] = None, progress_callback=None) -> Dict[str, Any]:
        """
        Search for products on Myntra with optimized approach:
        - No filters: Fast direct results (10-20 products)
        - With filters: Scrape 50 products + real-time similarity scoring + top 10
        """
        try:
            logger.info(f"Starting optimized Myntra search for: {query}")
            
            # Check if filters are applied
            has_filters = filters and any(filters.values())
            
            if not has_filters:
                # Fast path: No filters - return direct results
                return self._fast_search_no_filters(query, progress_callback)
            else:
                # Filtered path: Scrape 50 + real-time scoring
                return self._filtered_search_with_scoring(query, filters, progress_callback)
                
        except Exception as e:
            logger.error(f"Error searching Myntra products: {e}")
            return {
                'success': False,
                'message': f'Search failed: {str(e)}',
                'products': [],
                'total_found': 0
            }
    
    def _fast_search_no_filters(self, query: str, progress_callback=None) -> Dict[str, Any]:
        """Fast search for no filters - return first 15 products"""
        try:
            if progress_callback:
                progress_callback(0, 15, "Fast search - no filters applied...")
            
            # Quick scrape without detailed analysis
            self.scraper.setup_driver()
            try:
                products = self.scraper.comprehensive_scrape(
                    query,
                    max_products=15,
                    detailed_analysis=False,  # Skip detailed analysis for speed
                    progress_callback=progress_callback
                )
            finally:
                self.scraper.close_driver()
            
            if progress_callback:
                progress_callback(len(products), len(products), "Fast search completed!")
            
            return {
                'success': True,
                'message': f'Found {len(products)} products (fast search - no filters)',
                'products': products[:15],  # Limit to 15 for fast results
                'total_found': len(products),
                'total_analyzed': len(products),
                'search_mode': 'fast',
                'search_query': query,
                'scraped_at': datetime.now(timezone.utc).isoformat()
            }
            
        except Exception as e:
            logger.error(f"Error in fast search: {e}")
            raise
    
    def _filtered_search_with_scoring(self, query: str, filters: Dict[str, Any], progress_callback=None) -> Dict[str, Any]:
        """Filtered search with real-time similarity scoring"""
        try:
            if progress_callback:
                progress_callback(0, 50, "Filtered search - analyzing products...")
            
            # Scrape 50 products with real-time scoring
            self.scraper.setup_driver()
            try:
                products = self.scraper.comprehensive_scrape_with_scoring(
                    query,
                    max_products=50,
                    filters=filters,
                    progress_callback=progress_callback
                )
            finally:
                self.scraper.close_driver()
            
                # Get top 20 from real-time scoring
                top_products = products[:20]
            
            if progress_callback:
                progress_callback(len(top_products), 50, "Filtered search completed!")
            
            return {
                'success': True,
                'message': f'Found {len(top_products)} best matches from {len(products)} analyzed products',
                'products': top_products,
                'total_found': len(top_products),
                'total_analyzed': len(products),
                'search_mode': 'filtered',
                'search_query': query,
                'scraped_at': datetime.now(timezone.utc).isoformat(),
                'filters_applied': filters,
                'ranking_explanation': f'Ranked {len(products)} products by similarity score, showing top {len(top_products)} matches',
                'selection_criteria': 'Similarity scoring based on query relevance, quality indicators, value proposition, and availability'
            }
            
        except Exception as e:
            logger.error(f"Error in filtered search: {e}")
            raise

    def search_products(self, query: str, max_products: int = 20) -> Dict[str, Any]:
        """
        Search for products on Myntra
        
        Args:
            query: Search query (e.g., "red dresses")
            max_products: Maximum number of products to return
            
        Returns:
            Dict containing search results and metadata
        """
        try:
            logger.info(f"Starting Myntra search for: {query}")
            
            # Ensure driver lifecycle for faster, clean runs
            self.scraper.setup_driver()
            try:
                # Perform scrape with size extraction for top products
                products = self.scraper.comprehensive_scrape(
                    query,
                    max_products=max_products,
                    detailed_analysis=True  # Enable to get sizes
                )
            finally:
                self.scraper.close_driver()
            
            if not products:
                return {
                    'success': False,
                    'message': 'No products found',
                    'products': [],
                    'total_found': 0
                }
            
            # Store products in database
            stored_products = []
            for product in products:
                try:
                    # Add metadata
                    product['search_query'] = query
                    product['scraped_at'] = datetime.now(timezone.utc).isoformat()
                    product['source'] = 'myntra'
                    product['product_id'] = self._generate_product_id(product)
                    
                    # Store in Firestore
                    self.storage.schema.create_product(product)
                    stored_products.append(product)
                    
                except Exception as e:
                    logger.warning(f"Failed to store product: {e}")
                    continue
            
            # Apply smart ranking and select top products
            ranked_result = self.rank_and_select_top_products(stored_products, query, max_products)
            
            return {
                'success': True,
                'message': f'Found {len(ranked_result["top_products"])} best matches from {len(stored_products)} products',
                'products': ranked_result['top_products'],
                'total_found': len(ranked_result['top_products']),
                'total_analyzed': ranked_result['total_analyzed'],
                'search_query': query,
                'scraped_at': datetime.now(timezone.utc).isoformat(),
                'ranking_explanation': ranked_result['ranking_explanation'],
                'selection_criteria': ranked_result['selection_criteria']
            }
            
        except Exception as e:
            logger.error(f"Error searching Myntra products: {e}")
            return {
                'success': False,
                'message': f'Search failed: {str(e)}',
                'products': [],
                'total_found': 0
            }
    
    def analyze_product(self, product_url: str, use_advanced_extraction: bool = True) -> Dict[str, Any]:
        """
        Perform detailed analysis of a single Myntra product
        
        Args:
            product_url: URL of the product to analyze
            use_advanced_extraction: Whether to use advanced color extraction
            
        Returns:
            Dict containing detailed product analysis
        """
        try:
            logger.info(f"Analyzing Myntra product: {product_url}")
            
            # Setup scraper
            self.scraper.setup_driver()
            
            try:
                # Scrape product details
                product_data = self.scraper.scrape_product_details(
                    product_url, 
                    use_advanced_color_extraction=use_advanced_extraction
                )
                
                if not product_data:
                    return {
                        'success': False,
                        'message': 'Failed to extract product data',
                        'product': None
                    }
                
                # Add metadata
                product_data['analyzed_at'] = datetime.now(timezone.utc).isoformat()
                product_data['source'] = 'myntra'
                product_data['product_id'] = self._generate_product_id(product_data)
                
                # Store in database
                self.storage.schema.create_product(product_data)
                
                return {
                    'success': True,
                    'message': 'Product analyzed successfully',
                    'product': product_data
                }
                
            finally:
                self.scraper.close_driver()
                
        except Exception as e:
            logger.error(f"Error analyzing Myntra product: {e}")
            return {
                'success': False,
                'message': f'Analysis failed: {str(e)}',
                'product': None
            }
    
    def get_trending_products(self, category: str = None, max_products: int = 20) -> Dict[str, Any]:
        """
        Get trending products from Myntra
        
        Args:
            category: Product category (e.g., "dresses", "shirts")
            max_products: Maximum number of products to return
            
        Returns:
            Dict containing trending products
        """
        try:
            # Use popular search terms for trending products
            trending_queries = [
                "dresses", "shirts", "tshirts", "jeans"
            ]
            
            if category:
                trending_queries = [category]
            
            all_products = []
            
            # Reuse one driver across trending queries, then close
            self.scraper.setup_driver()
            try:
                # Keep trending ultra fast: single query, minimal scroll, few results
                queries_to_run = [trending_queries[0]] if not category else [category]
                per_query = max(1, min(3, max_products))
                for query in queries_to_run:
                    try:
                        products = self.scraper.search_products(
                            query,
                            max_scrolls=1,
                            max_results=per_query
                        )
                        all_products.extend(products)
                    except Exception as e:
                        logger.warning(f"Failed to get trending for {query}: {e}")
                        continue
            finally:
                self.scraper.close_driver()
            
            # Remove duplicates and limit results
            unique_products = self._deduplicate_products(all_products)
            trending_products = unique_products[:max_products]
            
            return {
                'success': True,
                'message': f'Found {len(trending_products)} trending products',
                'products': trending_products,
                'total_found': len(trending_products),
                'category': category
            }
            
        except Exception as e:
            logger.error(f"Error getting trending products: {e}")
            return {
                'success': False,
                'message': f'Failed to get trending products: {str(e)}',
                'products': [],
                'total_found': 0
            }
    
    def batch_analyze_products(self, product_urls: List[str]) -> Dict[str, Any]:
        """
        Batch analyze multiple Myntra products
        
        Args:
            product_urls: List of product URLs to analyze
            
        Returns:
            Dict containing analysis results for all products
        """
        try:
            logger.info(f"Batch analyzing {len(product_urls)} products")
            
            results = {
                'success': True,
                'message': f'Analyzed {len(product_urls)} products',
                'products': [],
                'failed': [],
                'total_processed': 0
            }
            
            for i, url in enumerate(product_urls):
                try:
                    logger.info(f"Analyzing product {i+1}/{len(product_urls)}: {url}")
                    
                    # Analyze single product
                    analysis_result = self.analyze_product(url)
                    
                    if analysis_result['success']:
                        results['products'].append(analysis_result['product'])
                    else:
                        results['failed'].append({
                            'url': url,
                            'error': analysis_result['message']
                        })
                    
                    results['total_processed'] += 1
                    
                except Exception as e:
                    logger.error(f"Failed to analyze {url}: {e}")
                    results['failed'].append({
                        'url': url,
                        'error': str(e)
                    })
                    results['total_processed'] += 1
            
            return results
            
        except Exception as e:
            logger.error(f"Error in batch analysis: {e}")
            return {
                'success': False,
                'message': f'Batch analysis failed: {str(e)}',
                'products': [],
                'failed': [],
                'total_processed': 0
            }
    
    def apply_filters(self, products: List[Dict[str, Any]], filters: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Apply filters to product list"""
        try:
            filtered_products = products.copy()
            
            # Brand filter
            if filters.get('brand'):
                selected_brand = filters['brand']
                filtered_products = [p for p in filtered_products if p.get('brand', '').lower() == selected_brand.lower()]
            
            # Price range filter
            if filters.get('min_price') is not None or filters.get('max_price') is not None:
                min_price = filters.get('min_price', 0)
                max_price = filters.get('max_price', 99999)
                filtered_products = [p for p in filtered_products if self._price_in_range(p.get('price', '0'), min_price, max_price)]
            
            # Size filter
            if filters.get('size'):
                selected_size = filters['size']
                filtered_products = [p for p in filtered_products if selected_size in p.get('sizes', [])]
            
            # Color filter
            if filters.get('color'):
                selected_color = filters['color']
                filtered_products = [p for p in filtered_products if selected_color.lower() in [c.lower() for c in p.get('colors', [])]]
            
            # Rating filter
            if filters.get('min_rating'):
                min_rating = filters['min_rating']
                filtered_products = [p for p in filtered_products if p.get('rating', 0) >= min_rating]
            
            # Discount filter
            if filters.get('min_discount'):
                min_discount = filters['min_discount']
                filtered_products = [p for p in filtered_products if p.get('discount_percentage', 0) >= min_discount]
            
            # Category filter
            if filters.get('category'):
                selected_category = filters['category']
                filtered_products = [p for p in filtered_products if selected_category.lower() in p.get('category', '').lower()]
            
            return filtered_products
            
        except Exception as e:
            logger.error(f"Error applying filters: {e}")
            return products
    
    def _price_in_range(self, price_str: str, min_price: float, max_price: float) -> bool:
        """Check if price string is within range"""
        try:
            # Extract numeric value from price string
            price = float(''.join(filter(str.isdigit, price_str)))
            return min_price <= price <= max_price
        except (ValueError, TypeError):
            return False
    
    def rank_and_select_top_products(self, products: List[Dict[str, Any]], query: str, max_results: int = 5) -> Dict[str, Any]:
        """Rank products and return top matches based on multiple criteria"""
        try:
            logger.info(f"Ranking {len(products)} products for query: {query}")
            
            # Calculate relevance scores for each product
            ranked_products = []
            for product in products:
                score_breakdown = self.calculate_relevance_score(product, query)
                product['relevance_score'] = score_breakdown['total_score']
                product['score_breakdown'] = score_breakdown
                ranked_products.append(product)
            
            # Sort by relevance score (highest first)
            ranked_products.sort(key=lambda x: x['relevance_score'], reverse=True)
            
            # Select top products
            top_products = ranked_products[:max_results]
            
            # Generate explanation
            explanation = self.generate_ranking_explanation(top_products, query)
            criteria = self.get_selection_criteria()
            
            return {
                'top_products': top_products,
                'ranking_explanation': explanation,
                'total_analyzed': len(products),
                'selection_criteria': criteria
            }
            
        except Exception as e:
            logger.error(f"Error ranking products: {e}")
            return {
                'top_products': products[:max_results],
                'ranking_explanation': "Standard selection applied",
                'total_analyzed': len(products),
                'selection_criteria': {}
            }
    
    def calculate_relevance_score(self, product: Dict[str, Any], query: str) -> Dict[str, Any]:
        """Calculate comprehensive relevance score for a product"""
        try:
            # Query relevance (40% weight)
            query_score = self.calculate_query_match(product, query) or 0.0
            
            # Quality indicators (30% weight)
            quality_score = self.calculate_quality_score(product) or 0.0
            
            # Value proposition (20% weight)
            value_score = self.calculate_value_score(product) or 0.0
            
            # Availability score (10% weight)
            availability_score = self.calculate_availability_score(product) or 0.0
            
            # Calculate weighted total
            total_score = (
                query_score * 0.4 +
                quality_score * 0.3 +
                value_score * 0.2 +
                availability_score * 0.1
            )
            
            return {
                'total_score': round(total_score, 2),
                'query_score': round(query_score, 2),
                'quality_score': round(quality_score, 2),
                'value_score': round(value_score, 2),
                'availability_score': round(availability_score, 2)
            }
            
        except Exception as e:
            logger.error(f"Error calculating relevance score: {e}")
            return {
                'total_score': 0.5,
                'query_score': 0.5,
                'quality_score': 0.5,
                'value_score': 0.5,
                'availability_score': 0.5
            }
    
    def calculate_query_match(self, product: Dict[str, Any], query: str) -> float:
        """Calculate how well product matches the search query"""
        try:
            query_lower = query.lower()
            product_name = product.get('name', '').lower()
            brand = product.get('brand', '').lower()
            category = product.get('category', '').lower()
            
            score = 0.0
            
            # Exact brand match
            if brand and brand in query_lower:
                score += 0.4
            
            # Product name contains query terms
            query_words = query_lower.split()
            name_matches = sum(1 for word in query_words if word in product_name)
            score += (name_matches / len(query_words)) * 0.4
            
            # Category relevance
            if category and any(word in category.lower() for word in query_words):
                score += 0.2
            
            return min(score, 1.0)
            
        except Exception:
            return 0.5
    
    def calculate_quality_score(self, product: Dict[str, Any]) -> float:
        """Calculate quality score based on ratings and brand reputation"""
        try:
            score = 0.0
            
            # Rating score (0-1 scale)
            rating = product.get('rating', 0)
            if rating:
                try:
                    # Handle string ratings like "4.3\n|\n1.1k Ratings"
                    if isinstance(rating, str):
                        rating = float(rating.split()[0])
                    else:
                        rating = float(rating)
                    score += (rating / 5.0) * 0.6
                except (ValueError, TypeError):
                    pass
            
            # Brand reputation
            brand = product.get('brand', '').lower()
            premium_brands = ['nike', 'adidas', 'levis', 'allen solly', 'van heusen', 'peter england']
            if brand in premium_brands:
                score += 0.4
            elif brand and brand != 'n/a':
                score += 0.2
            
            return min(score, 1.0)
            
        except Exception:
            return 0.5
    
    def calculate_value_score(self, product: Dict[str, Any]) -> float:
        """Calculate value score based on discounts and price positioning"""
        try:
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
            
            # Price range score (assume optimal range is 500-2000)
            try:
                price_str = product.get('price', '0')
                price = float(''.join(filter(str.isdigit, price_str)))
                if 500 <= price <= 2000:
                    score += 0.3
                elif 200 <= price <= 5000:
                    score += 0.2
                else:
                    score += 0.1
            except:
                score += 0.2
            
            return min(score, 1.0)
            
        except Exception:
            return 0.5
    
    def calculate_availability_score(self, product: Dict[str, Any]) -> float:
        """Calculate availability score based on product completeness"""
        try:
            score = 0.0
            
            # Image availability
            if product.get('image_url') and product['image_url'] != 'N/A':
                score += 0.3
            
            # Price availability
            if product.get('price') and product['price'] != 'N/A':
                score += 0.3
            
            # Brand availability
            if product.get('brand') and product['brand'] != 'N/A':
                score += 0.2
            
            # URL availability
            if product.get('url'):
                score += 0.2
            
            return min(score, 1.0)
            
        except Exception:
            return 0.5
    
    def generate_ranking_explanation(self, top_products: List[Dict[str, Any]], query: str) -> List[str]:
        """Generate explanation for why these products were selected"""
        explanations = []
        
        if not top_products:
            return ["No products found matching your criteria"]
        
        # Analyze top products
        avg_rating = sum(p.get('rating', 0) for p in top_products) / len(top_products)
        avg_discount = sum(p.get('discount_percentage', 0) for p in top_products) / len(top_products)
        
        explanations.append(f"✅ Best matches for '{query}' from {len(top_products)} analyzed products")
        
        if avg_rating >= 4.0:
            explanations.append(f"⭐ High quality products (avg {avg_rating:.1f}★ rating)")
        
        if avg_discount >= 30:
            explanations.append(f"💰 Great value with {avg_discount:.0f}% average discount")
        
        # Brand analysis
        brands = [p.get('brand') for p in top_products if p.get('brand') != 'N/A']
        if brands:
            unique_brands = list(set(brands))
            explanations.append(f"🏷️ Trusted brands: {', '.join(unique_brands[:3])}")
        
        # Price range
        prices = []
        for p in top_products:
            try:
                price_str = p.get('price', '0')
                price = float(''.join(filter(str.isdigit, price_str)))
                prices.append(price)
            except:
                continue
        
        if prices:
            min_price, max_price = min(prices), max(prices)
            explanations.append(f"💵 Price range: ₹{min_price:.0f} - ₹{max_price:.0f}")
        
        return explanations
    
    def get_selection_criteria(self) -> Dict[str, Any]:
        """Get the criteria used for product selection"""
        return {
            'query_relevance': '40% - How well product matches search terms',
            'quality_score': '30% - Ratings, reviews, and brand reputation',
            'value_proposition': '20% - Discounts and price positioning',
            'availability': '10% - Product completeness and data quality',
            'total_weight': '100% - Comprehensive scoring system'
        }
    
    def _generate_product_id(self, product: Dict[str, Any]) -> str:
        """Generate unique product ID"""
        # Use URL hash or create from product data
        url = product.get('url', '')
        if url:
            import hashlib
            return hashlib.md5(url.encode()).hexdigest()[:12]
        else:
            return f"myntra-{str(uuid.uuid4())[:8]}"
    
    def _deduplicate_products(self, products: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Remove duplicate products based on URL"""
        seen_urls = set()
        unique_products = []
        
        for product in products:
            url = product.get('url', '')
            if url and url not in seen_urls:
                seen_urls.add(url)
                unique_products.append(product)
        
        return unique_products

