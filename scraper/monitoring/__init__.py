"""
Monitoring module for web scraper
Handles error logging, monitoring, and health checks
"""

from .error_handler import (
    ErrorHandler,
    DeadLetterQueueHandler,
    HealthChecker,
    ScraperError,
    ErrorSeverity,
    ErrorCategory
)

__all__ = [
    'ErrorHandler',
    'DeadLetterQueueHandler',
    'HealthChecker',
    'ScraperError',
    'ErrorSeverity',
    'ErrorCategory'
]
