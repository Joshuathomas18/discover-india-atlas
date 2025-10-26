import { config } from 'dotenv';

// Load environment variables from .env file
config({ path: '.env' });

console.log('Environment check:');
console.log('VITE_MEILISEARCH_URL:', process.env.VITE_MEILISEARCH_URL);
console.log('VITE_MEILISEARCH_KEY:', process.env.VITE_MEILISEARCH_KEY);
console.log('All env vars:', Object.keys(process.env).filter(key => key.startsWith('VITE_')));

import { MeilisearchDocument } from '../src/services/meilisearchService';
import { KarnatakaPOI } from '../src/types/database';

// Import all state data
import { allKarnatakaData } from '../src/data/karnataka/index';
import { allRajasthanData } from '../src/data/rajasthan/index';
import { allKeralaData } from '../src/data/kerala/index';
import { allGoaData } from '../src/data/goa/index';
import { allTamilNaduData } from '../src/data/tamil-nadu/index';
import { allMaharashtraData } from '../src/data/maharashtra/index';
import { allUttarPradeshData } from '../src/data/uttar-pradesh/index';
import { allHimachalPradeshData } from '../src/data/himachal-pradesh/index';
import { allUttarakhandData } from '../src/data/uttarakhand/index';
import { allGujaratData } from '../src/data/gujarat/index';
import { allWestBengalData } from '../src/data/west-bengal/index';
import { allAndhraPradeshData } from '../src/data/andhra-pradesh/index';
import { allTelanganaData } from '../src/data/telangana/index';
import { allOdishaData } from '../src/data/odisha/index';
import { allAssamData } from '../src/data/assam/index';
import { allPunjabData } from '../src/data/punjab/index';
import { allHaryanaData } from '../src/data/haryana/index';
import { allMadhyaPradeshData } from '../src/data/madhya-pradesh/index';
import { allChhattisgarhData } from '../src/data/chhattisgarh/index';
import { allJharkhandData } from '../src/data/jharkhand/index';
import { allBiharData } from '../src/data/bihar/index';
import { allSikkimData } from '../src/data/sikkim/index';
import { allMeghalayaData } from '../src/data/meghalaya/index';
import { allManipurData } from '../src/data/manipur/index';
import { allDelhiData } from '../src/data/delhi/index';
import { allChandigarhData } from '../src/data/chandigarh/index';
import { allPuducherryData } from '../src/data/puducherry/index';
import { allLakshadweepData } from '../src/data/lakshadweep/index';
import { allAndamanNicobarData } from '../src/data/andaman-nicobar/index';
import { allDadraNagarHaveliDamanDiuData } from '../src/data/dadra-nagar-haveli-daman-diu/index';
import { allJammuKashmirData } from '../src/data/jammu-kashmir/index';
import { allLadakhData } from '../src/data/ladakh/index';

// State mapping
const stateDataMap = {
  'karnataka': allKarnatakaData,
  'rajasthan': allRajasthanData,
  'kerala': allKeralaData,
  'goa': allGoaData,
  'tamil-nadu': allTamilNaduData,
  'maharashtra': allMaharashtraData,
  'uttar-pradesh': allUttarPradeshData,
  'himachal-pradesh': allHimachalPradeshData,
  'uttarakhand': allUttarakhandData,
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
};

/**
 * Transform KarnatakaPOI to MeilisearchDocument
 */
