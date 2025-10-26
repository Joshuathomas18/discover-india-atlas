"""
Scraper API Module

This module contains all API endpoints for the scraper system.
Organized by functionality and site-specific implementations.
"""

from .myntra_controllers import *
from .universal_controllers import *
from .scraper_controllers import *

__all__ = [
    'search_myntra_products',
    'analyze_myntra_product', 
    'get_myntra_trending',
    'batch_analyze_myntra_products',
    'get_myntra_filter_options',
    'universal_scrape',
    'analyze_any_product',
    'get_scraper_stats',
    'get_scraper_health'
]
