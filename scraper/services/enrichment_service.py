"""
Semantic Enrichment Service
Handles text and image embeddings for product semantic search
"""

import logging
import numpy as np
from typing import Dict, Any, List, Optional, Tuple
from datetime import datetime, timezone
import requests
from PIL import Image
import io
import base64

# Import embedding models
try:
    from sentence_transformers import SentenceTransformer
    SENTENCE_TRANSFORMERS_AVAILABLE = True
except ImportError:
    SENTENCE_TRANSFORMERS_AVAILABLE = False
    logging.warning("sentence-transformers not available")

# Image embeddings disabled - we only need text embeddings for product metadata
CLIP_AVAILABLE = False

from ..config.scraper_config import get_embedding_config

logger = logging.getLogger(__name__)

class TextEmbeddingService:
    """Handles text embeddings using SBERT"""
    
    def __init__(self):
        self.config = get_embedding_config()
        self.model = None
        self._load_model()
    
    def _load_model(self):
        """Load the text embedding model"""
        if not SENTENCE_TRANSFORMERS_AVAILABLE:
            logger.error("sentence-transformers not available")
            return
        
        try:
            model_name = self.config['text_model']
            self.model = SentenceTransformer(model_name)
            logger.info(f"Loaded text embedding model: {model_name}")
        except Exception as e:
            logger.error(f"Error loading text embedding model: {str(e)}")
            self.model = None
    
    def encode_text(self, text: str) -> Optional[np.ndarray]:
        """Encode text to embedding vector"""
        if not self.model or not text:
            return None
        
        try:
            # Clean and preprocess text
            cleaned_text = self._preprocess_text(text)
            if not cleaned_text:
                return None
            
            # Generate embedding
            embedding = self.model.encode(cleaned_text)
            return embedding.astype(np.float32)
            
        except Exception as e:
            logger.error(f"Error encoding text: {str(e)}")
            return None
    
    def encode_batch(self, texts: List[str]) -> List[Optional[np.ndarray]]:
        """Encode batch of texts to embeddings"""
        if not self.model or not texts:
            return [None] * len(texts)
        
        try:
            # Clean and preprocess texts
            cleaned_texts = [self._preprocess_text(text) for text in texts]
            valid_texts = [(i, text) for i, text in enumerate(cleaned_texts) if text]
            
            if not valid_texts:
                return [None] * len(texts)
            
            # Generate embeddings
            indices, valid_texts_only = zip(*valid_texts)
            embeddings = self.model.encode(valid_texts_only)
            
            # Create result list
            result = [None] * len(texts)
            for i, embedding in zip(indices, embeddings):
                result[i] = embedding.astype(np.float32)
            
            return result
            
        except Exception as e:
            logger.error(f"Error encoding text batch: {str(e)}")
            return [None] * len(texts)
    
    def _preprocess_text(self, text: str) -> str:
        """Preprocess text for embedding"""
        if not text:
            return ""
        
        # Basic cleaning
        text = text.strip()
        text = text.replace('\n', ' ').replace('\r', ' ')
        text = ' '.join(text.split())  # Remove extra whitespace
        
        # Limit length (most models have token limits)
        max_length = 512
        if len(text) > max_length:
            text = text[:max_length]
        
        return text

class ImageEmbeddingService:
    """Handles image embeddings using CLIP"""
    
    def __init__(self):
        self.config = get_embedding_config()
        self.model = None
        self.device = None
        self._load_model()
    
    def _load_model(self):
        """Load the image embedding model"""
        if not CLIP_AVAILABLE:
            logger.error("CLIP not available")
            return
        
        try:
            model_name = self.config['image_model']
            self.model, self.preprocess = clip.load(model_name)
            self.device = "cuda" if torch.cuda.is_available() else "cpu"
            self.model.to(self.device)
            logger.info(f"Loaded image embedding model: {model_name} on {self.device}")
        except Exception as e:
            logger.error(f"Error loading image embedding model: {str(e)}")
            self.model = None
    
    def encode_image(self, image_url: str) -> Optional[np.ndarray]:
        """Encode image to embedding vector"""
        if not self.model:
            return None
        
        try:
            # Download and preprocess image
            image = self._load_image(image_url)
            if image is None:
                return None
            
            # Preprocess image
            image_tensor = self.preprocess(image).unsqueeze(0).to(self.device)
            
            # Generate embedding
            with torch.no_grad():
                image_features = self.model.encode_image(image_tensor)
                # Normalize features
                image_features = image_features / image_features.norm(dim=-1, keepdim=True)
                embedding = image_features.cpu().numpy().flatten()
            
            return embedding.astype(np.float32)
            
        except Exception as e:
            logger.error(f"Error encoding image {image_url}: {str(e)}")
            return None
    
    def encode_image_batch(self, image_urls: List[str]) -> List[Optional[np.ndarray]]:
        """Encode batch of images to embeddings"""
        if not self.model or not image_urls:
            return [None] * len(image_urls)
        
        results = []
        for url in image_urls:
            embedding = self.encode_image(url)
            results.append(embedding)
        
        return results
    
    def _load_image(self, image_url: str) -> Optional[Image.Image]:
        """Load image from URL"""
        try:
            response = requests.get(image_url, timeout=10)
            response.raise_for_status()
            
            image = Image.open(io.BytesIO(response.content))
            
            # Convert to RGB if necessary
            if image.mode != 'RGB':
                image = image.convert('RGB')
            
            return image
            
        except Exception as e:
            logger.error(f"Error loading image {image_url}: {str(e)}")
            return None

