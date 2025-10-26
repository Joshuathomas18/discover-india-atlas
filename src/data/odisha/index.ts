// Comprehensive Odisha Data
import { KarnatakaPOI } from '../../types/database';
import bhubaneswarData, { puriData, cuttackData } from './placesData';
import odishaMajorCitiesData from './majorCities';
import odishaRiversData from './riversData';
import odishaMountainsData from './mountainsData';
import odishaWildlifeData from './wildlifeData';
import odishaForestsData from './forestsData';
import odishaWaterfallsData from './waterfallsData';
import odishaDamsData from './damsData';

export const allOdishaData: KarnatakaPOI[] = [
  bhubaneswarData, puriData, cuttackData,
  ...odishaMajorCitiesData,
  ...odishaRiversData,
  ...odishaMountainsData,
  ...odishaWildlifeData,
  ...odishaForestsData,
  ...odishaWaterfallsData,
  ...odishaDamsData
];

export {
  bhubaneswarData, puriData, cuttackData,
  odishaMajorCitiesData,
  odishaRiversData,
  odishaMountainsData,
  odishaWildlifeData,
  odishaForestsData,
  odishaWaterfallsData,
  odishaDamsData
};

export default allOdishaData;

