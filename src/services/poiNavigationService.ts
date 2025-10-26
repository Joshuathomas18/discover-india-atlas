import { meilisearchService } from './meilisearchService';

export interface POI {
  id: string;
  name: string;
  coordinates: { lat: number; lng: number };
  state_id: string;
  category: string;
  type: string;
  description_short?: string;
  city?: string;
  state?: string;
}

class POINavigationService {
  private mapRef: any = null;
  private onPOISelect: ((poi: POI) => void) | null = null;
  
  /**
   * Set the map reference for navigation
   */
  setMapRef(mapRef: any) {
    this.mapRef = mapRef;
  }
  
  /**
   * Set the callback for POI selection
   */
  setOnPOISelect(callback: (poi: POI) => void) {
    this.onPOISelect = callback;
  }
  
  /**
   * Navigate to a specific POI by ID
   */
  async navigateToPOI(placeId: string): Promise<void> {
    try {
      console.log('Navigating to POI:', placeId);
      
      // 1. Find POI in database
      const poi = await this.findPOIById(placeId);
      if (!poi) {
        console.error('POI not found:', placeId);
        return;
      }
      
      console.log('Found POI:', poi);
      
      // 2. Navigate map to POI
      if (this.mapRef) {
        this.mapRef.panTo(poi.coordinates);
        this.mapRef.setZoom(15);
        console.log('Map navigated to:', poi.coordinates);
      }
      
      // 3. Open POI modal/details
      if (this.onPOISelect) {
        this.onPOISelect(poi);
        console.log('POI selected:', poi.name);
      }
      
    } catch (error) {
      console.error('Error navigating to POI:', error);
    }
  }
  
  /**
   * Find POI by ID in Meilisearch
   */
  private async findPOIById(placeId: string): Promise<POI | null> {
    try {
      // Search in Meilisearch
      const results = await meilisearchService.search(`id:${placeId}`, { 
        limit: 1,
        attributesToRetrieve: [
          'id', 'name', 'coordinates', 'state_id', 'category', 
          'type', 'description_short', 'city', 'state'
        ]
      });
      
      if (results.hits && results.hits.length > 0) {
        return results.hits[0] as POI;
      }
      
      // If not found in Meilisearch, try searching by name
      const nameResults = await meilisearchService.search(placeId, { 
        limit: 1,
        attributesToRetrieve: [
          'id', 'name', 'coordinates', 'state_id', 'category', 
          'type', 'description_short', 'city', 'state'
        ]
      });
      
      if (nameResults.hits && nameResults.hits.length > 0) {
        return nameResults.hits[0] as POI;
      }
      
      return null;
    } catch (error) {
      console.error('Error finding POI:', error);
      return null;
    }
  }
  
  /**
   * Navigate to POI by name (alternative method)
   */
  async navigateToPOIByName(placeName: string): Promise<void> {
    try {
      console.log('Navigating to POI by name:', placeName);
      
      const results = await meilisearchService.search(placeName, { 
        limit: 1,
        attributesToRetrieve: [
          'id', 'name', 'coordinates', 'state_id', 'category', 
          'type', 'description_short', 'city', 'state'
        ]
      });
      
      if (results.hits && results.hits.length > 0) {
        const poi = results.hits[0] as POI;
        await this.navigateToPOI(poi.id);
      } else {
        console.error('POI not found by name:', placeName);
      }
    } catch (error) {
      console.error('Error navigating to POI by name:', error);
    }
  }
}

export const poiNavigationService = new POINavigationService();

