// Comprehensive Kerala Data
// All POI categories for Kerala state

import { KarnatakaPOI } from '../../types/database';
import thiruvananthapuramData, { kochiData, kozhikodeData } from './placesData';
import keralaMajorCitiesData from './majorCities';
import keralaRiversData from './riversData';
import keralaMountainsData from './mountainsData';
import keralaWildlifeData from './wildlifeData';
import keralaForestsData from './forestsData';
import keralaWaterfallsData from './waterfallsData';
import keralaDamsData from './damsData';

// Combine all Kerala POI data
export const allKeralaData: KarnatakaPOI[] = [
  // Places
  thiruvananthapuramData,
  kochiData,
  kozhikodeData,
  ...keralaMajorCitiesData,
  
  // Rivers
  ...keralaRiversData,
  
  // Mountains
  ...keralaMountainsData,
  
  // Wildlife Sanctuaries
  ...keralaWildlifeData,
  
  // Forests
  ...keralaForestsData,
  
  // Waterfalls
  ...keralaWaterfallsData,
  
  // Dams
  ...keralaDamsData
];

// Export individual categories for easy access
export {
  thiruvananthapuramData,
  kochiData,
  kozhikodeData,
  keralaMajorCitiesData,
  keralaRiversData,
  keralaMountainsData,
  keralaWildlifeData,
  keralaForestsData,
  keralaWaterfallsData,
  keralaDamsData
};

export default allKeralaData;

