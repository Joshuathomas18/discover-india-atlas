// Comprehensive Jharkhand Data
import { KarnatakaPOI } from '../../types/database';
import ranchiData, { jamshedpurData, dhanbadData } from './placesData';
import jharkhandMajorCitiesData from './majorCities';
import jharkhandRiversData from './riversData';
import jharkhandMountainsData from './mountainsData';
import jharkhandWildlifeData from './wildlifeData';
import jharkhandForestsData from './forestsData';
import jharkhandWaterfallsData from './waterfallsData';
import jharkhandDamsData from './damsData';

export const allJharkhandData: KarnatakaPOI[] = [
  ranchiData, jamshedpurData, dhanbadData,
  ...jharkhandMajorCitiesData,
  ...jharkhandRiversData,
  ...jharkhandMountainsData,
  ...jharkhandWildlifeData,
  ...jharkhandForestsData,
  ...jharkhandWaterfallsData,
  ...jharkhandDamsData
];

export {
  ranchiData, jamshedpurData, dhanbadData,
  jharkhandMajorCitiesData,
  jharkhandRiversData,
  jharkhandMountainsData,
  jharkhandWildlifeData,
  jharkhandForestsData,
  jharkhandWaterfallsData,
  jharkhandDamsData
};

export default allJharkhandData;

