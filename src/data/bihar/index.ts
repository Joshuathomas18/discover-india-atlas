// Comprehensive Bihar Data
import { KarnatakaPOI } from '../../types/database';
import patnaData, { gayaData, muzaffarpurData } from './placesData';
import biharMajorCitiesData from './majorCities';
import biharRiversData from './riversData';
import biharMountainsData from './mountainsData';
import biharWildlifeData from './wildlifeData';
import biharForestsData from './forestsData';
import biharWaterfallsData from './waterfallsData';
import biharDamsData from './damsData';

export const allBiharData: KarnatakaPOI[] = [
  patnaData, gayaData, muzaffarpurData,
  ...biharMajorCitiesData,
  ...biharRiversData,
  ...biharMountainsData,
  ...biharWildlifeData,
  ...biharForestsData,
  ...biharWaterfallsData,
  ...biharDamsData
];

export {
  patnaData, gayaData, muzaffarpurData,
  biharMajorCitiesData,
  biharRiversData,
  biharMountainsData,
  biharWildlifeData,
  biharForestsData,
  biharWaterfallsData,
  biharDamsData
};

export default allBiharData;

