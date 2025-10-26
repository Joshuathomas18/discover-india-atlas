"""
Scraper API Controllers
REST API endpoints for web scraper functionality
"""

import logging
from typing import Dict, Any, List
from datetime import datetime, timezone
import uuid

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse

from ..utils.sitemap_parser import SitemapParser
from ..utils.selenium_crawler import SeleniumCrawler
from ..core.product_extractor import ProductExtractor
from ..data.deduplicator import Deduplicator
from ..services.enrichment_service import SemanticEnrichmentService
from ..services.hybrid_search import HybridSearchService
from ..sites.myntra_service import MyntraScraperService

logger = logging.getLogger(__name__)

@api_view(['POST'])
def test_search(request):
    """Quick test endpoint for iOS app"""
    try:
        data = request.data
        query = data.get('query', 'test')
        
        # Return mock data quickly
        mock_products = [
            {
                "id": "test-1",
                "name": f"Test {query} Product 1",
                "brand": "Test Brand",
                "price": {"current": 999.0, "original": 1299.0, "currency": "₹"},
                "image_url": "https://via.placeholder.com/300x300",
                "product_url": "https://example.com/product1",
                "rating": 4.5,
                "rating_count": 100,
                "discount_percentage": 23,
                "sizes": ["S", "M", "L"],
                "colors": ["Blue", "Red"],
                "category": "Tops",
                "subcategory": "Shirts",
                "description": f"Test {query} product description",
                "availability": True,
                "delivery_time": "2-3 days",
                "search_score": 0.95,
                "ranking_explanation": "High relevance match",
                "scraped_at": datetime.now(timezone.utc).isoformat(),
                "source": "test"
            },
            {
                "id": "test-2", 
                "name": f"Test {query} Product 2",
                "brand": "Test Brand 2",
                "price": {"current": 799.0, "original": None, "currency": "₹"},
                "image_url": "https://via.placeholder.com/300x300",
                "product_url": "https://example.com/product2",
                "rating": 4.2,
                "rating_count": 50,
                "discount_percentage": None,
                "sizes": ["M", "L", "XL"],
                "colors": ["Black", "White"],
                "category": "Bottoms",
                "subcategory": "Pants",
                "description": f"Another test {query} product",
                "availability": True,
                "delivery_time": "1-2 days",
                "search_score": 0.88,
                "ranking_explanation": "Good match",
                "scraped_at": datetime.now(timezone.utc).isoformat(),
                "source": "test"
            }
        ]
        
        return Response({
            "success": True,
            "message": f"Test search for '{query}' completed",
            "products": mock_products,
            "total_found": len(mock_products),
            "total_unfiltered": len(mock_products),
            "search_query": query,
            "scraped_at": datetime.now(timezone.utc).isoformat()
        })
        
    except Exception as e:
        logger.error(f"Test search error: {str(e)}")
        return Response({
            "success": False,
            "message": f"Test search failed: {str(e)}"
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def start_crawl(request):
    """Start a new crawl job"""
    try:
        data = request.data
        site_id = data.get('site_id')
        sitemap_url = data.get('sitemap_url')
        priority_weights = data.get('priority_weights', {})
        max_urls = data.get('max_urls', 1000)
        
        if not site_id or not sitemap_url:
            return Response(
                {'error': 'site_id and sitemap_url are required'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Create crawl job
        job_id = f"job-{datetime.now().strftime('%Y%m%d-%H%M%S')}-{str(uuid.uuid4())[:8]}"
        
        # Parse sitemap and get URLs
        parser = SitemapParser(site_id)
        urls = parser.get_crawl_queue(sitemap_url, max_urls)
        
        # Create job document
        job_data = {
            'job_id': job_id,
            'site_id': site_id,
            'status': 'running',
            'priority_weights': priority_weights,
            'urls_to_crawl': [url['url'] for url in urls],
            'urls_crawled': [],
            'urls_failed': [],
            'products_found': 0,
            'products_processed': 0,
            'started_at': datetime.now(timezone.utc).isoformat(),
            'created_at': datetime.now(timezone.utc).isoformat()
        }
        
        # Store job in Firestore
        storage = ProductStorage()
        storage.schema.create_crawl_job(job_data)
        
        # Start crawling in background (in production, use Celery or similar)
        # For now, we'll just return the job ID
        
        return Response({
            'job_id': job_id,
            'status': 'started',
            'urls_to_crawl': len(urls),
            'message': 'Crawl job started successfully'
        })
        
    except Exception as e:
        logger.error(f"Error starting crawl: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_crawl_status(request, job_id):
    """Get status of a crawl job"""
    try:
        storage = ProductStorage()
        job = storage.schema.get_crawl_job(job_id)
        
        if not job:
            return Response(
                {'error': 'Crawl job not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        return Response({
            'job_id': job_id,
            'status': job.get('status', 'unknown'),
            'site_id': job.get('site_id', ''),
            'urls_to_crawl': len(job.get('urls_to_crawl', [])),
            'urls_crawled': len(job.get('urls_crawled', [])),
            'urls_failed': len(job.get('urls_failed', [])),
            'products_found': job.get('products_found', 0),
            'products_processed': job.get('products_processed', 0),
            'started_at': job.get('started_at'),
            'completed_at': job.get('completed_at'),
            'progress_percentage': self._calculate_progress(job)
        })
        
    except Exception as e:
        logger.error(f"Error getting crawl status: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

def _calculate_progress(job: Dict[str, Any]) -> float:
    """Calculate progress percentage for a crawl job"""
    try:
        total_urls = len(job.get('urls_to_crawl', []))
        if total_urls == 0:
            return 0.0
        
        crawled_urls = len(job.get('urls_crawled', []))
        failed_urls = len(job.get('urls_failed', []))
        completed_urls = crawled_urls + failed_urls
        
        return (completed_urls / total_urls) * 100
        
    except Exception:
        return 0.0

@api_view(['POST'])
def stop_crawl(request, job_id):
    """Stop a running crawl job"""
    try:
        storage = ProductStorage()
        job = storage.schema.get_crawl_job(job_id)
        
        if not job:
            return Response(
                {'error': 'Crawl job not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        if job.get('status') != 'running':
            return Response(
                {'error': 'Crawl job is not running'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Update job status
        storage.schema.update_crawl_job(job_id, {
            'status': 'stopped',
            'completed_at': datetime.now(timezone.utc).isoformat()
        })
        
        return Response({
            'job_id': job_id,
            'status': 'stopped',
            'message': 'Crawl job stopped successfully'
        })
        
    except Exception as e:
        logger.error(f"Error stopping crawl: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_product(request, product_id):
    """Get product details by ID"""
    try:
        storage = ProductStorage()
        product = storage.schema.get_product(product_id)
        
        if not product:
            return Response(
                {'error': 'Product not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        return Response(product)
        
    except Exception as e:
        logger.error(f"Error getting product: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def reindex_product(request, product_id):
    """Reindex a product with updated embeddings"""
    try:
        storage = ProductStorage()
        product = storage.schema.get_product(product_id)
        
        if not product:
            return Response(
                {'error': 'Product not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        # Re-enrich product
        enrichment_service = SemanticEnrichmentService()
        enriched_product = enrichment_service.enrich_product(product)
        
        # Update product in storage
        storage.schema.update_product(product_id, enriched_product)
        
        return Response({
            'product_id': product_id,
            'status': 'reindexed',
            'message': 'Product reindexed successfully'
        })
        
    except Exception as e:
        logger.error(f"Error reindexing product: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def search_products(request):
    """Search products with hybrid search"""
    try:
        data = request.data
        query = data.get('query', '')
        filters = data.get('filters', {})
        k = data.get('k', 20)
        rerank_alpha = data.get('rerank_alpha', 0.7)
        
        # Perform hybrid search
        search_service = HybridSearchService()
        results = search_service.search(query, filters, k, rerank_alpha)
        
        return Response(results)
        
    except Exception as e:
        logger.error(f"Error searching products: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_search_filters(request):
    """Get available search filters"""
    try:
        search_service = HybridSearchService()
        filters = search_service.get_filters()
        
        return Response(filters)
        
    except Exception as e:
        logger.error(f"Error getting search filters: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_search_suggestions(request):
    """Get search suggestions"""
    try:
        query = request.GET.get('q', '')
        limit = int(request.GET.get('limit', 10))
        
        search_service = HybridSearchService()
        suggestions = search_service.get_search_suggestions(query, limit)
        
        return Response({
            'query': query,
            'suggestions': suggestions
        })
        
    except Exception as e:
        logger.error(f"Error getting search suggestions: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_product_recommendations(request, product_id):
    """Get product recommendations"""
    try:
        storage = ProductStorage()
        recommendations = storage.get_product_recommendations(product_id)
        
        return Response({
            'product_id': product_id,
            'recommendations': recommendations
        })
        
    except Exception as e:
        logger.error(f"Error getting product recommendations: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_crawl_jobs(request):
    """Get list of crawl jobs"""
    try:
        site_id = request.GET.get('site_id')
        status_filter = request.GET.get('status')
        limit = int(request.GET.get('limit', 100))
        
        storage = ProductStorage()
        jobs = storage.schema.list_crawl_jobs(site_id, status_filter, limit)
        
        return Response({
            'jobs': jobs,
            'total': len(jobs)
        })
        
    except Exception as e:
        logger.error(f"Error getting crawl jobs: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_product_stats(request):
    """Get product statistics"""
    try:
        site_id = request.GET.get('site_id')
        
        storage = ProductStorage()
        stats = storage.schema.get_product_stats(site_id)
        
        return Response(stats)
        
    except Exception as e:
        logger.error(f"Error getting product stats: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def rebuild_index(request):
    """Rebuild the search index"""
    try:
        # This would trigger a full reindexing of all products
        # In production, this would be an async task
        
        return Response({
            'status': 'started',
            'message': 'Index rebuild started. This may take some time.'
        })
        
    except Exception as e:
        logger.error(f"Error rebuilding index: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_index_status(request):
    """Get search index status"""
    try:
        storage = ProductStorage()
        stats = storage.schema.get_product_stats()
        
        return Response({
            'total_products': stats.get('total_products', 0),
            'index_status': 'healthy',
            'last_updated': datetime.now(timezone.utc).isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error getting index status: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

# =============================================================================
# MYNTRA SCRAPER ENDPOINTS
# =============================================================================

@api_view(['POST'])
def search_myntra_products(request):
    """Live search Myntra products with advanced filtering"""
    try:
        data = request.data
        query = data.get('query', '').strip()
        max_products = data.get('max_products', 20)
        filters = data.get('filters', {})
        
        if not query:
            return Response(
                {'error': 'Query parameter is required'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if max_products > 100:
            max_products = 100  # Limit for performance
        
        # Initialize Myntra service
        myntra_service = MyntraScraperService()
        
        # Search products
        result = myntra_service.search_products(query, max_products)
        
        if result['success']:
            # Apply filters to results
            filtered_products = myntra_service.apply_filters(result['products'], filters)
            
            return Response({
                'success': True,
                'message': f'Found {len(filtered_products)} products (filtered from {len(result["products"])})',
                'products': filtered_products,
                'total_found': len(filtered_products),
                'total_unfiltered': len(result['products']),
                'search_query': result['search_query'],
                'scraped_at': result['scraped_at'],
                'filters_applied': filters
            })
        else:
            return Response(
                {'error': result['message']}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
    except Exception as e:
        logger.error(f"Error searching Myntra products: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def analyze_myntra_product(request):
    """Deep analysis of single Myntra product"""
    try:
        data = request.data
        product_url = data.get('product_url', '').strip()
        use_advanced_extraction = data.get('use_advanced_extraction', True)
        
        if not product_url:
            return Response(
                {'error': 'product_url parameter is required'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if not product_url.startswith('https://www.myntra.com'):
            return Response(
                {'error': 'Invalid Myntra URL'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Initialize Myntra service
        myntra_service = MyntraScraperService()
        
        # Analyze product
        result = myntra_service.analyze_product(product_url, use_advanced_extraction)
        
        if result['success']:
            return Response({
                'success': True,
                'message': result['message'],
                'product': result['product']
            })
        else:
            return Response(
                {'error': result['message']}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
    except Exception as e:
        logger.error(f"Error analyzing Myntra product: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_myntra_trending(request):
    """Get trending products from Myntra"""
    try:
        category = request.GET.get('category')
        max_products = int(request.GET.get('max_products', 20))
        
        if max_products > 50:
            max_products = 50  # Limit for performance
        
        # Initialize Myntra service
        myntra_service = MyntraScraperService()
        
        # Get trending products
        result = myntra_service.get_trending_products(category, max_products)
        
        if result['success']:
            return Response({
                'success': True,
                'message': result['message'],
                'products': result['products'],
                'total_found': result['total_found'],
                'category': result['category']
            })
        else:
            return Response(
                {'error': result['message']}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
    except Exception as e:
        logger.error(f"Error getting Myntra trending products: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_myntra_filter_options(request):
    """Get available filter options for Myntra search"""
    try:
        # Initialize Myntra service
        myntra_service = MyntraScraperService()
        
        # Get filter options from recent searches or predefined options
        filter_options = {
            'brands': [
                'Roadster', 'HERE&NOW', 'DILLINGER', 'THE BEAR HOUSE', 'Allen Solly',
                'Van Heusen', 'Peter England', 'Louis Philippe', 'Arrow', 'UCB',
                'Wrangler', 'Levi\'s', 'Nike', 'Adidas', 'Puma', 'Reebok',
                'Zara', 'H&M', 'Forever 21', 'Mango', 'Vero Moda'
            ],
            'categories': [
                'Shirts', 'T-Shirts', 'Jeans', 'Dresses', 'Tops', 'Kurtas',
                'Shoes', 'Sneakers', 'Sandals', 'Heels', 'Flats',
                'Bags', 'Handbags', 'Backpacks', 'Wallets',
                'Watches', 'Sunglasses', 'Jewelry', 'Belts'
            ],
            'sizes': {
                'clothing': ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
                'shoes': ['6', '7', '8', '9', '10', '11', '12'],
                'watches': ['38mm', '40mm', '42mm', '44mm']
            },
            'colors': [
                'Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Pink',
                'Purple', 'Orange', 'Brown', 'Grey', 'Navy', 'Maroon',
                'Beige', 'Khaki', 'Cream', 'Gold', 'Silver'
            ],
            'price_ranges': [
                {'label': 'Under ₹500', 'min': 0, 'max': 500},
                {'label': '₹500 - ₹1000', 'min': 500, 'max': 1000},
                {'label': '₹1000 - ₹2000', 'min': 1000, 'max': 2000},
                {'label': '₹2000 - ₹5000', 'min': 2000, 'max': 5000},
                {'label': 'Above ₹5000', 'min': 5000, 'max': 99999}
            ],
            'ratings': [
                {'label': '4+ Stars', 'min': 4.0, 'max': 5.0},
                {'label': '3+ Stars', 'min': 3.0, 'max': 5.0},
                {'label': '2+ Stars', 'min': 2.0, 'max': 5.0}
            ],
            'discounts': [
                {'label': '10%+ Off', 'min': 10, 'max': 100},
                {'label': '20%+ Off', 'min': 20, 'max': 100},
                {'label': '30%+ Off', 'min': 30, 'max': 100},
                {'label': '50%+ Off', 'min': 50, 'max': 100}
            ]
        }
        
        return Response({
            'success': True,
            'filter_options': filter_options
        })
        
    except Exception as e:
        logger.error(f"Error getting filter options: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def batch_analyze_myntra_products(request):
    """Batch analyze multiple Myntra products"""
    try:
        data = request.data
        product_urls = data.get('product_urls', [])
        
        if not product_urls or not isinstance(product_urls, list):
            return Response(
                {'error': 'product_urls array is required'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if len(product_urls) > 10:
            return Response(
                {'error': 'Maximum 10 products allowed per batch'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Validate URLs
        for url in product_urls:
            if not url.startswith('https://www.myntra.com'):
                return Response(
                    {'error': f'Invalid Myntra URL: {url}'}, 
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        # Initialize Myntra service
        myntra_service = MyntraScraperService()
        
        # Batch analyze products
        result = myntra_service.batch_analyze_products(product_urls)
        
        return Response({
            'success': result['success'],
            'message': result['message'],
            'products': result['products'],
            'failed': result['failed'],
            'total_processed': result['total_processed']
        })
        
    except Exception as e:
        logger.error(f"Error in batch analysis: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
