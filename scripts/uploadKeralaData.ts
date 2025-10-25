import { databaseAdminService } from '../src/services/adminDatabase';
import keralaData from '../src/data/keralaData';

// Kerala Data Upload Script
async function uploadKeralaData() {
  try {
    console.log('🚀 Starting Kerala data upload...');
    
    // Upload state data
    console.log('📊 Uploading Kerala state data...');
    await databaseAdminService.uploadStates([keralaData.state]);
    
    // Upload places data
    console.log('🏙️ Uploading Kerala places data...');
    await databaseAdminService.uploadPlaces(keralaData.places);
    
    // Upload cultural items data
    console.log('🎭 Uploading Kerala cultural items data...');
    await databaseAdminService.uploadCulturalItems(keralaData.culturalItems);
    
    // Get final statistics
    const stats = await databaseAdminService.getStats();
    console.log('📈 Final database statistics:');
    console.log(`   - States: ${stats.states}`);
    console.log(`   - Places: ${stats.places}`);
    console.log(`   - Cultural Items: ${stats.cultural_items}`);
    
    console.log('✅ Kerala data upload completed successfully!');
    
  } catch (error) {
    console.error('❌ Kerala data upload failed:', error);
    throw error;
  }
}

// Run the upload
if (require.main === module) {
  uploadKeralaData()
    .then(() => {
      console.log('🎉 Upload process completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Upload process failed:', error);
      process.exit(1);
    });
}

export { uploadKeralaData };
