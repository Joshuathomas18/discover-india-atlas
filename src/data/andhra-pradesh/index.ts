// Comprehensive Andhra Pradesh Data
import { KarnatakaPOI } from '../../types/database';
import visakhapatnamData, { vijayawadaData, tirupatiData } from './placesData';
import andhraPradeshMajorCitiesData from './majorCities';
import andhraPradeshRiversData from './riversData';
import andhraPradeshMountainsData from './mountainsData';
import andhraPradeshWildlifeData from './wildlifeData';
import andhraPradeshForestsData from './forestsData';
import andhraPradeshWaterfallsData from './waterfallsData';
import andhraPradeshDamsData from './damsData';

export const allAndhraPradeshData: KarnatakaPOI[] = [
  visakhapatnamData, vijayawadaData, tirupatiData,
  ...andhraPradeshMajorCitiesData,
  ...andhraPradeshRiversData,
  ...andhraPradeshMountainsData,
  ...andhraPradeshWildlifeData,
  ...andhraPradeshForestsData,
  ...andhraPradeshWaterfallsData,
  ...andhraPradeshDamsData
];

export {
  visakhapatnamData, vijayawadaData, tirupatiData,
  andhraPradeshMajorCitiesData,
  andhraPradeshRiversData,
  andhraPradeshMountainsData,
  andhraPradeshWildlifeData,
  andhraPradeshForestsData,
  andhraPradeshWaterfallsData,
  andhraPradeshDamsData
};

export default allAndhraPradeshData;

