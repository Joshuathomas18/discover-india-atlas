// Comprehensive Goa Data
// All POI categories for Goa state

import { KarnatakaPOI } from '../../types/database';
import panajiData, { margaoData, vascoDaGamaData } from './placesData';
import goaMajorCitiesData from './majorCities';
import goaRiversData from './riversData';
import goaMountainsData from './mountainsData';
import goaWildlifeData from './wildlifeData';
import goaForestsData from './forestsData';
import goaWaterfallsData from './waterfallsData';
import goaDamsData from './damsData';

// Combine all Goa POI data
export const allGoaData: KarnatakaPOI[] = [
  // Places
  panajiData,
  margaoData,
  vascoDaGamaData,
  ...goaMajorCitiesData,
  
  // Rivers
  ...goaRiversData,
  
  // Mountains
  ...goaMountainsData,
  
  // Wildlife Sanctuaries
  ...goaWildlifeData,
  
  // Forests
  ...goaForestsData,
  
  // Waterfalls
  ...goaWaterfallsData,
  
  // Dams
  ...goaDamsData
];

// Export individual categories for easy access
export {
  panajiData,
  margaoData,
  vascoDaGamaData,
  goaMajorCitiesData,
  goaRiversData,
  goaMountainsData,
  goaWildlifeData,
  goaForestsData,
  goaWaterfallsData,
  goaDamsData
};

export default allGoaData;

