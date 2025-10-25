import { databaseAdminService } from '../src/services/adminDatabase';
import keralaData from '../src/data/keralaData';
import goaData from '../src/data/goaData';
import tamilNaduData from '../src/data/tamilNaduData';
import karnatakaData from '../src/data/karnatakaData';
import maharashtraData from '../src/data/maharashtraData';
import uttarakhandData from '../src/data/uttarakhandData';
import himachalPradeshData from '../src/data/himachalPradeshData';

// Comprehensive Data Upload Script for Multiple States

async function uploadAllStatesData() {
  try {
    console.log('🚀 Starting comprehensive data upload for multiple states...');
    
    // Clear existing data (optional - comment out if you want to keep existing data)
    // console.log('⚠️ Clearing existing data...');
    // await databaseAdminService.clearAllData();
    
    // Upload Kerala data
    console.log('📊 Uploading Kerala state data...');
    await databaseAdminService.uploadStates([keralaData.state]);
    await databaseAdminService.uploadPlaces(keralaData.places);
    await databaseAdminService.uploadCulturalItems(keralaData.culturalItems);
    console.log('✅ Kerala data uploaded successfully!');
    
    // Upload Goa data
    console.log('📊 Uploading Goa state data...');
    await databaseAdminService.uploadStates([goaData.state]);
    await databaseAdminService.uploadPlaces(goaData.places);
    await databaseAdminService.uploadCulturalItems(goaData.culturalItems);
    console.log('✅ Goa data uploaded successfully!');
    
    // Upload Tamil Nadu data
    console.log('📊 Uploading Tamil Nadu state data...');
    await databaseAdminService.uploadStates([tamilNaduData.state]);
    await databaseAdminService.uploadPlaces(tamilNaduData.places);
    await databaseAdminService.uploadCulturalItems(tamilNaduData.culturalItems);
    console.log('✅ Tamil Nadu data uploaded successfully!');
    
    // Upload Karnataka data
    console.log('📊 Uploading Karnataka state data...');
    await databaseAdminService.uploadStates([karnatakaData.state]);
    await databaseAdminService.uploadPlaces(karnatakaData.places);
    await databaseAdminService.uploadCulturalItems(karnatakaData.culturalItems);
    console.log('✅ Karnataka data uploaded successfully!');
    
    // Upload Maharashtra data
    console.log('📊 Uploading Maharashtra state data...');
    await databaseAdminService.uploadStates([maharashtraData.state]);
    await databaseAdminService.uploadPlaces(maharashtraData.places);
    await databaseAdminService.uploadCulturalItems(maharashtraData.culturalItems);
    console.log('✅ Maharashtra data uploaded successfully!');
    
    // Upload Uttarakhand data
    console.log('📊 Uploading Uttarakhand state data...');
    await databaseAdminService.uploadStates([uttarakhandData.state]);
    await databaseAdminService.uploadPlaces(uttarakhandData.places);
    await databaseAdminService.uploadCulturalItems(uttarakhandData.culturalItems);
    console.log('✅ Uttarakhand data uploaded successfully!');
    
    // Upload Himachal Pradesh data
    console.log('📊 Uploading Himachal Pradesh state data...');
    await databaseAdminService.uploadStates([himachalPradeshData.state]);
    await databaseAdminService.uploadPlaces(himachalPradeshData.places);
    await databaseAdminService.uploadCulturalItems(himachalPradeshData.culturalItems);
    console.log('✅ Himachal Pradesh data uploaded successfully!');
    
    // Get final statistics
    const stats = await databaseAdminService.getStats();
    console.log('📈 Final database statistics:');
    console.log(`   - States: ${stats.states}`);
    console.log(`   - Places: ${stats.places}`);
    console.log(`   - Cultural Items: ${stats.cultural_items}`);
    
    console.log('🎉 All states data upload completed successfully!');
    
  } catch (error) {
    console.error('❌ Data upload failed:', error);
    throw error;
  }
}

// Individual state upload functions
async function uploadKeralaOnly() {
  try {
    console.log('🚀 Uploading Kerala data only...');
    await databaseAdminService.uploadStates([keralaData.state]);
    await databaseAdminService.uploadPlaces(keralaData.places);
    await databaseAdminService.uploadCulturalItems(keralaData.culturalItems);
    console.log('✅ Kerala data uploaded successfully!');
  } catch (error) {
    console.error('❌ Kerala upload failed:', error);
    throw error;
  }
}

async function uploadGoaOnly() {
  try {
    console.log('🚀 Uploading Goa data only...');
    await databaseAdminService.uploadStates([goaData.state]);
    await databaseAdminService.uploadPlaces(goaData.places);
    await databaseAdminService.uploadCulturalItems(goaData.culturalItems);
    console.log('✅ Goa data uploaded successfully!');
  } catch (error) {
    console.error('❌ Goa upload failed:', error);
    throw error;
  }
}

