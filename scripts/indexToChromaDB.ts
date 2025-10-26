import { config } from 'dotenv';

// Load environment variables from .env file
config({ path: '.env' });

console.log('Environment check:');
console.log('VITE_GEMINI_API_KEY:', process.env.VITE_GEMINI_API_KEY ? '***' + process.env.VITE_GEMINI_API_KEY.slice(-4) : 'undefined');

import { ChromaClient } from 'chromadb';
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
 * Main ChromaDB indexing function
 */
async function indexToChromaDB(): Promise<void> {
  try {
    console.log('🚀 Starting ChromaDB indexing...');
    
    // Create embedding service after env vars are loaded
    const { embeddingService } = await import('../src/services/embeddingService');
    console.log('✅ Embedding service created');
    
    // Initialize ChromaDB client
    const chromaUrl = process.env.VITE_CHROMADB_URL || 'http://localhost:8000';
    const client = new ChromaClient({ path: chromaUrl });
    
    // Create or get collection
    const collectionName = 'india_tourism_embeddings';
    let collection;
    
    try {
      collection = await client.getCollection({ name: collectionName });
      console.log(`📚 Using existing collection: ${collectionName}`);
    } catch (error) {
      console.log(`📚 Creating new collection: ${collectionName}`);
      collection = await client.createCollection({
        name: collectionName,
        metadata: {
          description: 'India tourism POI embeddings for RAG system',
          created_at: new Date().toISOString()
        }
      });
    }
    
    // Clear existing data
    console.log('🗑️ Clearing existing data...');
    await collection.delete({ where: {} });
    
    let totalDocuments = 0;
    const batchSize = 50; // Process in batches to avoid memory issues
    
    // Process each state
    for (const [stateId, stateData] of Object.entries(stateDataMap)) {
      console.log(`📊 Processing ${stateId}...`);
      const stateName = getStateName(stateId);
      
      // Process POIs in batches
      for (let i = 0; i < stateData.length; i += batchSize) {
        const batch = stateData.slice(i, i + batchSize);
        console.log(`  Processing batch ${Math.floor(i / batchSize) + 1} (${batch.length} POIs)...`);
        
        // Generate embeddings for this batch
        const embeddingsData = await embeddingService.generateEmbeddingsForPOIs(batch);
        
        // Prepare data for ChromaDB
        const ids: string[] = [];
        const embeddings: number[][] = [];
        const metadatas: any[] = [];
        const documents: string[] = [];
        
        embeddingsData.forEach(({ poi, textChunk, embedding }) => {
          ids.push(`${poi.category}_${poi.id}`);
          embeddings.push(embedding);
          documents.push(textChunk);
          metadatas.push({
            doc_id: `${poi.category}_${poi.id}`,
            poi_id: poi.id,
            name: poi.name,
            category: poi.category,
            state: stateName,
            state_id: stateId,
            city: poi.city || '',
            coordinates: JSON.stringify(poi.coordinates),
            banner_image: poi.banner_image || '',
            created_at: new Date().toISOString()
          });
        });
        
        // Add batch to ChromaDB
        if (ids.length > 0) {
          await collection.add({
            ids,
            embeddings,
            metadatas,
            documents
          });
          
          totalDocuments += ids.length;
          console.log(`  ✅ Added ${ids.length} documents to ChromaDB`);
        }
      }
      
      console.log(`✅ Processed ${stateId}: ${stateData.length} POIs`);
    }
    
    // Get collection stats
    const count = await collection.count();
    console.log('📈 Collection stats:', { totalDocuments: count });
    
    console.log('🎉 ChromaDB indexing completed successfully!');
    console.log(`📊 Total documents indexed: ${totalDocuments}`);
    
  } catch (error) {
    console.error('❌ ChromaDB indexing failed:', error);
    process.exit(1);
  }
}

// Run the indexing if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  indexToChromaDB();
}

export { indexToChromaDB };
