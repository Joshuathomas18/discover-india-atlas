"""
Scraper Core Module

Core scraping engine and universal patterns for the scraper system.
"""

from .universal_scraper import UniversalScraper
from .pattern_recognizer import UniversalPatternRecognizer
from .structure_analyzer import StructureAnalyzer
from .heuristic_detector import HeuristicDetector
from .data_extractor import UniversalDataExtractor
from .adaptive_crawler import AdaptiveCrawler
from .product_extractor import ProductExtractor

__all__ = [
    'UniversalScraper',
    'UniversalPatternRecognizer', 
    'StructureAnalyzer',
    'HeuristicDetector',
    'UniversalDataExtractor',
    'AdaptiveCrawler',
    'ProductExtractor'
]