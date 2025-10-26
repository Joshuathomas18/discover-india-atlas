"""
Tourism Scraper API Controllers
Specialized endpoints for scraping Indian state tourism websites
"""

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import logging
import json
import sys
from pathlib import Path

# Add the scraper directory to Python path
scraper_dir = Path(__file__).parent.parent
sys.path.append(str(scraper_dir))

from tourism.tourism_scraper import TourismDataScraper

logger = logging.getLogger(__name__)

@api_view(['POST'])
def scrape_state_tourism(request):
    """
    Scrape tourism data for a specific state
    
    POST /api/v1/tourism/scrape-state/
    
    Body:
    {
        "state_name": "karnataka",
        "tourism_url": "https://www.karnatakatourism.org/"
    }
    """
    try:
        data = request.data
        state_name = data.get('state_name', '').strip().lower()
        tourism_url = data.get('tourism_url', '').strip()
        
        if not state_name or not tourism_url:
            return Response(
                {'error': 'Both state_name and tourism_url are required'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Initialize tourism scraper
        scraper = TourismDataScraper()
        
        # Scrape the state's tourism data
        result = scraper.scrape_state_tourism(state_name, tourism_url)
        
        if result['success']:
            return Response({
                'success': True,
                'message': f'Successfully scraped tourism data for {state_name}',
                'data': result
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                'success': False,
                'message': f'Failed to scrape tourism data for {state_name}',
                'error': result.get('error', 'Unknown error')
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
    except Exception as e:
        logger.error(f"Tourism scraping error: {e}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def scrape_all_states_tourism(request):
    """
    Scrape tourism data for all Indian states
    
    POST /api/v1/tourism/scrape-all-states/
    
    Body:
    {
        "state_urls": {
            "karnataka": "https://www.karnatakatourism.org/",
            "kerala": "http://www.keralatourism.org",
            "rajasthan": "http://www.tourism.rajasthan.gov.in/"
        }
    }
    """
    try:
        data = request.data
        state_urls = data.get('state_urls', {})
        
        if not state_urls:
            return Response(
                {'error': 'state_urls dictionary is required'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Initialize tourism scraper
        scraper = TourismDataScraper()
        
        # Scrape all states
        result = scraper.scrape_all_states(state_urls)
        
        return Response({
            'success': True,
            'message': f'Bulk scraping completed: {result["scraped_states"]} successful, {result["failed_states"]} failed',
            'data': result
        }, status=status.HTTP_200_OK)
        
    except Exception as e:
        logger.error(f"Bulk tourism scraping error: {e}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_tourism_scraping_stats(request):
    """
    Get tourism scraping statistics
    
    GET /api/v1/tourism/stats/
    """
    try:
        # This would typically come from a database or cache
        stats = {
            'total_states_scraped': 0,
            'total_places_found': 0,
            'total_activities_found': 0,
            'total_accommodations_found': 0,
            'last_scraping_time': None,
            'success_rate': 0.0
        }
        
        return Response({
            'success': True,
            'stats': stats
        }, status=status.HTTP_200_OK)
        
    except Exception as e:
        logger.error(f"Stats error: {e}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def export_tourism_data(request):
    """
    Export tourism data in various formats
    
    POST /api/v1/tourism/export/
    
    Body:
    {
        "format": "json|csv|firestore",
        "states": ["karnataka", "kerala"] // optional, all states if not provided
    }
    """
    try:
        data = request.data
        export_format = data.get('format', 'json').lower()
        states = data.get('states', [])
        
        if export_format not in ['json', 'csv', 'firestore']:
            return Response(
                {'error': 'Format must be json, csv, or firestore'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # This would typically fetch data from database
        # For now, return a placeholder response
        return Response({
            'success': True,
            'message': f'Tourism data exported in {export_format} format',
            'download_url': f'/api/v1/tourism/download/{export_format}/',
            'file_size': '0 KB'  # Would be calculated from actual data
        }, status=status.HTTP_200_OK)
        
    except Exception as e:
        logger.error(f"Export error: {e}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def get_state_tourism_data(request, state_name):
    """
    Get tourism data for a specific state
    
    GET /api/v1/tourism/state/{state_name}/
    """
    try:
        state_name = state_name.lower().strip()
        
        # This would typically fetch from database
        # For now, return a placeholder response
        return Response({
            'success': True,
            'state': state_name,
            'data': {
                'places': [],
                'activities': [],
                'accommodation': [],
                'transport': [],
                'food': [],
                'culture': [],
                'festivals': [],
                'wildlife': [],
                'adventure': []
            },
            'last_updated': None
        }, status=status.HTTP_200_OK)
        
    except Exception as e:
        logger.error(f"Get state data error: {e}")
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