function transformPOIToDocument(poi: KarnatakaPOI, stateId: string, stateName: string): MeilisearchDocument[] {
  const documents: MeilisearchDocument[] = [];
  
  // Create a base document for the POI
  const baseDoc: MeilisearchDocument = {
    id: `${poi.category}_${poi.id}`,
    name: poi.name,
    type: getTypeFromCategory(poi.category),
    state: stateName,
    city: poi.city || undefined,
    coordinates: poi.coordinates,
    tags: generateTags(poi),
    description_short: poi.description ? poi.description.substring(0, 200) + '...' : 'No description available',
    description_long: poi.description || 'No description available',
    banner_image: poi.banner_image,
    category: poi.category,
    state_id: stateId
  };

  documents.push(baseDoc);

  // For places, create additional documents for each cultural category
  if (poi.category === 'place' && poi.tabs) {
    const placeTabs = poi.tabs as any; // Type assertion for place tabs
    
    if (placeTabs.monuments) {
      // Handle Karnataka-style tabs (arrays)
      if (Array.isArray(placeTabs.monuments)) {
        placeTabs.monuments.forEach((monument: any, index: number) => {
          documents.push({
            id: `monument_${poi.id}_${index}`,
            name: monument.title,
            type: 'Monument',
            state: stateName,
            city: poi.city || undefined,
            coordinates: poi.coordinates,
            tags: ['Monument', poi.city || '', stateName],
            description_short: monument.description ? monument.description.substring(0, 200) + '...' : 'Historical monument',
            description_long: monument.description || 'Historical monument',
            banner_image: monument.image_url,
            category: 'monument',
            state_id: stateId
          });
        });
      }
      // Handle Tamil Nadu-style tabs (objects with content arrays)
      else if (placeTabs.monuments.content && Array.isArray(placeTabs.monuments.content)) {
        placeTabs.monuments.content.forEach((monument: any, index: number) => {
          documents.push({
            id: `monument_${poi.id}_${index}`,
            name: monument.title,
            type: 'Monument',
            state: stateName,
            city: poi.city || undefined,
            coordinates: poi.coordinates,
            tags: ['Monument', poi.city || '', stateName],
            description_short: monument.description ? monument.description.substring(0, 200) + '...' : 'Historical monument',
            description_long: monument.description || 'Historical monument',
            banner_image: monument.image_url,
            category: 'monument',
            state_id: stateId
          });
        });
      }
    }

    if (placeTabs.food) {
      // Handle Karnataka-style tabs (arrays)
      if (Array.isArray(placeTabs.food)) {
        placeTabs.food.forEach((food: any, index: number) => {
          documents.push({
            id: `food_${poi.id}_${index}`,
            name: food.title,
            type: 'Food',
            state: stateName,
            city: poi.city || undefined,
            coordinates: poi.coordinates,
            tags: ['Food', poi.city || '', stateName],
            description_short: food.description ? food.description.substring(0, 200) + '...' : 'Local cuisine',
            description_long: food.description || 'Local cuisine',
            banner_image: food.image_url,
            category: 'food',
            state_id: stateId
          });
        });
      }
      // Handle Tamil Nadu-style tabs (objects with content arrays)
      else if (placeTabs.food.content && Array.isArray(placeTabs.food.content)) {
        placeTabs.food.content.forEach((food: any, index: number) => {
          documents.push({
            id: `food_${poi.id}_${index}`,
            name: food.title,
            type: 'Food',
            state: stateName,
            city: poi.city || undefined,
            coordinates: poi.coordinates,
            tags: ['Food', poi.city || '', stateName],
            description_short: food.description ? food.description.substring(0, 200) + '...' : 'Local cuisine',
            description_long: food.description || 'Local cuisine',
            banner_image: food.image_url,
            category: 'food',
            state_id: stateId
          });
        });
      }
    }

    if (placeTabs.festivals) {
      // Handle Karnataka-style tabs (arrays)
      if (Array.isArray(placeTabs.festivals)) {
        placeTabs.festivals.forEach((festival: any, index: number) => {
          documents.push({
            id: `festival_${poi.id}_${index}`,
            name: festival.title,
            type: 'Festival',
            state: stateName,
            city: poi.city || undefined,
            coordinates: poi.coordinates,
            tags: ['Festival', poi.city || '', stateName],
            description_short: festival.description ? festival.description.substring(0, 200) + '...' : 'Cultural festival',
            description_long: festival.description || 'Cultural festival',
            banner_image: festival.image_url,
            category: 'festival',
            state_id: stateId
          });
        });
      }
      // Handle Tamil Nadu-style tabs (objects with content arrays)
      else if (placeTabs.festivals.content && Array.isArray(placeTabs.festivals.content)) {
        placeTabs.festivals.content.forEach((festival: any, index: number) => {
          documents.push({
            id: `festival_${poi.id}_${index}`,
            name: festival.title,
            type: 'Festival',
            state: stateName,
            city: poi.city || undefined,
            coordinates: poi.coordinates,
            tags: ['Festival', poi.city || '', stateName],
            description_short: festival.description ? festival.description.substring(0, 200) + '...' : 'Cultural festival',
            description_long: festival.description || 'Cultural festival',
            banner_image: festival.image_url,
            category: 'festival',
            state_id: stateId
          });
        });
      }
    }

    if (placeTabs.customs) {
      // Handle Karnataka-style tabs (arrays)
      if (Array.isArray(placeTabs.customs)) {
        placeTabs.customs.forEach((custom: any, index: number) => {
          documents.push({
            id: `custom_${poi.id}_${index}`,
            name: custom.title,
            type: 'Custom',
            state: stateName,
            city: poi.city || undefined,
            coordinates: poi.coordinates,
            tags: ['Custom', poi.city || '', stateName],
            description_short: custom.description ? custom.description.substring(0, 200) + '...' : 'Local custom',
            description_long: custom.description || 'Local custom',
            banner_image: custom.image_url,
            category: 'custom',
            state_id: stateId
          });
        });
      }
      // Handle Tamil Nadu-style tabs (objects with content arrays)
      else if (placeTabs.customs.content && Array.isArray(placeTabs.customs.content)) {
        placeTabs.customs.content.forEach((custom: any, index: number) => {
          documents.push({
            id: `custom_${poi.id}_${index}`,
            name: custom.title,
            type: 'Custom',
            state: stateName,
            city: poi.city || undefined,
            coordinates: poi.coordinates,
            tags: ['Custom', poi.city || '', stateName],
            description_short: custom.description ? custom.description.substring(0, 200) + '...' : 'Local custom',
            description_long: custom.description || 'Local custom',
            banner_image: custom.image_url,
            category: 'custom',
            state_id: stateId
          });
        });
      }
    }

    if (placeTabs.history) {
      // Handle Karnataka-style tabs (arrays)
      if (Array.isArray(placeTabs.history)) {
        placeTabs.history.forEach((history: any, index: number) => {
          documents.push({
            id: `history_${poi.id}_${index}`,
            name: history.title,
            type: 'Monument', // Treat history as monuments for search
            state: stateName,
            city: poi.city || undefined,
            coordinates: poi.coordinates,
            tags: ['History', poi.city || '', stateName],
            description_short: history.description ? history.description.substring(0, 200) + '...' : 'Historical information',
            description_long: history.description || 'Historical information',
            banner_image: history.image_url,
            category: 'history',
            state_id: stateId
          });
        });
      }
      // Handle Tamil Nadu-style tabs (objects with content arrays)
      else if (placeTabs.history.content && Array.isArray(placeTabs.history.content)) {
        placeTabs.history.content.forEach((history: any, index: number) => {
          documents.push({
            id: `history_${poi.id}_${index}`,
            name: history.title,
            type: 'Monument', // Treat history as monuments for search
            state: stateName,
            city: poi.city || undefined,
            coordinates: poi.coordinates,
            tags: ['History', poi.city || '', stateName],
            description_short: history.description ? history.description.substring(0, 200) + '...' : 'Historical information',
            description_long: history.description || 'Historical information',
            banner_image: history.image_url,
            category: 'history',
            state_id: stateId
          });
        });
      }
    }
  }

  return documents;
}

