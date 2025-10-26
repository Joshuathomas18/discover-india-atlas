// Comprehensive Himachal Pradesh Data
import { KarnatakaPOI } from '../../types/database';
import shimlaData, { manaliData, dharamshalaData } from './placesData';
import himachalPradeshMajorCitiesData from './majorCities';
import himachalPradeshRiversData from './riversData';
import himachalPradeshMountainsData from './mountainsData';
import himachalPradeshWildlifeData from './wildlifeData';
import himachalPradeshForestsData from './forestsData';
import himachalPradeshWaterfallsData from './waterfallsData';
import himachalPradeshDamsData from './damsData';

export const allHimachalPradeshData: KarnatakaPOI[] = [
  shimlaData, manaliData, dharamshalaData,
  ...himachalPradeshMajorCitiesData,
  ...himachalPradeshRiversData,
  ...himachalPradeshMountainsData,
  ...himachalPradeshWildlifeData,
  ...himachalPradeshForestsData,
  ...himachalPradeshWaterfallsData,
  ...himachalPradeshDamsData
];

export {
  shimlaData, manaliData, dharamshalaData,
  himachalPradeshMajorCitiesData,
  himachalPradeshRiversData,
  himachalPradeshMountainsData,
  himachalPradeshWildlifeData,
  himachalPradeshForestsData,
  himachalPradeshWaterfallsData,
  himachalPradeshDamsData
};

export default allHimachalPradeshData;

