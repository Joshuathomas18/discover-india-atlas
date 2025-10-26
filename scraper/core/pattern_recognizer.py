"""
Universal Pattern Recognizer
Automatically detects product patterns on any website using ML and heuristics
"""

import re
import logging
from typing import Dict, Any, List
from bs4 import BeautifulSoup
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
import pickle
import os

from .heuristic_detector import HeuristicDetector
from .structure_analyzer import StructureAnalyzer

logger = logging.getLogger(__name__)

class UniversalPatternRecognizer:
    """Automatically detects product patterns on any website"""
    
    def __init__(self):
        self.model_path = 'app/scraper/dynamic/models/pattern_model.pkl'
        self.vectorizer_path = 'app/scraper/dynamic/models/vectorizer.pkl'
        self.ml_model = self._load_or_create_model()
        self.heuristics = HeuristicDetector()
        self.structure_analyzer = StructureAnalyzer()
        self.vectorizer = TfidfVectorizer(max_features=1000, stop_words='english')
    
    def detect_product_patterns(self, html: str, url: str) -> Dict[str, Any]:
        """Detect product patterns without any configuration"""
        
        try:
            # Step 1: Analyze page structure
            structure = self.structure_analyzer.analyze(html)
            
            # Step 2: Apply heuristics
            heuristics = self.heuristics.detect(html, url)
            
            # Step 3: Use ML model
            ml_patterns = self._predict_with_ml(html, url)
            
            # Step 4: Combine and rank patterns
            patterns = self._combine_patterns(structure, heuristics, ml_patterns)
            
            return self._rank_patterns(patterns)
            
        except Exception as e:
            logger.error(f"Error detecting patterns: {e}")
            # Fallback to heuristics only
            return self.heuristics.detect(html, url)
    
    def _load_or_create_model(self):
        """Load existing ML model or create a new one"""
        try:
            if os.path.exists(self.model_path):
                with open(self.model_path, 'rb') as f:
                    return pickle.load(f)
        except Exception as e:
            logger.warning(f"Could not load ML model: {e}")
        
        # Create a simple model for now
        return RandomForestClassifier(n_estimators=100, random_state=42)
    
    def _predict_with_ml(self, html: str, url: str) -> Dict[str, float]:
        """Use ML model to predict patterns"""
        try:
            # Extract features for ML
            features = self._extract_ml_features(html, url)
            
            # For now, return basic predictions
            # In a real implementation, you'd train this on labeled data
            predictions = {
                'product_page': 0.5,
                'listing_page': 0.3,
                'category_page': 0.2
            }
            
            return predictions
            
        except Exception as e:
            logger.warning(f"ML prediction failed: {e}")
            return {}
    
    def _extract_ml_features(self, html: str, url: str) -> List[float]:
        """Extract features for ML model"""
        features = []
        
        # URL features
        features.extend([
            len(url),
            url.count('/'),
            int('/product/' in url.lower()),
            int('/shop/' in url.lower()),
            int('/item/' in url.lower()),
            int('/p/' in url.lower())
        ])
        
        # HTML features
        soup = BeautifulSoup(html, 'html.parser')
        
        # Count various elements
        features.extend([
            len(soup.find_all('img')),
            len(soup.find_all('a')),
            len(soup.find_all('div')),
            len(soup.find_all('span')),
            len(soup.find_all('script')),
            len(soup.find_all('meta'))
        ])
        
        # Count specific patterns
        features.extend([
            html.lower().count('price'),
            html.lower().count('product'),
            html.lower().count('buy'),
            html.lower().count('cart'),
            html.lower().count('add to cart'),
            html.lower().count('$'),
            html.lower().count('₹'),
            html.lower().count('€')
        ])
        
        return features
    
    def _combine_patterns(self, structure: Dict[str, float], 
                         heuristics: Dict[str, float], 
                         ml_patterns: Dict[str, float]) -> Dict[str, float]:
        """Combine different pattern detection methods"""
        combined = {}
        
        # Weight different methods
        for pattern_type, confidence in structure.items():
            combined[pattern_type] = confidence * 0.3
        
        for pattern_type, confidence in heuristics.items():
            combined[pattern_type] = combined.get(pattern_type, 0) + confidence * 0.4
        
        for pattern_type, confidence in ml_patterns.items():
            combined[pattern_type] = combined.get(pattern_type, 0) + confidence * 0.3
        
        return combined
    
    def _rank_patterns(self, patterns: Dict[str, float]) -> Dict[str, float]:
        """Rank patterns by confidence"""
        # Sort by confidence
        ranked = dict(sorted(patterns.items(), key=lambda x: x[1], reverse=True))
        
        # Normalize to 0-1 range
        max_conf = max(ranked.values()) if ranked.values() else 1
        if max_conf > 0:
            ranked = {k: v / max_conf for k, v in ranked.items()}
        
        return ranked
    
    def train_model(self, training_data: List[Dict[str, Any]]):
        """Train the ML model with labeled data"""
        try:
            # Extract features and labels
            X = []
            y = []
            
            for data in training_data:
                features = self._extract_ml_features(data['html'], data['url'])
                X.append(features)
                y.append(data['label'])
            
            # Train model
            X = np.array(X)
            y = np.array(y)
            
            self.ml_model.fit(X, y)
            
            # Save model
            os.makedirs(os.path.dirname(self.model_path), exist_ok=True)
            with open(self.model_path, 'wb') as f:
                pickle.dump(self.ml_model, f)
            
            logger.info("ML model trained and saved successfully")
            
        except Exception as e:
            logger.error(f"Error training model: {e}")
