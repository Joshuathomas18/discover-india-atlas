// Comprehensive Uttar Pradesh Data
// All POI categories for Uttar Pradesh state

import { KarnatakaPOI } from '../../types/database';
import lucknowData, { agraData, varanasiData } from './placesData';
import uttarPradeshMajorCitiesData from './majorCities';
import uttarPradeshRiversData from './riversData';
import uttarPradeshMountainsData from './mountainsData';
import uttarPradeshWildlifeData from './wildlifeData';
import uttarPradeshForestsData from './forestsData';
import uttarPradeshWaterfallsData from './waterfallsData';
import uttarPradeshDamsData from './damsData';

// Combine all Uttar Pradesh POI data
export const allUttarPradeshData: KarnatakaPOI[] = [
  // Places
  lucknowData,
  agraData,
  varanasiData,
  ...uttarPradeshMajorCitiesData,
  
  // Rivers
  ...uttarPradeshRiversData,
  
  // Mountains
  ...uttarPradeshMountainsData,
  
  // Wildlife Sanctuaries
  ...uttarPradeshWildlifeData,
  
  // Forests
  ...uttarPradeshForestsData,
  
  // Waterfalls
  ...uttarPradeshWaterfallsData,
  
  // Dams
  ...uttarPradeshDamsData
];

// Export individual categories for easy access
export {
  lucknowData,
  agraData,
  varanasiData,
  uttarPradeshMajorCitiesData,
  uttarPradeshRiversData,
  uttarPradeshMountainsData,
  uttarPradeshWildlifeData,
  uttarPradeshForestsData,
  uttarPradeshWaterfallsData,
  uttarPradeshDamsData
};

export default allUttarPradeshData;

