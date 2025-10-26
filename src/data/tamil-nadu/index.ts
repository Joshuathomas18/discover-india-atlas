// Comprehensive Tamil Nadu Data
// All POI categories for Tamil Nadu state

import { KarnatakaPOI } from '../../types/database';
import chennaiData, { maduraiData, coimbatoreData } from './placesData';
import tamilNaduMajorCitiesData from './majorCities';
import tamilNaduRiversData from './riversData';
import tamilNaduMountainsData from './mountainsData';
import tamilNaduWildlifeData from './wildlifeData';
import tamilNaduForestsData from './forestsData';
import tamilNaduWaterfallsData from './waterfallsData';
import tamilNaduDamsData from './damsData';

// Combine all Tamil Nadu POI data
export const allTamilNaduData: KarnatakaPOI[] = [
  // Places
  chennaiData,
  maduraiData,
  coimbatoreData,
  ...tamilNaduMajorCitiesData,
  
  // Rivers
  ...tamilNaduRiversData,
  
  // Mountains
  ...tamilNaduMountainsData,
  
  // Wildlife Sanctuaries
  ...tamilNaduWildlifeData,
  
  // Forests
  ...tamilNaduForestsData,
  
  // Waterfalls
  ...tamilNaduWaterfallsData,
  
  // Dams
  ...tamilNaduDamsData
];

// Export individual categories for easy access
export {
  chennaiData,
  maduraiData,
  coimbatoreData,
  tamilNaduMajorCitiesData,
  tamilNaduRiversData,
  tamilNaduMountainsData,
  tamilNaduWildlifeData,
  tamilNaduForestsData,
  tamilNaduWaterfallsData,
  tamilNaduDamsData
};

export default allTamilNaduData;

