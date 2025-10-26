"""
Async Scraper Service

Handles background scraping jobs using the job queue.
"""

import threading
import logging
from typing import Dict, Any
from .job_queue import job_queue, JobStatus
from ..sites.myntra_service import MyntraScraperService

logger = logging.getLogger(__name__)

class AsyncScraperService:
    """Service for handling async scraping jobs"""
    
    def __init__(self):
        self.myntra_service = MyntraScraperService()
    
    def start_myntra_search(self, job_id: str, query: str, max_products: int = 20, filters: Dict[str, Any] = None):
        """Start Myntra search in background thread"""
        
        def scrape_worker():
            try:
                logger.info(f"Starting background scrape for job {job_id}: {query}")
                
                # Update job status to running
                job_queue.update_job_status(job_id, JobStatus.RUNNING, "Starting search...")
                
                # Perform the search with progress updates
                result = self.myntra_service.search_products_with_progress(
                    query, 
                    max_products, 
                    filters or {},
                    progress_callback=lambda current, total, message: self._update_progress(job_id, current, total, message)
                )
                
                # Set results
                job_queue.set_job_results(job_id, result)
                logger.info(f"Completed job {job_id}: {result.get('total_found', 0)} products found")
                
            except Exception as e:
                logger.error(f"Error in scrape worker for job {job_id}: {e}")
                job_queue.set_job_error(job_id, str(e))
        
        # Start background thread
        thread = threading.Thread(target=scrape_worker, daemon=True)
        thread.start()
        logger.info(f"Started background thread for job {job_id}")
    
    def _update_progress(self, job_id: str, current: int, total: int, message: str):
        """Update job progress"""
        job_queue.update_job_progress(job_id, current, total, message)

# Global async scraper instance
async_scraper = AsyncScraperService()
