// Comprehensive Madhya Pradesh Data
import { KarnatakaPOI } from '../../types/database';
import bhopalData, { indoreData, gwaliorData } from './placesData';
import madhyaPradeshMajorCitiesData from './majorCities';
import madhyaPradeshRiversData from './riversData';
import madhyaPradeshMountainsData from './mountainsData';
import madhyaPradeshWildlifeData from './wildlifeData';
import madhyaPradeshForestsData from './forestsData';
import madhyaPradeshWaterfallsData from './waterfallsData';
import madhyaPradeshDamsData from './damsData';

export const allMadhyaPradeshData: KarnatakaPOI[] = [
  bhopalData, indoreData, gwaliorData,
  ...madhyaPradeshMajorCitiesData,
  ...madhyaPradeshRiversData,
  ...madhyaPradeshMountainsData,
  ...madhyaPradeshWildlifeData,
  ...madhyaPradeshForestsData,
  ...madhyaPradeshWaterfallsData,
  ...madhyaPradeshDamsData
];

export {
  bhopalData, indoreData, gwaliorData,
  madhyaPradeshMajorCitiesData,
  madhyaPradeshRiversData,
  madhyaPradeshMountainsData,
  madhyaPradeshWildlifeData,
  madhyaPradeshForestsData,
  madhyaPradeshWaterfallsData,
  madhyaPradeshDamsData
};

export default allMadhyaPradeshData;

