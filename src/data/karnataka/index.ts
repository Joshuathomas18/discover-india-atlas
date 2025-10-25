// Comprehensive Karnataka Data
// All POI categories for Karnataka state

import { KarnatakaPOI } from '../../types/database';
import bengaluruData, { mysoreData, mangaloreData } from './placesData';
import additionalCitiesData from './additionalCities';
import karnatakaRiversData from './riversData';
import karnatakaMountainsData from './mountainsData';
import karnatakaWildlifeData from './wildlifeData';
import karnatakaForestsData from './forestsData';
import karnatakaWaterfallsData from './waterfallsData';
import karnatakaDamsData from './damsData';

// Combine all Karnataka POI data
export const allKarnatakaData: KarnatakaPOI[] = [
  // Places
  bengaluruData,
  mysoreData,
  mangaloreData,
  ...additionalCitiesData,
  
  // Rivers
  ...karnatakaRiversData,
  
  // Mountains
  ...karnatakaMountainsData,
  
  // Wildlife Sanctuaries
  ...karnatakaWildlifeData,
  
  // Forests
  ...karnatakaForestsData,
  
  // Waterfalls
  ...karnatakaWaterfallsData,
  
  // Dams
  ...karnatakaDamsData
];

// Export individual categories for easy access
export {
  bengaluruData,
  mysoreData,
  mangaloreData,
  karnatakaRiversData,
  karnatakaMountainsData,
  karnatakaWildlifeData,
  karnatakaForestsData,
  karnatakaWaterfallsData,
  karnatakaDamsData
};

export default allKarnatakaData;
