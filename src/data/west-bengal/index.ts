// Comprehensive West Bengal Data
import { KarnatakaPOI } from '../../types/database';
import kolkataData, { darjeelingData, siliguriData } from './placesData';
import westBengalMajorCitiesData from './majorCities';
import westBengalRiversData from './riversData';
import westBengalMountainsData from './mountainsData';
import westBengalWildlifeData from './wildlifeData';
import westBengalForestsData from './forestsData';
import westBengalWaterfallsData from './waterfallsData';
import westBengalDamsData from './damsData';

export const allWestBengalData: KarnatakaPOI[] = [
  kolkataData, darjeelingData, siliguriData,
  ...westBengalMajorCitiesData,
  ...westBengalRiversData,
  ...westBengalMountainsData,
  ...westBengalWildlifeData,
  ...westBengalForestsData,
  ...westBengalWaterfallsData,
  ...westBengalDamsData
];

export {
  kolkataData, darjeelingData, siliguriData,
  westBengalMajorCitiesData,
  westBengalRiversData,
  westBengalMountainsData,
  westBengalWildlifeData,
  westBengalForestsData,
  westBengalWaterfallsData,
  westBengalDamsData
};

export default allWestBengalData;

