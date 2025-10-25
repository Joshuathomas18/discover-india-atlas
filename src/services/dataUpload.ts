import { databaseService } from './database';
import { imageCollectionService } from './imageCollection';
import { dataValidationService } from './dataValidation';
import type { State, Place, CulturalItem } from '../types/database';

// Data Upload Service for India Cultural Atlas

export class DataUploadService {
  
  // Upload state data with banner image
  async uploadState(stateData: Omit<State, 'id' | 'created_at' | 'updated_at' | 'banner_image'>, bannerImageUrl: string): Promise<string> {
    try {
      // Validate state data
      const validation = dataValidationService.validateState(stateData);
      if (!validation.isValid) {
        throw new Error(`State validation failed: ${validation.errors.join(', ')}`);
      }
      
      // Upload banner image
      const bannerImage = await imageCollectionService.uploadBannerImage(
        bannerImageUrl,
        'state',
        stateData.id,
        `${stateData.name} banner`,
        'Collected from web'
      );
      
      // Add banner image to state data
      const completeStateData = {
        ...stateData,
        banner_image: bannerImage
      };
      
      // Upload to database
      const stateId = await databaseService.addState(completeStateData);
      console.log(`✅ State uploaded: ${stateData.name} (ID: ${stateId})`);
      
      return stateId;
      
    } catch (error) {
      console.error(`❌ Failed to upload state ${stateData.name}:`, error);
      throw error;
    }
  }

  // Upload place data with banner image
  async uploadPlace(placeData: Omit<Place, 'id' | 'created_at' | 'updated_at' | 'banner_image'>, bannerImageUrl: string): Promise<string> {
    try {
      // Validate place data
      const validation = dataValidationService.validatePlace(placeData);
      if (!validation.isValid) {
        throw new Error(`Place validation failed: ${validation.errors.join(', ')}`);
      }
      
      // Upload banner image
      const bannerImage = await imageCollectionService.uploadBannerImage(
        bannerImageUrl,
        'place',
        placeData.id,
        `${placeData.name} banner`,
        'Collected from web'
      );
      
      // Add banner image to place data
      const completePlaceData = {
        ...placeData,
        banner_image: bannerImage
      };
      
      // Upload to database
      const placeId = await databaseService.addPlace(completePlaceData);
      console.log(`✅ Place uploaded: ${placeData.name} (ID: ${placeId})`);
      
      return placeId;
      
    } catch (error) {
      console.error(`❌ Failed to upload place ${placeData.name}:`, error);
      throw error;
    }
  }

  // Upload cultural item with images
  async uploadCulturalItem(
    itemData: Omit<CulturalItem, 'id' | 'created_at' | 'updated_at' | 'images'>,
    placeName: string,
    stateName: string
  ): Promise<string> {
    try {
      // Validate cultural item data
      const validation = dataValidationService.validateCulturalItem(itemData);
      if (!validation.isValid) {
        throw new Error(`Cultural item validation failed: ${validation.errors.join(', ')}`);
      }
      
      // Process and upload images
      const images = await imageCollectionService.processCulturalItemImages(
        {
          id: itemData.id,
          name: itemData.name,
          place_id: itemData.place_id,
          state_id: itemData.state_id,
          category: itemData.category
        },
        placeName,
        stateName
      );
      
      if (images.length === 0) {
        console.warn(`⚠️ No images found for ${itemData.name}, using placeholder`);
        // Add placeholder images if none found
        images.push({
          storage_path: 'placeholder.jpg',
          download_url: 'https://via.placeholder.com/800x600?text=Image+Not+Available',
          caption: 'Image not available',
          credit: 'Placeholder',
          alt_text: 'Placeholder image',
          uploaded_at: new Date()
        });
      }
      
      // Add images to item data
      const completeItemData = {
        ...itemData,
        images: images
      };
      
      // Upload to database
      const itemId = await databaseService.addCulturalItem(completeItemData);
      console.log(`✅ Cultural item uploaded: ${itemData.name} (ID: ${itemId}) with ${images.length} images`);
      
      return itemId;
      
    } catch (error) {
      console.error(`❌ Failed to upload cultural item ${itemData.name}:`, error);
      throw error;
    }
  }

  // Batch upload all data for a state
  async uploadStateData(stateData: {
    state: Omit<State, 'id' | 'created_at' | 'updated_at' | 'banner_image'>;
    bannerImageUrl: string;
    places: Array<{
      place: Omit<Place, 'id' | 'created_at' | 'updated_at' | 'banner_image'>;
      bannerImageUrl: string;
      culturalItems: Array<{
        item: Omit<CulturalItem, 'id' | 'created_at' | 'updated_at' | 'images'>;
      }>;
    }>;
  }): Promise<{
    stateId: string;
    placeIds: string[];
    itemIds: string[];
  }> {
    const result = {
      stateId: '',
      placeIds: [] as string[],
      itemIds: [] as string[]
    };
    
    try {
      console.log(`🚀 Starting upload for state: ${stateData.state.name}`);
      
      // Upload state
      result.stateId = await this.uploadState(stateData.state, stateData.bannerImageUrl);
      
      // Upload places and their cultural items
      for (const placeData of stateData.places) {
        const placeId = await this.uploadPlace(placeData.place, placeData.bannerImageUrl);
        result.placeIds.push(placeId);
        
        // Upload cultural items for this place
        for (const itemData of placeData.culturalItems) {
          const itemId = await this.uploadCulturalItem(
            itemData.item,
            placeData.place.name,
            stateData.state.name
          );
          result.itemIds.push(itemId);
        }
      }
      
      console.log(`✅ State upload completed: ${stateData.state.name}`);
      console.log(`   - State: 1`);
      console.log(`   - Places: ${result.placeIds.length}`);
      console.log(`   - Cultural Items: ${result.itemIds.length}`);
      
    } catch (error) {
      console.error(`❌ State upload failed for ${stateData.state.name}:`, error);
      throw error;
    }
    
    return result;
  }

