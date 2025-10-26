// Map Data Service for Firebase Integration
// Handles fetching places and cultural items for the interactive map

import { databaseService } from './database';
import { Place, CulturalItem, KarnatakaPOI, GeographicalPOI } from '../types/database';
import { allKarnatakaData } from '../data/karnataka';
import { meilisearchService, MeilisearchDocument } from './meilisearchService';

// Import all state data
import { allRajasthanData } from '../data/rajasthan';
import { allKeralaData } from '../data/kerala';
import { allGoaData } from '../data/goa';
import { allTamilNaduData } from '../data/tamil-nadu';
import { allMaharashtraData } from '../data/maharashtra';
import { allUttarakhandData } from '../data/uttarakhand';
import { allHimachalPradeshData } from '../data/himachal-pradesh';
import { allGujaratData } from '../data/gujarat';
import { allWestBengalData } from '../data/west-bengal';
import { allAndhraPradeshData } from '../data/andhra-pradesh';
import { allTelanganaData } from '../data/telangana';
import { allOdishaData } from '../data/odisha';
import { allAssamData } from '../data/assam';
import { allPunjabData } from '../data/punjab';
import { allHaryanaData } from '../data/haryana';
import { allMadhyaPradeshData } from '../data/madhya-pradesh';
import { allChhattisgarhData } from '../data/chhattisgarh';
import { allJharkhandData } from '../data/jharkhand';
import { allBiharData } from '../data/bihar';
import { allSikkimData } from '../data/sikkim';
import { allMeghalayaData } from '../data/meghalaya';
import { allManipurData } from '../data/manipur';
import { allDelhiData } from '../data/delhi';
import { allChandigarhData } from '../data/chandigarh';
import { allPuducherryData } from '../data/puducherry';
import { allLakshadweepData } from '../data/lakshadweep';
import { allAndamanNicobarData } from '../data/andaman-nicobar';
import { allDadraNagarHaveliDamanDiuData } from '../data/dadra-nagar-haveli-daman-diu';
import { allJammuKashmirData } from '../data/jammu-kashmir';
import { allLadakhData } from '../data/ladakh';
import { allUttarPradeshData } from '../data/uttar-pradesh';

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

  // ========== UNIVERSAL POI METHODS ==========
  
  // Get all POIs for any state using local data
  async getAllPOIsForState(stateId: string): Promise<GeographicalPOI[]> {
    console.log(`Loading POIs for state: ${stateId}`);
    
    // State data mapping
    const stateDataMap: Record<string, any[]> = {
      'karnataka': allKarnatakaData,
      'rajasthan': allRajasthanData,
      'kerala': allKeralaData,
      'goa': allGoaData,
      'tamil-nadu': allTamilNaduData,
      'maharashtra': allMaharashtraData,
      'uttarakhand': allUttarakhandData,
      'himachal-pradesh': allHimachalPradeshData,
      'gujarat': allGujaratData,
      'west-bengal': allWestBengalData,
      'andhra-pradesh': allAndhraPradeshData,
      'telangana': allTelanganaData,
      'odisha': allOdishaData,
      'assam': allAssamData,
      'punjab': allPunjabData,
      'haryana': allHaryanaData,
      'madhya-pradesh': allMadhyaPradeshData,
      'chhattisgarh': allChhattisgarhData,
      'jharkhand': allJharkhandData,
      'bihar': allBiharData,
      'sikkim': allSikkimData,
      'meghalaya': allMeghalayaData,
      'manipur': allManipurData,
      'delhi': allDelhiData,
      'chandigarh': allChandigarhData,
      'puducherry': allPuducherryData,
      'lakshadweep': allLakshadweepData,
      'andaman-nicobar': allAndamanNicobarData,
      'dadra-nagar-haveli-daman-diu': allDadraNagarHaveliDamanDiuData,
      'jammu-kashmir': allJammuKashmirData,
      'ladakh': allLadakhData,
      'uttar-pradesh': allUttarPradeshData
    };

    const stateData = stateDataMap[stateId];
    if (!stateData) {
      console.log(`No data found for state: ${stateId}`);
      return [];
    }

    // Convert state-specific POI data to GeographicalPOI format
    const convertedPOIs: GeographicalPOI[] = stateData.map(poi => ({
      id: poi.id,
      state_id: stateId,
      name: poi.name,
      category: poi.category === 'place' ? 'city' : poi.category as any,
      description: poi.description,
      coordinates: poi.coordinates,
      icon_color: this.getPOIColor(poi.category),
      created_at: poi.created_at
    }));

    console.log(`Found ${convertedPOIs.length} POIs for ${stateId}`);
    return convertedPOIs;
  }

  // Get POI color based on category
  private getPOIColor(category: string): string {
    const colorMap: Record<string, string> = {
      'city': '#dc2626',      // Red for cities
      'place': '#dc2626',     // Red for places
      'river': '#2563eb',     // Blue for rivers
      'mountain': '#16a34a',  // Green for mountains
      'wildlife': '#ca8a04',  // Yellow for wildlife
      'wildlife_sanctuary': '#ca8a04',
      'forest': '#059669',    // Emerald for forests
      'waterfall': '#0891b2', // Cyan for waterfalls
      'dam': '#7c3aed'        // Purple for dams
    };
    
    return colorMap[category] || '#6b7280'; // Gray as default
  }

  // ========== KARNATAKA POI METHODS (LEGACY) ==========
  
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

  // Search POIs using Meilisearch
  async searchPOIs(query: string, filters?: {
    type?: string;
    state?: string;
    category?: string;
  }): Promise<MeilisearchDocument[]> {
    try {
      console.log(`Searching POIs with query: ${query}`, filters);
      const results = await meilisearchService.searchWithFilters(query, filters || {});
      console.log(`Found ${results.length} POIs for query: ${query}`);
      return results;
    } catch (error) {
      console.error(`Error searching POIs with query ${query}:`, error);
      return [];
    }
  }

  // Get POI by ID from Meilisearch
  async getPOIById(poiId: string): Promise<MeilisearchDocument | null> {
    try {
      console.log(`Fetching POI by ID: ${poiId}`);
      const results = await meilisearchService.search(poiId, {
        limit: 1,
        filters: `id = "${poiId}"`
      });
      
      if (results.hits.length > 0) {
        return results.hits[0];
      }
      
      return null;
    } catch (error) {
      console.error(`Error fetching POI ${poiId}:`, error);
      return null;
    }
  }

  // Get POIs by state from Meilisearch
  async getPOIsByState(stateId: string): Promise<MeilisearchDocument[]> {
    try {
      console.log(`Fetching POIs for state: ${stateId}`);
      const results = await meilisearchService.searchWithFilters('', {
        state: stateId
      });
      console.log(`Found ${results.length} POIs for state: ${stateId}`);
      return results;
    } catch (error) {
      console.error(`Error fetching POIs for state ${stateId}:`, error);
      return [];
    }
  }

  // Get POIs by category from Meilisearch
  async getPOIsByCategory(category: string): Promise<MeilisearchDocument[]> {
    try {
      console.log(`Fetching POIs for category: ${category}`);
      const results = await meilisearchService.searchWithFilters('', {
        category: category
      });
      console.log(`Found ${results.length} POIs for category: ${category}`);
      return results;
    } catch (error) {
      console.error(`Error fetching POIs for category ${category}:`, error);
      return [];
    }
  }
}

// Export singleton instance
export const mapDataService = new MapDataService();
