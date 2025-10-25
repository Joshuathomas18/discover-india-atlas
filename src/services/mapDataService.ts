// Map Data Service for Firebase Integration
// Handles fetching places and cultural items for the interactive map

import { databaseService } from './database';
import { Place, CulturalItem, KarnatakaPOI } from '../types/database';
import { allKarnatakaData } from '../data/karnataka';

export class MapDataService {
  
  // Get all places for a specific state
  async getPlacesByState(stateId: string): Promise<Place[]> {
    try {
      console.log(`Fetching places for state: ${stateId}`);
      const places = await databaseService.getPlacesByState(stateId);
      console.log(`Found ${places.length} places for ${stateId}`);
      return places;
    } catch (error) {
      console.error(`Error fetching places for state ${stateId}:`, error);
      return [];
    }
  }

  // Get cultural items for a specific place and category
  async getCulturalItemsByPlace(placeId: string, category: string): Promise<CulturalItem[]> {
    try {
      console.log(`Fetching cultural items for place: ${placeId}, category: ${category}`);
      const items = await databaseService.getCulturalItemsByCategory(placeId, category);
      console.log(`Found ${items.length} cultural items for ${placeId} - ${category}`);
      return items;
    } catch (error) {
      console.error(`Error fetching cultural items for place ${placeId}, category ${category}:`, error);
      return [];
    }
  }

  // Get a specific place by ID
  async getPlaceById(placeId: string): Promise<Place | null> {
    try {
      console.log(`Fetching place by ID: ${placeId}`);
      const place = await databaseService.getPlaceById(placeId);
      return place;
    } catch (error) {
      console.error(`Error fetching place ${placeId}:`, error);
      return null;
    }
  }

  // Get cultural items for all categories of a place
  async getCulturalItemsForPlace(placeId: string): Promise<Record<string, CulturalItem[]>> {
    try {
      const categories = ['monuments', 'food', 'customs', 'festivals', 'history'];
      const result: Record<string, CulturalItem[]> = {};
      
      for (const category of categories) {
        const items = await this.getCulturalItemsByPlace(placeId, category);
        result[category] = items;
      }
      
      return result;
    } catch (error) {
      console.error(`Error fetching all cultural items for place ${placeId}:`, error);
      return {};
    }
  }

  // Get state information
  async getStateById(stateId: string) {
    try {
      console.log(`Fetching state by ID: ${stateId}`);
      const state = await databaseService.getStateById(stateId);
      return state;
    } catch (error) {
      console.error(`Error fetching state ${stateId}:`, error);
      return null;
    }
  }

  // ========== KARNATAKA POI METHODS ==========
  
  // Get all Karnataka POIs
  async getKarnatakaPOIs(): Promise<KarnatakaPOI[]> {
    console.log('Using local Karnataka data from src/data/karnataka');
    return allKarnatakaData;
  }

  // Get Karnataka POIs by category
  async getKarnatakaPOIsByCategory(category: string): Promise<KarnatakaPOI[]> {
    console.log(`Using local Karnataka data for category: ${category}`);
    return allKarnatakaData.filter(poi => poi.category === category);
  }

  // Get a specific Karnataka POI by ID
  async getKarnatakaPOIById(poiId: string): Promise<KarnatakaPOI | null> {
    console.log(`Using local Karnataka data for POI: ${poiId}`);
    return allKarnatakaData.find(poi => poi.id === poiId) || null;
  }
}

// Export singleton instance
export const mapDataService = new MapDataService();