  // Upload sample Rajasthan data (migrate from existing JSON)
  async uploadRajasthanSampleData(): Promise<void> {
    try {
      console.log('🚀 Starting Rajasthan sample data upload...');
      
      // Rajasthan state data
      const rajasthanState = {
        id: 'rajasthan',
        name: 'Rajasthan',
        capital: 'Jaipur',
        description: 'The Land of Kings - Rajasthan is known for its royal heritage, magnificent forts, palaces, vibrant culture, and desert landscapes.',
        coordinates: { lat: 27.0238, lng: 74.2179 },
        best_time_to_visit: 'October to March',
        languages: ['Hindi', 'Rajasthani'],
        population: '68.5 million',
        area_sq_km: 342239
      };
      
      // Jaipur place data
      const jaipurPlace = {
        id: 'jaipur_rajasthan',
        state_id: 'rajasthan',
        name: 'Jaipur',
        type: 'city' as const,
        nickname: 'The Pink City',
        description: 'Jaipur, the capital of Rajasthan, is famous for its pink-colored buildings, magnificent palaces, and rich cultural heritage.',
        coordinates: { lat: 26.9124, lng: 75.7873 },
        population: '3.1 million',
        best_time_to_visit: 'October to March',
        how_to_reach: {
          by_air: 'Jaipur International Airport',
          by_train: 'Jaipur Junction Railway Station',
          by_road: 'NH 8, NH 11, NH 12'
        }
      };
      
      // Sample cultural items for Jaipur
      const amberFortItem = {
        id: 'amber_fort_jaipur',
        place_id: 'jaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'monuments' as const,
        name: 'Amber Fort',
        description: 'Majestic hilltop fort with stunning architecture',
        details: 'Amber Fort is a UNESCO World Heritage Site known for its artistic Hindu style elements. Built in 1592 by Raja Man Singh I, the fort features the magnificent Sheesh Mahal (Mirror Palace) with intricate mirror work, Diwan-e-Aam (Hall of Public Audience), and offers elephant rides to the entrance. The fort showcases a perfect blend of Hindu and Mughal architecture.',
        coordinates: { lat: 26.9855, lng: 75.8513 },
        actions: {
          primary: {
            label: 'Buy Tickets',
            type: 'external_link' as const,
            url: 'https://www.rajasthantourism.gov.in/attractions/forts-palaces/amber-fort'
          },
          secondary: {
            label: 'Virtual Tour',
            type: 'modal' as const,
            content: 'Experience a 360° virtual tour of Amber Fort\'s magnificent halls, courtyards, and the famous Sheesh Mahal with its thousands of mirrors.'
          }
        },
        opening_hours: '9:00 AM - 5:30 PM',
        entry_fee: 'INR 500 (foreigners), INR 100 (Indians)',
        best_time: 'Early morning or late afternoon',
        duration: '2-3 hours'
      };
      
      // Upload state
      const stateId = await this.uploadState(rajasthanState, 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920');
      
      // Upload place
      const placeId = await this.uploadPlace(jaipurPlace, 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920');
      
      // Upload cultural item
      const itemId = await this.uploadCulturalItem(amberFortItem, 'Jaipur', 'Rajasthan');
      
      console.log('✅ Rajasthan sample data uploaded successfully!');
      console.log(`   - State ID: ${stateId}`);
      console.log(`   - Place ID: ${placeId}`);
      console.log(`   - Cultural Item ID: ${itemId}`);
      
    } catch (error) {
      console.error('❌ Rajasthan sample data upload failed:', error);
      throw error;
    }
  }

  // Validate entire database
  async validateDatabase(): Promise<void> {
    try {
      console.log('🔍 Starting database validation...');
      
      const validationResult = await dataValidationService.validateDatabase();
      const report = dataValidationService.generateValidationReport(validationResult);
      
      console.log(report);
      
      // Save report to file
      const fs = require('fs');
      fs.writeFileSync('validation-report.txt', report);
      console.log('📄 Validation report saved to validation-report.txt');
      
    } catch (error) {
      console.error('❌ Database validation failed:', error);
      throw error;
    }
  }

  // Get database statistics
  async getDatabaseStats(): Promise<void> {
    try {
      const stats = await databaseService.getDatabaseStats();
      
      console.log('📊 DATABASE STATISTICS');
      console.log('====================');
      console.log(`States: ${stats.total_states}`);
      console.log(`Places: ${stats.total_places}`);
      console.log(`Cultural Items: ${stats.total_cultural_items}`);
      console.log(`Images: ${stats.total_images}`);
      console.log('====================');
      
    } catch (error) {
      console.error('❌ Failed to get database stats:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const dataUploadService = new DataUploadService();
