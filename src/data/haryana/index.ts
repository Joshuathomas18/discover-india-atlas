// Comprehensive Haryana Data
import { KarnatakaPOI } from '../../types/database';
import gurgaonData, { faridabadData, panipatData } from './placesData';
import haryanaMajorCitiesData from './majorCities';
import haryanaRiversData from './riversData';
import haryanaMountainsData from './mountainsData';
import haryanaWildlifeData from './wildlifeData';
import haryanaForestsData from './forestsData';
import haryanaWaterfallsData from './waterfallsData';
import haryanaDamsData from './damsData';

export const allHaryanaData: KarnatakaPOI[] = [
  gurgaonData, faridabadData, panipatData,
  ...haryanaMajorCitiesData,
  ...haryanaRiversData,
  ...haryanaMountainsData,
  ...haryanaWildlifeData,
  ...haryanaForestsData,
  ...haryanaWaterfallsData,
  ...haryanaDamsData
];

export {
  gurgaonData, faridabadData, panipatData,
  haryanaMajorCitiesData,
  haryanaRiversData,
  haryanaMountainsData,
  haryanaWildlifeData,
  haryanaForestsData,
  haryanaWaterfallsData,
  haryanaDamsData
};

export default allHaryanaData;

