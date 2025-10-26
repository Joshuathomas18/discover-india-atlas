// Comprehensive Telangana Data
import { KarnatakaPOI } from '../../types/database';
import hyderabadData, { warangalData, nizamabadData } from './placesData';
import telanganaMajorCitiesData from './majorCities';
import telanganaRiversData from './riversData';
import telanganaMountainsData from './mountainsData';
import telanganaWildlifeData from './wildlifeData';
import telanganaForestsData from './forestsData';
import telanganaWaterfallsData from './waterfallsData';
import telanganaDamsData from './damsData';

export const allTelanganaData: KarnatakaPOI[] = [
  hyderabadData, warangalData, nizamabadData,
  ...telanganaMajorCitiesData,
  ...telanganaRiversData,
  ...telanganaMountainsData,
  ...telanganaWildlifeData,
  ...telanganaForestsData,
  ...telanganaWaterfallsData,
  ...telanganaDamsData
];

export {
  hyderabadData, warangalData, nizamabadData,
  telanganaMajorCitiesData,
  telanganaRiversData,
  telanganaMountainsData,
  telanganaWildlifeData,
  telanganaForestsData,
  telanganaWaterfallsData,
  telanganaDamsData
};

export default allTelanganaData;

