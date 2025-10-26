// Comprehensive Uttarakhand Data
import { KarnatakaPOI } from '../../types/database';
import dehradunData, { haridwarData, rishikeshData } from './placesData';
import uttarakhandMajorCitiesData from './majorCities';
import uttarakhandRiversData from './riversData';
import uttarakhandMountainsData from './mountainsData';
import uttarakhandWildlifeData from './wildlifeData';
import uttarakhandForestsData from './forestsData';
import uttarakhandWaterfallsData from './waterfallsData';
import uttarakhandDamsData from './damsData';

export const allUttarakhandData: KarnatakaPOI[] = [
  dehradunData, haridwarData, rishikeshData,
  ...uttarakhandMajorCitiesData,
  ...uttarakhandRiversData,
  ...uttarakhandMountainsData,
  ...uttarakhandWildlifeData,
  ...uttarakhandForestsData,
  ...uttarakhandWaterfallsData,
  ...uttarakhandDamsData
];

export {
  dehradunData, haridwarData, rishikeshData,
  uttarakhandMajorCitiesData,
  uttarakhandRiversData,
  uttarakhandMountainsData,
  uttarakhandWildlifeData,
  uttarakhandForestsData,
  uttarakhandWaterfallsData,
  uttarakhandDamsData
};

export default allUttarakhandData;

