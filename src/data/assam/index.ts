// Comprehensive Assam Data
import { KarnatakaPOI } from '../../types/database';
import guwahatiData, { dibrugarhData, jorhatData } from './placesData';
import assamMajorCitiesData from './majorCities';
import assamRiversData from './riversData';
import assamMountainsData from './mountainsData';
import assamWildlifeData from './wildlifeData';
import assamForestsData from './forestsData';
import assamWaterfallsData from './waterfallsData';
import assamDamsData from './damsData';

export const allAssamData: KarnatakaPOI[] = [
  guwahatiData, dibrugarhData, jorhatData,
  ...assamMajorCitiesData,
  ...assamRiversData,
  ...assamMountainsData,
  ...assamWildlifeData,
  ...assamForestsData,
  ...assamWaterfallsData,
  ...assamDamsData
];

export {
  guwahatiData, dibrugarhData, jorhatData,
  assamMajorCitiesData,
  assamRiversData,
  assamMountainsData,
  assamWildlifeData,
  assamForestsData,
  assamWaterfallsData,
  assamDamsData
};

export default allAssamData;

