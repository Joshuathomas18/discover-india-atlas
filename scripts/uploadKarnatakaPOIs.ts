#!/usr/bin/env tsx

/**
 * Upload Karnataka POI Data Script
 * Uploads comprehensive Karnataka POI data to Firebase Firestore
 */

import { AdminDatabaseService } from '../src/services/adminDatabase';
import { allKarnatakaData } from '../src/data/karnataka';
import { getKarnatakaPOIIcon } from '../src/config/karnatakaPOIConfig';

const adminDb = new AdminDatabaseService();

async function uploadKarnatakaPOIs() {
  console.log('🚀 Starting Karnataka POI data upload...');
  
  try {
    let successCount = 0;
    let errorCount = 0;
    
    for (const poi of allKarnatakaData) {
      try {
        console.log(`📤 Uploading ${poi.name} (${poi.category})...`);
        
        // Add icon type based on category and name
        const iconType = getKarnatakaPOIIcon(poi.category, poi.name);
        
        const poiData = {
          ...poi,
          icon_type: iconType,
          created_at: new Date(),
          updated_at: new Date()
        };
        
        const docId = await adminDb.addKarnatakaPOI(poiData);
        console.log(`✅ Successfully uploaded ${poi.name} with ID: ${docId}`);
        successCount++;
        
        // Add small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`❌ Error uploading ${poi.name}:`, error);
        errorCount++;
      }
    }
    
    console.log('\n📊 Upload Summary:');
    console.log(`✅ Successfully uploaded: ${successCount} POIs`);
    console.log(`❌ Failed uploads: ${errorCount} POIs`);
    console.log(`📈 Total processed: ${allKarnatakaData.length} POIs`);
    
    if (errorCount === 0) {
      console.log('🎉 All Karnataka POI data uploaded successfully!');
    } else {
      console.log('⚠️ Some uploads failed. Please check the errors above.');
    }
    
  } catch (error) {
    console.error('💥 Fatal error during upload:', error);
    process.exit(1);
  }
}

async function getDatabaseStats() {
  console.log('📊 Getting Karnataka POI database statistics...');
  
  try {
    const allPOIs = await adminDb.getKarnatakaPOIs();
    
    const stats = {
      total: allPOIs.length,
      byCategory: {} as Record<string, number>
    };
    
    allPOIs.forEach(poi => {
      stats.byCategory[poi.category] = (stats.byCategory[poi.category] || 0) + 1;
    });
    
    console.log('\n📈 Karnataka POI Database Statistics:');
    console.log(`Total POIs: ${stats.total}`);
    console.log('\nBy Category:');
    Object.entries(stats.byCategory).forEach(([category, count]) => {
      console.log(`  ${category}: ${count}`);
    });
    
  } catch (error) {
    console.error('❌ Error getting database stats:', error);
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--stats')) {
    await getDatabaseStats();
  } else {
    await uploadKarnatakaPOIs();
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Run the script
main().catch(console.error);
