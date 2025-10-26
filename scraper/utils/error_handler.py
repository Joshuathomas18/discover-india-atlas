"""
Error Handling and Monitoring Service
Handles error logging, DLQ, and monitoring for the scraper system
"""

import logging
import json
from typing import Dict, Any, List, Optional
from datetime import datetime, timezone
import traceback
from enum import Enum

from google.cloud import pubsub_v1
from google.cloud import monitoring_v3
from google.cloud.monitoring_v3 import query

from ..config.scraper_config import get_pubsub_config, get_monitoring_config

logger = logging.getLogger(__name__)

class ErrorSeverity(Enum):
    """Error severity levels"""
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

class ErrorCategory(Enum):
    """Error categories"""
    CRAWLING = "crawling"
    EXTRACTION = "extraction"
    DEDUPLICATION = "deduplication"
    EMBEDDING = "embedding"
    STORAGE = "storage"
    SEARCH = "search"
    NETWORK = "network"
    AUTHENTICATION = "authentication"
    RATE_LIMIT = "rate_limit"
    UNKNOWN = "unknown"

class ScraperError(Exception):
    """Custom exception for scraper errors"""
    
    def __init__(self, message: str, category: ErrorCategory = ErrorCategory.UNKNOWN, 
                 severity: ErrorSeverity = ErrorSeverity.MEDIUM, context: Dict[str, Any] = None):
        super().__init__(message)
        self.category = category
        self.severity = severity
        self.context = context or {}
        self.timestamp = datetime.now(timezone.utc)

class ErrorHandler:
    """Handles error logging and monitoring"""
    
    def __init__(self):
        self.config = get_monitoring_config()
        self.pubsub_config = get_pubsub_config()
        self.logger = logging.getLogger(__name__)
        
        # Initialize monitoring client
        self.monitoring_client = monitoring_v3.MetricServiceClient()
        self.project_id = self.pubsub_config['project_id']
        
        # Initialize Pub/Sub client for DLQ
        self.publisher = pubsub_v1.PublisherClient()
        self.dlq_topic_path = self.publisher.topic_path(
            self.project_id, 
            self.pubsub_config['dlq_topic']
        )
    
    def log_error(self, error: Exception, context: Dict[str, Any] = None, 
                  category: ErrorCategory = ErrorCategory.UNKNOWN,
                  severity: ErrorSeverity = ErrorSeverity.MEDIUM):
        """Log an error with context and severity"""
        try:
            error_data = {
                'timestamp': datetime.now(timezone.utc).isoformat(),
                'error_type': type(error).__name__,
                'error_message': str(error),
                'category': category.value,
                'severity': severity.value,
                'context': context or {},
                'traceback': traceback.format_exc()
            }
            
            # Log to application logger
            log_level = self._get_log_level(severity)
            self.logger.log(log_level, f"Scraper Error: {error_data}")
            
            # Send to monitoring system
            self._send_to_monitoring(error_data)
            
            # Send to DLQ if critical
            if severity == ErrorSeverity.CRITICAL:
                self._send_to_dlq(error_data)
            
        except Exception as e:
            self.logger.error(f"Error in error handler: {str(e)}")
    
    def _get_log_level(self, severity: ErrorSeverity) -> int:
        """Get log level from severity"""
        severity_levels = {
            ErrorSeverity.LOW: logging.INFO,
            ErrorSeverity.MEDIUM: logging.WARNING,
            ErrorSeverity.HIGH: logging.ERROR,
            ErrorSeverity.CRITICAL: logging.CRITICAL
        }
        return severity_levels.get(severity, logging.ERROR)
    
    def _send_to_monitoring(self, error_data: Dict[str, Any]):
        """Send error data to Google Cloud Monitoring"""
        try:
            # Create metric descriptor
            project_name = f"projects/{self.project_id}"
            
            # Create time series data
            series = monitoring_v3.TimeSeries()
            series.metric.type = "custom.googleapis.com/scraper/errors"
            series.resource.type = "global"
            
            # Add labels
            series.metric.labels["category"] = error_data['category']
            series.metric.labels["severity"] = error_data['severity']
            series.metric.labels["error_type"] = error_data['error_type']
            
            # Add point
            now = datetime.now(timezone.utc)
            seconds = int(now.timestamp())
            nanos = int((now.timestamp() - seconds) * 10**9)
            
            interval = monitoring_v3.TimeInterval({
                "end_time": {"seconds": seconds, "nanos": nanos}
            })
            
            point = monitoring_v3.Point({
                "interval": interval,
                "value": {"int64_value": 1}
            })
            
            series.points = [point]
            
            # Write time series
            self.monitoring_client.create_time_series(
                name=project_name,
                time_series=[series]
            )
            
        except Exception as e:
            self.logger.error(f"Error sending to monitoring: {str(e)}")
    
    def _send_to_dlq(self, error_data: Dict[str, Any]):
        """Send error to Dead Letter Queue"""
        try:
            # Prepare DLQ message
            dlq_message = {
                'error_data': error_data,
                'retry_count': 0,
                'max_retries': 3,
                'next_retry_at': datetime.now(timezone.utc).isoformat()
            }
            
            # Publish to DLQ topic
            message_data = json.dumps(dlq_message).encode('utf-8')
            future = self.publisher.publish(self.dlq_topic_path, message_data)
            future.result()  # Wait for publish
            
            self.logger.info(f"Error sent to DLQ: {error_data['error_type']}")
            
        except Exception as e:
            self.logger.error(f"Error sending to DLQ: {str(e)}")
    
    def get_error_stats(self, hours: int = 24) -> Dict[str, Any]:
        """Get error statistics for the last N hours"""
        try:
            # Query monitoring data
            project_name = f"projects/{self.project_id}"
            
            # Create query
            query_client = monitoring_v3.QueryServiceClient()
            
            # Build query string
            query_str = f"""
                resource.type="global"
                metric.type="custom.googleapis.com/scraper/errors"
                metric.labels.category!=""
            """
            
            # Execute query
            results = query_client.query_time_series(
                name=project_name,
                query=query_str
            )
            
            # Process results
            stats = {
                'total_errors': 0,
                'by_category': {},
                'by_severity': {},
                'by_error_type': {},
                'time_range_hours': hours
            }
            
            for result in results:
                for point in result.points:
                    # Extract labels
                    category = result.metric.labels.get('category', 'unknown')
                    severity = result.metric.labels.get('severity', 'unknown')
                    error_type = result.metric.labels.get('error_type', 'unknown')
                    
                    # Count errors
                    stats['total_errors'] += 1
                    stats['by_category'][category] = stats['by_category'].get(category, 0) + 1
                    stats['by_severity'][severity] = stats['by_severity'].get(severity, 0) + 1
                    stats['by_error_type'][error_type] = stats['by_error_type'].get(error_type, 0) + 1
            
            return stats
            
        except Exception as e:
            self.logger.error(f"Error getting error stats: {str(e)}")
            return {
                'total_errors': 0,
                'by_category': {},
                'by_severity': {},
                'by_error_type': {},
                'error': str(e)
            }

