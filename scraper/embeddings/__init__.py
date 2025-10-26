"""
Embeddings module for web scraper
Handles semantic enrichment with text embeddings
"""

# Import from the services directory where the actual implementation is
from ..services.enrichment_service import TextEmbeddingService

# Create compatibility alias
SemanticEnrichmentService = TextEmbeddingService

__all__ = [
    'TextEmbeddingService',
    'SemanticEnrichmentService',
]