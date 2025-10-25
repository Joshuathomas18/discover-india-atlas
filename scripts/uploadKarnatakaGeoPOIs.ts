#!/usr/bin/env tsx

/**
 * Upload Karnataka Geographical POIs to Firebase
 * This script uploads the comprehensive Karnataka POI dataset to Firestore
 */

import { databaseService } from '../src/services/database';
import { karnatakaGeoPOIs } from '../src/data/karnatakaGeoPOIs';
import { GeographicalPOI } from '../src/types/database';

async function uploadKarnatakaPOIs() {
  console.log('🚀 Starting Karnataka Geographical POIs upload...');
  
  try {
    let successCount = 0;
    let errorCount = 0;
    
    console.log(`📊 Found ${karnatakaGeoPOIs.length} POIs to upload`);
    
    // Upload each POI
    for (const poi of karnatakaGeoPOIs) {
      try {
        console.log(`📤 Uploading POI: ${poi.name} (${poi.category})`);
        
        // Convert to the format expected by database service
        const poiData: Omit<GeographicalPOI, 'id'> = {
          state_id: poi.state_id,
          name: poi.name,
          category: poi.category,
          description: poi.description,
          coordinates: poi.coordinates,
          elevation: poi.elevation,
          length_km: poi.length_km,
          area_sq_km: poi.area_sq_km,
          species: poi.species,
          height_m: poi.height_m,
          capacity_mcm: poi.capacity_mcm,
          icon_color: poi.icon_color,
          created_at: poi.created_at
        };
        
        const docId = await databaseService.addGeographicalPOI(poiData);
        console.log(`✅ Successfully uploaded ${poi.name} with ID: ${docId}`);
        successCount++;
        
        // Small delay to avoid overwhelming Firebase
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`❌ Error uploading ${poi.name}:`, error);
        errorCount++;
      }
    }
    
    console.log('\n📈 Upload Summary:');
    console.log(`✅ Successfully uploaded: ${successCount} POIs`);
    console.log(`❌ Failed uploads: ${errorCount} POIs`);
    console.log(`📊 Total processed: ${successCount + errorCount} POIs`);
    
    if (errorCount === 0) {
      console.log('🎉 All Karnataka POIs uploaded successfully!');
    } else {
      console.log(`⚠️  ${errorCount} POIs failed to upload. Check the errors above.`);
    }
    
  } catch (error) {
    console.error('💥 Fatal error during upload:', error);
    process.exit(1);
  }
}

async function getDatabaseStats() {
  try {
    console.log('📊 Getting database statistics...');
    const stats = await databaseService.getDatabaseStats();
    console.log('Database Stats:', stats);
    
    // Get POI count specifically
    const karnatakaPOIs = await databaseService.getGeographicalPOIsByState('karnataka');
    console.log(`Karnataka POIs in database: ${karnatakaPOIs.length}`);
    
    // Get POI count by category
    const categories = ['city', 'river', 'mountain', 'wildlife_sanctuary', 'forest', 'waterfall', 'dam'];
    for (const category of categories) {
      const categoryPOIs = await databaseService.getGeographicalPOIsByCategory('karnataka', category as any);
      console.log(`${category}: ${categoryPOIs.length} POIs`);
    }
    
  } catch (error) {
    console.error('Error getting database stats:', error);
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--stats')) {
    await getDatabaseStats();
  } else if (args.includes('--upload')) {
    await uploadKarnatakaPOIs();
  } else {
    console.log('Usage:');
    console.log('  npm run upload:karnataka-pois -- --upload    # Upload Karnataka POIs');
    console.log('  npm run upload:karnataka-pois -- --stats     # Show database stats');
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Run the main function
main().catch(console.error);
