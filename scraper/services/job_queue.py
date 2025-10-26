"""
Async Job Queue Service for Web Scraping

Handles background job processing for long-running scraping tasks.
"""

import uuid
import threading
import time
from datetime import datetime, timezone
from typing import Dict, Any, Optional
import logging

logger = logging.getLogger(__name__)

class JobStatus:
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"

class ScrapingJob:
    """Represents a single scraping job"""
    
    def __init__(self, job_id: str, query: str, max_products: int = 20, filters: Dict[str, Any] = None):
        self.job_id = job_id
        self.query = query
        self.max_products = max_products
        self.filters = filters or {}
        self.status = JobStatus.PENDING
        self.progress = 0
        self.total_products = 0
        self.current_product = 0
        self.results = None
        self.error = None
        self.created_at = datetime.now(timezone.utc)
        self.started_at = None
        self.completed_at = None
        self.message = "Job queued"

class JobQueue:
    """Simple in-memory job queue for scraping tasks"""
    
    def __init__(self):
        self.jobs: Dict[str, ScrapingJob] = {}
        self.lock = threading.Lock()
    
    def create_job(self, query: str, max_products: int = 20, filters: Dict[str, Any] = None) -> str:
        """Create a new scraping job"""
        job_id = str(uuid.uuid4())
        
        with self.lock:
            job = ScrapingJob(job_id, query, max_products, filters)
            self.jobs[job_id] = job
        
        logger.info(f"Created job {job_id} for query: {query}")
        return job_id
    
    def get_job(self, job_id: str) -> Optional[ScrapingJob]:
        """Get job by ID"""
        with self.lock:
            return self.jobs.get(job_id)
    
    def update_job_status(self, job_id: str, status: str, message: str = None):
        """Update job status"""
        with self.lock:
            if job_id in self.jobs:
                job = self.jobs[job_id]
                job.status = status
                if message:
                    job.message = message
                
                if status == JobStatus.RUNNING and not job.started_at:
                    job.started_at = datetime.now(timezone.utc)
                elif status in [JobStatus.COMPLETED, JobStatus.FAILED]:
                    job.completed_at = datetime.now(timezone.utc)
    
    def update_job_progress(self, job_id: str, current: int, total: int, message: str = None):
        """Update job progress"""
        with self.lock:
            if job_id in self.jobs:
                job = self.jobs[job_id]
                job.current_product = current
                job.total_products = total
                job.progress = int((current / total) * 100) if total > 0 else 0
                if message:
                    job.message = message
    
    def set_job_results(self, job_id: str, results: Dict[str, Any]):
        """Set job results"""
        with self.lock:
            if job_id in self.jobs:
                job = self.jobs[job_id]
                job.results = results
                job.status = JobStatus.COMPLETED
                job.completed_at = datetime.now(timezone.utc)
                job.message = f"Completed successfully. Found {len(results.get('products', []))} products."
    
    def set_job_error(self, job_id: str, error: str):
        """Set job error"""
        with self.lock:
            if job_id in self.jobs:
                job = self.jobs[job_id]
                job.error = error
                job.status = JobStatus.FAILED
                job.completed_at = datetime.now(timezone.utc)
                job.message = f"Failed: {error}"
    
    def cleanup_old_jobs(self, max_age_hours: int = 24):
        """Clean up old completed/failed jobs"""
        cutoff_time = datetime.now(timezone.utc).timestamp() - (max_age_hours * 3600)
        
        with self.lock:
            jobs_to_remove = []
            for job_id, job in self.jobs.items():
                if job.completed_at and job.completed_at.timestamp() < cutoff_time:
                    jobs_to_remove.append(job_id)
            
            for job_id in jobs_to_remove:
                del self.jobs[job_id]
                logger.info(f"Cleaned up old job: {job_id}")

# Global job queue instance
job_queue = JobQueue()

def start_background_cleanup():
    """Start background thread to clean up old jobs"""
    def cleanup_worker():
        while True:
            try:
                job_queue.cleanup_old_jobs()
                time.sleep(3600)  # Clean up every hour
            except Exception as e:
                logger.error(f"Error in cleanup worker: {e}")
                time.sleep(3600)
    
    cleanup_thread = threading.Thread(target=cleanup_worker, daemon=True)
    cleanup_thread.start()
    logger.info("Started background job cleanup thread")