/**
 * Get type from category
 */
function getTypeFromCategory(category: string): MeilisearchDocument['type'] {
  const typeMap: Record<string, MeilisearchDocument['type']> = {
    'place': 'City',
    'river': 'River',
    'mountain': 'Mountain',
    'wildlife': 'Wildlife',
    'forest': 'Forest',
    'waterfall': 'Waterfall',
    'dam': 'Dam'
  };
  
  return typeMap[category] || 'City';
}

/**
 * Generate tags for a POI
 */
function generateTags(poi: KarnatakaPOI): string[] {
  const tags = [poi.category, poi.name];
  
  if (poi.city) {
    tags.push(poi.city);
  }
  
  // Add category-specific tags
  switch (poi.category) {
    case 'place':
      tags.push('City', 'Urban', 'Cultural');
      break;
    case 'river':
      tags.push('Water', 'Nature', 'River');
      break;
    case 'mountain':
      tags.push('Nature', 'Mountain', 'Trekking');
      break;
    case 'wildlife':
      tags.push('Nature', 'Wildlife', 'Animals');
      break;
    case 'forest':
      tags.push('Nature', 'Forest', 'Trees');
      break;
    case 'waterfall':
      tags.push('Nature', 'Waterfall', 'Water');
      break;
    case 'dam':
      tags.push('Infrastructure', 'Water', 'Dam');
      break;
  }
  
  return tags;
}