class MultimodalEmbeddingService:
    """Combines text and image embeddings"""
    
    def __init__(self):
        self.text_service = TextEmbeddingService()
        self.image_service = ImageEmbeddingService()
        self.config = get_embedding_config()
    
    def encode_product(self, product_data: Dict[str, Any]) -> Dict[str, Any]:
        """Encode product with both text and image embeddings"""
        embeddings = {
            'text_embedding': None,
            'image_embedding': None,
            'combined_embedding': None,
            'text_embedding_dim': 0,
            'image_embedding_dim': 0,
            'combined_embedding_dim': 0
        }
        
        # Generate text embedding
        text_content = self._extract_text_content(product_data)
        if text_content:
            text_embedding = self.text_service.encode_text(text_content)
            if text_embedding is not None:
                embeddings['text_embedding'] = text_embedding.tolist()
                embeddings['text_embedding_dim'] = len(text_embedding)
        
        # Generate image embedding
        images = product_data.get('images', [])
        if images:
            # Use the first image
            image_embedding = self.image_service.encode_image(images[0])
            if image_embedding is not None:
                embeddings['image_embedding'] = image_embedding.tolist()
                embeddings['image_embedding_dim'] = len(image_embedding)
        
        # Combine embeddings
        combined_embedding = self._combine_embeddings(
            embeddings['text_embedding'],
            embeddings['image_embedding']
        )
        
        if combined_embedding is not None:
            embeddings['combined_embedding'] = combined_embedding.tolist()
            embeddings['combined_embedding_dim'] = len(combined_embedding)
        
        return embeddings
    
    def _extract_text_content(self, product_data: Dict[str, Any]) -> str:
        """Extract text content for embedding"""
        text_parts = []
        
        # Title
        title = product_data.get('title', '')
        if title:
            text_parts.append(title)
        
        # Description
        description = product_data.get('description', '')
        if description:
            text_parts.append(description)
        
        # Brand
        brand = product_data.get('brand', '')
        if brand:
            text_parts.append(f"Brand: {brand}")
        
        # Category
        categories = product_data.get('category', [])
        if categories:
            text_parts.append(f"Category: {', '.join(categories)}")
        
        # Material
        material = product_data.get('material', '')
        if material:
            text_parts.append(f"Material: {material}")
        
        # Colors
        colors = product_data.get('colors', [])
        if colors:
            text_parts.append(f"Colors: {', '.join(colors)}")
        
        # Sizes
        sizes = product_data.get('sizes', [])
        if sizes:
            text_parts.append(f"Sizes: {', '.join(sizes)}")
        
        return ' '.join(text_parts)
    
    def _combine_embeddings(self, text_embedding: Optional[List[float]], 
                          image_embedding: Optional[List[float]]) -> Optional[np.ndarray]:
        """Combine text and image embeddings"""
        if text_embedding is None and image_embedding is None:
            return None
        
        if text_embedding is None:
            return np.array(image_embedding)
        
        if image_embedding is None:
            return np.array(text_embedding)
        
        # Concatenate embeddings
        combined = np.concatenate([text_embedding, image_embedding])
        return combined

