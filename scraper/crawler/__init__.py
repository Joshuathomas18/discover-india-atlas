"""
Crawler module for web scraper
Handles Selenium-based crawling with anti-bot measures
"""

from .selenium_crawler import SeleniumCrawler, StealthWebDriver, RateLimiter, ProxyManager

__all__ = ['SeleniumCrawler', 'StealthWebDriver', 'RateLimiter', 'ProxyManager']
