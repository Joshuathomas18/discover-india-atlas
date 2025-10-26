"""
Scraper Configuration Settings
Centralized configuration for the web scraper system
"""

import os
from typing import Dict, Any

# Rate Limiting Configuration
RATE_LIMITS = {
    'default': {
        'requests_per_second': 1,
        'max_concurrency': 2,
        'time_window': '00:00-06:00',  # Off-peak hours
        'contact_email': 'crawler-admin@suggestai.shop'
    },
    'zara.com': {
        'requests_per_second': 0.5,
        'max_concurrency': 1,
        'time_window': '02:00-04:00',
        'contact_email': 'crawler-admin@suggestai.shop'
    },
    'h&m.com': {
        'requests_per_second': 1,
        'max_concurrency': 2,
        'time_window': '01:00-05:00',
        'contact_email': 'crawler-admin@suggestai.shop'
    }
}

# Priority Scoring Weights
PRIORITY_WEIGHTS = {
    'size': 0.15,      # In-stock fraction of sizes
    'cost': 0.20,      # Discount percentage
    'style': 0.25,     # Style similarity
    'priority': 0.25,  # Site priority
    'freshness': 0.15  # Time-based decay
}

# Embedding Configuration
EMBEDDING_CONFIG = {
    'text_model': 'sentence-transformers/all-MiniLM-L6-v2',
    'image_model': 'openai/clip-vit-base-patch32',
    'vector_dimension': 384,  # For text embeddings
    'image_vector_dimension': 512,  # For CLIP embeddings
    'batch_size': 32
}

# Selenium Configuration
SELENIUM_CONFIG = {
    'headless': True,
    'window_size': (1920, 1080),
    'user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'page_load_timeout': 30,
    'implicit_wait': 10,
    'stealth_mode': True
}

# Redis Configuration
REDIS_CONFIG = {
    'host': os.getenv('REDIS_HOST', 'localhost'),
    'port': int(os.getenv('REDIS_PORT', 6379)),
    'db': int(os.getenv('REDIS_DB', 0)),
    'password': os.getenv('REDIS_PASSWORD', None),
    'decode_responses': True
}

# Pub/Sub Configuration
PUBSUB_CONFIG = {
    'project_id': os.getenv('FIREBASE_PROJECT_ID', 'suggestai-f1988'),
    'crawl_topic': 'crawl-tasks',
    'item_topic': 'item-raw',
    'dlq_topic': 'crawl-dlq'
}

# Firestore Collections
FIRESTORE_COLLECTIONS = {
    'sites': 'sites',
    'crawl_jobs': 'crawl_jobs',
    'products': 'products',
    'embeddings': 'embeddings'
}

# Anti-Bot Configuration
ANTI_BOT_CONFIG = {
    'proxy_rotation': True,
    'session_reuse': True,
    'cookie_handling': True,
    'captcha_detection': True,
    'retry_attempts': 3,
    'backoff_factor': 2
}

# Monitoring Configuration
MONITORING_CONFIG = {
    'log_level': 'INFO',
    'metrics_interval': 60,  # seconds
    'alert_thresholds': {
        'error_rate': 0.1,  # 10%
        'response_time': 5.0,  # seconds
        'success_rate': 0.9  # 90%
    }
}

def get_site_config(site_id: str) -> Dict[str, Any]:
    """Get configuration for a specific site"""
    return RATE_LIMITS.get(site_id, RATE_LIMITS['default'])

def get_priority_weights() -> Dict[str, float]:
    """Get priority scoring weights"""
    return PRIORITY_WEIGHTS.copy()

def get_embedding_config() -> Dict[str, Any]:
    """Get embedding configuration"""
    return EMBEDDING_CONFIG.copy()

def get_selenium_config() -> Dict[str, Any]:
    """Get Selenium configuration"""
    return SELENIUM_CONFIG.copy()

def get_redis_config() -> Dict[str, Any]:
    """Get Redis configuration"""
    return REDIS_CONFIG.copy()

def get_pubsub_config() -> Dict[str, Any]:
    """Get Pub/Sub configuration"""
    return PUBSUB_CONFIG.copy()

def get_firestore_collections() -> Dict[str, str]:
    """Get Firestore collection names"""
    return FIRESTORE_COLLECTIONS.copy()

def get_anti_bot_config() -> Dict[str, Any]:
    """Get anti-bot configuration"""
    return ANTI_BOT_CONFIG.copy()

def get_monitoring_config() -> Dict[str, Any]:
    """Get monitoring configuration"""
    return MONITORING_CONFIG.copy()