class DeadLetterQueueHandler:
    """Handles Dead Letter Queue processing"""
    
    def __init__(self):
        self.pubsub_config = get_pubsub_config()
        self.subscriber = pubsub_v1.SubscriberClient()
        self.logger = logging.getLogger(__name__)
    
    def process_dlq_messages(self, max_messages: int = 10) -> List[Dict[str, Any]]:
        """Process messages from Dead Letter Queue"""
        try:
            subscription_path = self.subscriber.subscription_path(
                self.pubsub_config['project_id'],
                f"{self.pubsub_config['dlq_topic']}-subscription"
            )
            
            # Pull messages
            response = self.subscriber.pull(
                request={
                    "subscription": subscription_path,
                    "max_messages": max_messages
                }
            )
            
            processed_messages = []
            
            for received_message in response.received_messages:
                try:
                    # Parse message
                    message_data = json.loads(received_message.message.data.decode('utf-8'))
                    
                    # Process message
                    processed_message = self._process_dlq_message(message_data)
                    processed_messages.append(processed_message)
                    
                    # Acknowledge message
                    self.subscriber.acknowledge(
                        request={
                            "subscription": subscription_path,
                            "ack_ids": [received_message.ack_id]
                        }
                    )
                    
                except Exception as e:
                    self.logger.error(f"Error processing DLQ message: {str(e)}")
                    # Don't acknowledge if processing failed
                    continue
            
            return processed_messages
            
        except Exception as e:
            self.logger.error(f"Error processing DLQ messages: {str(e)}")
            return []
    
    def _process_dlq_message(self, message_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process a single DLQ message"""
        try:
            error_data = message_data.get('error_data', {})
            retry_count = message_data.get('retry_count', 0)
            max_retries = message_data.get('max_retries', 3)
            
            # Check if we should retry
            if retry_count < max_retries:
                # Increment retry count
                retry_count += 1
                
                # Update message for retry
                message_data['retry_count'] = retry_count
                message_data['next_retry_at'] = datetime.now(timezone.utc).isoformat()
                
                # Re-queue message (in production, use proper retry mechanism)
                self.logger.info(f"Retrying DLQ message (attempt {retry_count}/{max_retries})")
                
                return {
                    'status': 'retried',
                    'retry_count': retry_count,
                    'error_type': error_data.get('error_type', 'unknown')
                }
            else:
                # Max retries exceeded, mark as failed
                self.logger.error(f"DLQ message failed after {max_retries} retries: {error_data}")
                
                return {
                    'status': 'failed',
                    'retry_count': retry_count,
                    'error_type': error_data.get('error_type', 'unknown')
                }
                
        except Exception as e:
            self.logger.error(f"Error processing DLQ message: {str(e)}")
            return {
                'status': 'error',
                'error': str(e)
            }

class HealthChecker:
    """Health check service for scraper components"""
    
    def __init__(self):
        self.logger = logging.getLogger(__name__)
    
    def check_health(self) -> Dict[str, Any]:
        """Check health of all scraper components"""
        health_status = {
            'overall_status': 'healthy',
            'components': {},
            'timestamp': datetime.now(timezone.utc).isoformat()
        }
        
        # Check each component
        components = [
            ('firestore', self._check_firestore),
            ('redis', self._check_redis),
            ('pubsub', self._check_pubsub),
            ('monitoring', self._check_monitoring)
        ]
        
        for component_name, check_func in components:
            try:
                component_status = check_func()
                health_status['components'][component_name] = component_status
                
                if component_status['status'] != 'healthy':
                    health_status['overall_status'] = 'unhealthy'
                    
            except Exception as e:
                health_status['components'][component_name] = {
                    'status': 'error',
                    'error': str(e)
                }
                health_status['overall_status'] = 'unhealthy'
        
        return health_status
    
    def _check_firestore(self) -> Dict[str, Any]:
        """Check Firestore health"""
        try:
            from app.firebase.client import get_firestore_client
            db = get_firestore_client()
            
            # Try to read a document
            db.collection('health_check').limit(1).get()
            
            return {
                'status': 'healthy',
                'message': 'Firestore connection successful'
            }
            
        except Exception as e:
            return {
                'status': 'unhealthy',
                'error': str(e)
            }
    
    def _check_redis(self) -> Dict[str, Any]:
        """Check Redis health"""
        try:
            from ..config.scraper_config import get_redis_config
            import redis
            
            redis_config = get_redis_config()
            if not redis_config['host']:
                return {
                    'status': 'healthy',
                    'message': 'Redis not configured'
                }
            
            client = redis.Redis(
                host=redis_config['host'],
                port=redis_config['port'],
                db=redis_config['db'],
                password=redis_config['password']
            )
            
            # Test connection
            client.ping()
            
            return {
                'status': 'healthy',
                'message': 'Redis connection successful'
            }
            
        except Exception as e:
            return {
                'status': 'unhealthy',
                'error': str(e)
            }
    
    def _check_pubsub(self) -> Dict[str, Any]:
        """Check Pub/Sub health"""
        try:
            from ..config.scraper_config import get_pubsub_config
            from google.cloud import pubsub_v1
            
            config = get_pubsub_config()
            publisher = pubsub_v1.PublisherClient()
            
            # Try to get topic
            topic_path = publisher.topic_path(config['project_id'], config['crawl_topic'])
            publisher.get_topic(request={"topic": topic_path})
            
            return {
                'status': 'healthy',
                'message': 'Pub/Sub connection successful'
            }
            
        except Exception as e:
            return {
                'status': 'unhealthy',
                'error': str(e)
            }
    
    def _check_monitoring(self) -> Dict[str, Any]:
        """Check monitoring health"""
        try:
            from ..config.scraper_config import get_pubsub_config
            from google.cloud import monitoring_v3
            
            config = get_pubsub_config()
            client = monitoring_v3.MetricServiceClient()
            
            # Try to list metric descriptors
            project_name = f"projects/{config['project_id']}"
            client.list_metric_descriptors(name=project_name)
            
            return {
                'status': 'healthy',
                'message': 'Monitoring connection successful'
            }
            
        except Exception as e:
            return {
                'status': 'unhealthy',
                'error': str(e)
            }
