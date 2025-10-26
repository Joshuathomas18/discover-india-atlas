// Comprehensive Gujarat Data
import { KarnatakaPOI } from '../../types/database';
import ahmedabadData, { vadodaraData, suratData } from './placesData';
import gujaratMajorCitiesData from './majorCities';
import gujaratRiversData from './riversData';
import gujaratMountainsData from './mountainsData';
import gujaratWildlifeData from './wildlifeData';
import gujaratForestsData from './forestsData';
import gujaratWaterfallsData from './waterfallsData';
import gujaratDamsData from './damsData';

export const allGujaratData: KarnatakaPOI[] = [
  ahmedabadData, vadodaraData, suratData,
  ...gujaratMajorCitiesData,
  ...gujaratRiversData,
  ...gujaratMountainsData,
  ...gujaratWildlifeData,
  ...gujaratForestsData,
  ...gujaratWaterfallsData,
  ...gujaratDamsData
];

export {
  ahmedabadData, vadodaraData, suratData,
  gujaratMajorCitiesData,
  gujaratRiversData,
  gujaratMountainsData,
  gujaratWildlifeData,
  gujaratForestsData,
  gujaratWaterfallsData,
  gujaratDamsData
};

export default allGujaratData;

