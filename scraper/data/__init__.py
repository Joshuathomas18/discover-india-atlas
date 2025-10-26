"""
Storage module for web scraper
Handles Firestore schema and product storage
"""

from .firestore_schema import FirestoreSchema, ProductStorage
from .deduplicator import Deduplicator, BatchDeduplicator, ProductFingerprint

__all__ = [
    'FirestoreSchema',
    'ProductStorage',
    'Deduplicator',
    'BatchDeduplicator',
    'ProductFingerprint'
]
