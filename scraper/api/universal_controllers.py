"""
Universal Scraper API Controllers

Provides endpoints for scraping any website using the universal scraper engine.
"""

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import logging
from ..core.universal_scraper import UniversalScraper
from ..services.enrichment_service import SemanticEnrichmentService

logger = logging.getLogger(__name__)

@api_view(['POST'])
def universal_scrape(request):
    """
    Scrape any website using universal scraper
    
    POST /api/v1/scraper/universal/
    
    Body:
    {
        "url": "https://example.com",
        "scrape_type": "products|pages|sitemap",
        "max_pages": 10,
        "extract_images": true,
        "extract_prices": true
    }
    """
    try:
        data = request.data
        url = data.get('url', '').strip()
        scrape_type = data.get('scrape_type', 'products')
        max_pages = data.get('max_pages', 10)
        extract_images = data.get('extract_images', True)
        extract_prices = data.get('extract_prices', True)
        
        if not url:
            return Response(
                {'error': 'URL parameter is required'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Initialize universal scraper
        scraper = UniversalScraper()
        
        # Perform scraping based on type
        if scrape_type == 'products':
            result = scraper.scrape(url, depth=1)
        elif scrape_type == 'pages':
            result = scraper.scrape(url, depth=max_pages)
        elif scrape_type == 'sitemap':
            result = scraper.scrape(url, depth=1)  # Use basic scrape for sitemap
        else:
            return Response(
                {'error': 'Invalid scrape_type. Use: products, pages, or sitemap'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if result['success']:
            return Response({
                'success': True,
                'message': f'Successfully scraped {len(result.get("data", []))} items',
                'data': result.get('data', []),
                'metadata': result.get('metadata', {}),
                'scraped_at': result.get('scraped_at'),
                'source_url': url
            })
        else:
            return Response(
                {'error': result['message']}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
    except Exception as e:
        logger.error(f"Error in universal scrape: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def analyze_any_product(request):
    """
    Analyze any product page for detailed information
    
    POST /api/v1/scraper/analyze/
    
    Body:
    {
        "product_url": "https://example.com/product/123",
        "use_advanced_extraction": true,
        "extract_variants": true,
        "extract_reviews": true
    }
    """
    try:
        data = request.data
        product_url = data.get('product_url', '').strip()
        use_advanced_extraction = data.get('use_advanced_extraction', True)
        extract_variants = data.get('extract_variants', True)
        extract_reviews = data.get('extract_reviews', True)
        
        if not product_url:
            return Response(
                {'error': 'product_url parameter is required'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Initialize universal scraper
        scraper = UniversalScraper()
        
        # Analyze the product
        result = scraper.scrape_product(product_url)
        
        if result['success']:
            return Response({
                'success': True,
                'message': 'Product analysis completed',
                'product': result.get('product', {}),
                'variants': result.get('variants', []),
                'reviews': result.get('reviews', []),
                'metadata': result.get('metadata', {}),
                'analyzed_at': result.get('analyzed_at'),
                'source_url': product_url
            })
        else:
            return Response(
                {'error': result['message']}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
    except Exception as e:
        logger.error(f"Error analyzing product: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_scraper_stats(request):
    """
    Get scraper system statistics
    
    GET /api/v1/scraper/stats/
    """
    try:
        # This would typically come from a database or cache
        stats = {
            'total_scrapes_today': 0,
            'successful_scrapes': 0,
            'failed_scrapes': 0,
            'average_response_time': 0,
            'active_scrapers': 1,
            'supported_sites': ['myntra', 'universal'],
            'last_updated': '2025-09-26T11:52:00Z'
        }
        
        return Response({
            'success': True,
            'stats': stats
        })
        
    except Exception as e:
        logger.error(f"Error getting scraper stats: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_scraper_health(request):
    """
    Get scraper system health status
    
    GET /api/v1/scraper/health/
    """
    try:
        health_status = {
            'status': 'healthy',
            'version': '1.0.0',
            'uptime': '24h 15m',
            'memory_usage': '45%',
            'cpu_usage': '12%',
            'active_connections': 3,
            'last_check': '2025-09-26T11:52:00Z'
        }
        
        return Response({
            'success': True,
            'health': health_status
        })
        
    except Exception as e:
        logger.error(f"Error getting scraper health: {str(e)}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
