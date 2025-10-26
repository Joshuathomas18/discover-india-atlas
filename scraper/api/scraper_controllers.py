"""
Main Scraper API Controllers

Centralized API endpoints for all scraper functionality.
This file imports and exposes all scraper endpoints.
"""

from .myntra_controllers import *
from .universal_controllers import *

# Re-export all endpoints for easy access
__all__ = [
    # Myntra endpoints
    'search_myntra_products',
    'analyze_myntra_product',
    'get_myntra_trending', 
    'batch_analyze_myntra_products',
    'get_myntra_filter_options',
    
    # Universal endpoints
    'universal_scrape',
    'analyze_any_product',
    'get_scraper_stats',
    'get_scraper_health'
]