async function uploadTamilNaduOnly() {
  try {
    console.log('🚀 Uploading Tamil Nadu data only...');
    await databaseAdminService.uploadStates([tamilNaduData.state]);
    await databaseAdminService.uploadPlaces(tamilNaduData.places);
    await databaseAdminService.uploadCulturalItems(tamilNaduData.culturalItems);
    console.log('✅ Tamil Nadu data uploaded successfully!');
  } catch (error) {
    console.error('❌ Tamil Nadu upload failed:', error);
    throw error;
  }
}

async function uploadKarnatakaOnly() {
  try {
    console.log('🚀 Uploading Karnataka data only...');
    await databaseAdminService.uploadStates([karnatakaData.state]);
    await databaseAdminService.uploadPlaces(karnatakaData.places);
    await databaseAdminService.uploadCulturalItems(karnatakaData.culturalItems);
    console.log('✅ Karnataka data uploaded successfully!');
  } catch (error) {
    console.error('❌ Karnataka upload failed:', error);
    throw error;
  }
}

async function uploadMaharashtraOnly() {
  try {
    console.log('🚀 Uploading Maharashtra data only...');
    await databaseAdminService.uploadStates([maharashtraData.state]);
    await databaseAdminService.uploadPlaces(maharashtraData.places);
    await databaseAdminService.uploadCulturalItems(maharashtraData.culturalItems);
    console.log('✅ Maharashtra data uploaded successfully!');
  } catch (error) {
    console.error('❌ Maharashtra upload failed:', error);
    throw error;
  }
}

async function uploadUttarakhandOnly() {
  try {
    console.log('🚀 Uploading Uttarakhand data only...');
    await databaseAdminService.uploadStates([uttarakhandData.state]);
    await databaseAdminService.uploadPlaces(uttarakhandData.places);
    await databaseAdminService.uploadCulturalItems(uttarakhandData.culturalItems);
    console.log('✅ Uttarakhand data uploaded successfully!');
  } catch (error) {
    console.error('❌ Uttarakhand upload failed:', error);
    throw error;
  }
}

async function uploadHimachalPradeshOnly() {
  try {
    console.log('🚀 Uploading Himachal Pradesh data only...');
    await databaseAdminService.uploadStates([himachalPradeshData.state]);
    await databaseAdminService.uploadPlaces(himachalPradeshData.places);
    await databaseAdminService.uploadCulturalItems(himachalPradeshData.culturalItems);
    console.log('✅ Himachal Pradesh data uploaded successfully!');
  } catch (error) {
    console.error('❌ Himachal Pradesh upload failed:', error);
    throw error;
  }
}

// Get database statistics
async function getDatabaseStats() {
  try {
    const stats = await databaseAdminService.getStats();
    console.log('📊 Current Database Statistics:');
    console.log(`   - States: ${stats.states}`);
    console.log(`   - Places: ${stats.places}`);
    console.log(`   - Cultural Items: ${stats.cultural_items}`);
    return stats;
  } catch (error) {
    console.error('❌ Failed to get stats:', error);
    throw error;
  }
}

// Run the upload based on command line arguments
const args = process.argv.slice(2);
const command = args[0] || 'all';

let uploadFunction;

switch (command) {
  case 'kerala':
    uploadFunction = uploadKeralaOnly;
    break;
  case 'goa':
    uploadFunction = uploadGoaOnly;
    break;
  case 'tamil-nadu':
    uploadFunction = uploadTamilNaduOnly;
    break;
  case 'karnataka':
    uploadFunction = uploadKarnatakaOnly;
    break;
  case 'maharashtra':
    uploadFunction = uploadMaharashtraOnly;
    break;
  case 'uttarakhand':
    uploadFunction = uploadUttarakhandOnly;
    break;
  case 'himachal-pradesh':
    uploadFunction = uploadHimachalPradeshOnly;
    break;
  case 'stats':
    uploadFunction = getDatabaseStats;
    break;
  case 'all':
  default:
    uploadFunction = uploadAllStatesData;
    break;
}

uploadFunction()
  .then(() => {
    console.log('🎉 Process completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Process failed:', error);
    process.exit(1);
  });

export { 
  uploadAllStatesData, 
  uploadKeralaOnly, 
  uploadGoaOnly, 
  uploadTamilNaduOnly,
  uploadKarnatakaOnly,
  uploadMaharashtraOnly,
  uploadUttarakhandOnly,
  uploadHimachalPradeshOnly,
  getDatabaseStats 
};
