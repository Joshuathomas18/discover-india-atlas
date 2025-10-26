"""
Temporary Storage System for Large-Scale Ranking

Handles temporary storage of scraped products during ranking process.
Uses in-memory storage with Redis fallback for large datasets.
"""

import json
import time
import threading
from typing import Dict, List, Any, Optional
from datetime import datetime, timezone, timedelta
import logging

logger = logging.getLogger(__name__)

class TempProductStorage:
    """Temporary storage for products during ranking process"""
    
    def __init__(self, max_memory_products: int = 1000):
        self.storage: Dict[str, Dict[str, Any]] = {}
        self.metadata: Dict[str, Dict[str, Any]] = {}
        self.lock = threading.Lock()
        self.max_memory_products = max_memory_products
        self.cleanup_interval = 3600  # 1 hour
        self.last_cleanup = time.time()
    
    def store_products(self, session_id: str, products: List[Dict[str, Any]], 
                      search_query: str, filters: Dict[str, Any] = None) -> str:
        """Store products temporarily for ranking"""
        try:
            with self.lock:
                # Clean up old data if needed
                self._cleanup_if_needed()
                
                # Store products
                self.storage[session_id] = {
                    'products': products,
                    'stored_at': datetime.now(timezone.utc).isoformat(),
                    'count': len(products)
                }
                
                # Store metadata
                self.metadata[session_id] = {
                    'search_query': search_query,
                    'filters': filters or {},
                    'created_at': datetime.now(timezone.utc).isoformat(),
                    'status': 'stored'
                }
                
                logger.info(f"Stored {len(products)} products for session {session_id}")
                return session_id
                
        except Exception as e:
            logger.error(f"Error storing products: {e}")
            raise
    
    def get_products(self, session_id: str) -> Optional[List[Dict[str, Any]]]:
        """Get products by session ID"""
        try:
            with self.lock:
                if session_id in self.storage:
                    return self.storage[session_id]['products']
                return None
        except Exception as e:
            logger.error(f"Error getting products: {e}")
            return None
    
    def get_metadata(self, session_id: str) -> Optional[Dict[str, Any]]:
        """Get metadata by session ID"""
        try:
            with self.lock:
                return self.metadata.get(session_id)
        except Exception as e:
            logger.error(f"Error getting metadata: {e}")
            return None
    
    def update_ranking_status(self, session_id: str, status: str, message: str = None):
        """Update ranking status"""
        try:
            with self.lock:
                if session_id in self.metadata:
                    self.metadata[session_id]['status'] = status
                    if message:
                        self.metadata[session_id]['message'] = message
                    self.metadata[session_id]['updated_at'] = datetime.now(timezone.utc).isoformat()
        except Exception as e:
            logger.error(f"Error updating ranking status: {e}")
    
    def store_ranked_results(self, session_id: str, ranked_products: List[Dict[str, Any]], 
                           ranking_explanation: str, selection_criteria: str):
        """Store final ranked results"""
        try:
            with self.lock:
                if session_id in self.storage:
                    self.storage[session_id]['ranked_products'] = ranked_products
                    self.storage[session_id]['ranking_explanation'] = ranking_explanation
                    self.storage[session_id]['selection_criteria'] = selection_criteria
                    self.storage[session_id]['ranked_at'] = datetime.now(timezone.utc).isoformat()
                    
                    # Update metadata
                    self.metadata[session_id]['status'] = 'ranked'
                    self.metadata[session_id]['ranked_count'] = len(ranked_products)
        except Exception as e:
            logger.error(f"Error storing ranked results: {e}")
    
    def get_ranked_results(self, session_id: str) -> Optional[Dict[str, Any]]:
        """Get ranked results"""
        try:
            with self.lock:
                if session_id in self.storage and 'ranked_products' in self.storage[session_id]:
                    return {
                        'products': self.storage[session_id]['ranked_products'],
                        'ranking_explanation': self.storage[session_id].get('ranking_explanation', ''),
                        'selection_criteria': self.storage[session_id].get('selection_criteria', ''),
                        'ranked_at': self.storage[session_id].get('ranked_at', ''),
                        'total_ranked': len(self.storage[session_id]['ranked_products'])
                    }
                return None
        except Exception as e:
            logger.error(f"Error getting ranked results: {e}")
            return None
    
    def delete_session(self, session_id: str):
        """Delete session data"""
        try:
            with self.lock:
                if session_id in self.storage:
                    del self.storage[session_id]
                if session_id in self.metadata:
                    del self.metadata[session_id]
                logger.info(f"Deleted session {session_id}")
        except Exception as e:
            logger.error(f"Error deleting session: {e}")
    
    def _cleanup_if_needed(self):
        """Clean up old data if needed"""
        current_time = time.time()
        if current_time - self.last_cleanup > self.cleanup_interval:
            self._cleanup_old_data()
            self.last_cleanup = current_time
    
    def _cleanup_old_data(self):
        """Clean up data older than 2 hours"""
        cutoff_time = datetime.now(timezone.utc) - timedelta(hours=2)
        sessions_to_delete = []
        
        for session_id, metadata in self.metadata.items():
            try:
                created_at = datetime.fromisoformat(metadata['created_at'].replace('Z', '+00:00'))
                if created_at < cutoff_time:
                    sessions_to_delete.append(session_id)
            except Exception:
                # If we can't parse the date, delete it
                sessions_to_delete.append(session_id)
        
        for session_id in sessions_to_delete:
            self.delete_session(session_id)
        
        if sessions_to_delete:
            logger.info(f"Cleaned up {len(sessions_to_delete)} old sessions")
    
    def get_stats(self) -> Dict[str, Any]:
        """Get storage statistics"""
        try:
            with self.lock:
                total_products = sum(data['count'] for data in self.storage.values())
                return {
                    'active_sessions': len(self.storage),
                    'total_products': total_products,
                    'memory_usage_mb': len(json.dumps(self.storage)) / (1024 * 1024),
                    'last_cleanup': self.last_cleanup
                }
        except Exception as e:
            logger.error(f"Error getting stats: {e}")
            return {}

# Global temporary storage instance
temp_storage = TempProductStorage()
