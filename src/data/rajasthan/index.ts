// Comprehensive Rajasthan Data
// All POI categories for Rajasthan state

import { KarnatakaPOI } from '../../types/database';
import jaipurData, { udaipurData, jodhpurData } from './placesData';
import rajasthanMajorCitiesData from './majorCities';
import rajasthanRiversData from './riversData';
import rajasthanMountainsData from './mountainsData';
import rajasthanWildlifeData from './wildlifeData';
import rajasthanForestsData from './forestsData';
import rajasthanWaterfallsData from './waterfallsData';
import rajasthanDamsData from './damsData';

// Combine all Rajasthan POI data
export const allRajasthanData: KarnatakaPOI[] = [
  // Places
  jaipurData,
  udaipurData,
  jodhpurData,
  ...rajasthanMajorCitiesData,
  
  // Rivers
  ...rajasthanRiversData,
  
  // Mountains
  ...rajasthanMountainsData,
  
  // Wildlife Sanctuaries
  ...rajasthanWildlifeData,
  
  // Forests
  ...rajasthanForestsData,
  
  // Waterfalls
  ...rajasthanWaterfallsData,
  
  // Dams
  ...rajasthanDamsData
];

// Export individual categories for easy access
export {
  jaipurData,
  udaipurData,
  jodhpurData,
  rajasthanMajorCitiesData,
  rajasthanRiversData,
  rajasthanMountainsData,
  rajasthanWildlifeData,
  rajasthanForestsData,
  rajasthanWaterfallsData,
  rajasthanDamsData
};

export default allRajasthanData;

