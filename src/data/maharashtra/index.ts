// Comprehensive Maharashtra Data
// All POI categories for Maharashtra state

import { KarnatakaPOI } from '../../types/database';
import mumbaiData, { puneData, nagpurData } from './placesData';
import maharashtraMajorCitiesData from './majorCities';
import maharashtraRiversData from './riversData';
import maharashtraMountainsData from './mountainsData';
import maharashtraWildlifeData from './wildlifeData';
import maharashtraForestsData from './forestsData';
import maharashtraWaterfallsData from './waterfallsData';
import maharashtraDamsData from './damsData';

// Combine all Maharashtra POI data
export const allMaharashtraData: KarnatakaPOI[] = [
  // Places
  mumbaiData,
  puneData,
  nagpurData,
  ...maharashtraMajorCitiesData,
  
  // Rivers
  ...maharashtraRiversData,
  
  // Mountains
  ...maharashtraMountainsData,
  
  // Wildlife Sanctuaries
  ...maharashtraWildlifeData,
  
  // Forests
  ...maharashtraForestsData,
  
  // Waterfalls
  ...maharashtraWaterfallsData,
  
  // Dams
  ...maharashtraDamsData
];

// Export individual categories for easy access
export {
  mumbaiData,
  puneData,
  nagpurData,
  maharashtraMajorCitiesData,
  maharashtraRiversData,
  maharashtraMountainsData,
  maharashtraWildlifeData,
  maharashtraForestsData,
  maharashtraWaterfallsData,
  maharashtraDamsData
};

export default allMaharashtraData;