/**
 * Get state name from state ID
 */
function getStateName(stateId: string): string {
  const stateNameMap: Record<string, string> = {
    'karnataka': 'Karnataka',
    'rajasthan': 'Rajasthan',
    'kerala': 'Kerala',
    'goa': 'Goa',
    'tamil-nadu': 'Tamil Nadu',
    'maharashtra': 'Maharashtra',
    'uttar-pradesh': 'Uttar Pradesh',
    'himachal-pradesh': 'Himachal Pradesh',
    'uttarakhand': 'Uttarakhand',
    'gujarat': 'Gujarat',
    'west-bengal': 'West Bengal',
    'andhra-pradesh': 'Andhra Pradesh',
    'telangana': 'Telangana',
    'odisha': 'Odisha',
    'assam': 'Assam',
    'punjab': 'Punjab',
    'haryana': 'Haryana',
    'madhya-pradesh': 'Madhya Pradesh',
    'chhattisgarh': 'Chhattisgarh',
    'jharkhand': 'Jharkhand',
    'bihar': 'Bihar',
    'sikkim': 'Sikkim',
    'meghalaya': 'Meghalaya',
    'manipur': 'Manipur',
    'delhi': 'Delhi',
    'chandigarh': 'Chandigarh',
    'puducherry': 'Puducherry',
    'lakshadweep': 'Lakshadweep',
    'andaman-nicobar': 'Andaman and Nicobar Islands',
    'dadra-nagar-haveli-daman-diu': 'Dadra and Nagar Haveli and Daman and Diu',
    'jammu-kashmir': 'Jammu and Kashmir',
    'ladakh': 'Ladakh'
  };
  
  return stateNameMap[stateId] || stateId;
}

/**
 * Main indexing function
 */
async function indexAllData(): Promise<void> {
  try {
    console.log('🚀 Starting Meilisearch indexing...');
    
    // Create a new service instance after env vars are loaded
    const { meilisearchService } = await import('../src/services/meilisearchService');
    const service = meilisearchService;
    
    // Initialize the index
    console.log('📋 Initializing Meilisearch index...');
    await service.initializeIndex();
    console.log('✅ Index initialized');
    
    // Clear existing data
    console.log('🗑️ Clearing existing data...');
    await service.clearIndex();
    console.log('✅ Data cleared');
    
    let totalDocuments = 0;
    const allDocuments: MeilisearchDocument[] = [];
    
    // Process each state
    for (const [stateId, stateData] of Object.entries(stateDataMap)) {
      console.log(`📊 Processing ${stateId}...`);
      const stateName = getStateName(stateId);
      
      for (const poi of stateData) {
        const documents = transformPOIToDocument(poi, stateId, stateName);
        allDocuments.push(...documents);
        totalDocuments += documents.length;
      }
      
      console.log(`✅ Processed ${stateId}: ${stateData.length} POIs`);
    }
    
    // Add all documents to Meilisearch
    console.log(`📤 Adding ${totalDocuments} documents to Meilisearch...`);
    await service.addDocuments(allDocuments);
    
    // Get stats
    const stats = await service.getStats();
    console.log('📈 Index stats:', stats);
    
    console.log('🎉 Meilisearch indexing completed successfully!');
    console.log(`📊 Total documents indexed: ${totalDocuments}`);
    
  } catch (error) {
    console.error('❌ Meilisearch indexing failed:', error);
    process.exit(1);
  }
}

// Run the indexing if this script is executed directly
console.log('🚀 Starting indexing process...');
indexAllData().catch(console.error);

export { indexAllData };