class SemanticEnrichmentService:
    """Main service for semantic enrichment"""
    
    def __init__(self):
        self.multimodal_service = MultimodalEmbeddingService()
        self.logger = logging.getLogger(__name__)
    
    def enrich_product(self, product_data: Dict[str, Any]) -> Dict[str, Any]:
        """Enrich product with semantic embeddings and classifications"""
        try:
            # Generate embeddings
            embeddings = self.multimodal_service.encode_product(product_data)
            
            # Add embeddings to product data
            enriched_product = product_data.copy()
            enriched_product.update(embeddings)
            
            # Add classification fields
            enriched_product.update(self._classify_product(product_data))
            
            # Add enrichment metadata
            enriched_product['enriched_at'] = datetime.now(timezone.utc).isoformat()
            enriched_product['enrichment_version'] = '1.0'
            
            return enriched_product
            
        except Exception as e:
            self.logger.error(f"Error enriching product: {str(e)}")
            return product_data
    
    def _classify_product(self, product_data: Dict[str, Any]) -> Dict[str, Any]:
        """Classify product attributes"""
        classifications = {
            'gender': self._classify_gender(product_data),
            'style': self._classify_style(product_data),
            'season': self._classify_season(product_data),
            'formality': self._classify_formality(product_data)
        }
        
        return classifications
    
    def _classify_gender(self, product_data: Dict[str, Any]) -> str:
        """Classify product gender"""
        title = product_data.get('title', '').lower()
        description = product_data.get('description', '').lower()
        categories = [cat.lower() for cat in product_data.get('category', [])]
        
        # Gender indicators
        women_indicators = ['women', 'female', 'ladies', 'girls', 'dress', 'skirt', 'blouse']
        men_indicators = ['men', 'male', 'gentlemen', 'boys', 'shirt', 'tie', 'suit']
        
        text = f"{title} {description} {' '.join(categories)}"
        
        women_score = sum(1 for indicator in women_indicators if indicator in text)
        men_score = sum(1 for indicator in men_indicators if indicator in text)
        
        if women_score > men_score:
            return 'Female'
        elif men_score > women_score:
            return 'Male'
        else:
            return 'Unisex'
    
    def _classify_style(self, product_data: Dict[str, Any]) -> str:
        """Classify product style"""
        title = product_data.get('title', '').lower()
        description = product_data.get('description', '').lower()
        
        text = f"{title} {description}"
        
        style_indicators = {
            'Casual': ['casual', 'everyday', 'comfortable', 'relaxed'],
            'Formal': ['formal', 'business', 'professional', 'suit', 'dress'],
            'Sporty': ['sport', 'athletic', 'gym', 'workout', 'active'],
            'Bohemian': ['boho', 'bohemian', 'vintage', 'retro', 'artistic'],
            'Minimalist': ['minimal', 'simple', 'clean', 'basic', 'essential'],
            'Trendy': ['trendy', 'fashion', 'stylish', 'chic', 'modern']
        }
        
        style_scores = {}
        for style, indicators in style_indicators.items():
            score = sum(1 for indicator in indicators if indicator in text)
            style_scores[style] = score
        
        if style_scores:
            return max(style_scores, key=style_scores.get)
        
        return 'Unknown'
    
    def _classify_season(self, product_data: Dict[str, Any]) -> str:
        """Classify product season"""
        title = product_data.get('title', '').lower()
        description = product_data.get('description', '').lower()
        
        text = f"{title} {description}"
        
        season_indicators = {
            'Summer': ['summer', 'light', 'breathable', 'short', 'tank'],
            'Winter': ['winter', 'warm', 'wool', 'coat', 'jacket'],
            'Spring': ['spring', 'light', 'fresh', 'floral'],
            'Fall': ['fall', 'autumn', 'layered', 'cozy']
        }
        
        season_scores = {}
        for season, indicators in season_indicators.items():
            score = sum(1 for indicator in indicators if indicator in text)
            season_scores[season] = score
        
        if season_scores:
            return max(season_scores, key=season_scores.get)
        
        return 'All Season'
    
    def _classify_formality(self, product_data: Dict[str, Any]) -> str:
        """Classify product formality level"""
        title = product_data.get('title', '').lower()
        description = product_data.get('description', '').lower()
        
        text = f"{title} {description}"
        
        formality_indicators = {
            'Very Formal': ['black tie', 'white tie', 'evening', 'gala'],
            'Formal': ['formal', 'business', 'professional', 'suit'],
            'Semi-Formal': ['semi-formal', 'cocktail', 'dressy'],
            'Casual': ['casual', 'everyday', 'relaxed'],
            'Very Casual': ['athletic', 'sport', 'lounge', 'sleep']
        }
        
        formality_scores = {}
        for formality, indicators in formality_indicators.items():
            score = sum(1 for indicator in indicators if indicator in text)
            formality_scores[formality] = score
        
        if formality_scores:
            return max(formality_scores, key=formality_scores.get)
        
        return 'Casual'
    
    def batch_enrich_products(self, products: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Enrich a batch of products"""
        enriched_products = []
        
        for product in products:
            try:
                enriched_product = self.enrich_product(product)
                enriched_products.append(enriched_product)
            except Exception as e:
                self.logger.error(f"Error enriching product {product.get('product_id', '')}: {str(e)}")
                enriched_products.append(product)  # Return original if enrichment fails
        
        return enriched_products
