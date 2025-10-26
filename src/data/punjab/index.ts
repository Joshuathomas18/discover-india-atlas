// Comprehensive Punjab Data
import { KarnatakaPOI } from '../../types/database';
import chandigarhData, { ludhianaData, amritsarData } from './placesData';
import punjabMajorCitiesData from './majorCities';
import punjabRiversData from './riversData';
import punjabMountainsData from './mountainsData';
import punjabWildlifeData from './wildlifeData';
import punjabForestsData from './forestsData';
import punjabWaterfallsData from './waterfallsData';
import punjabDamsData from './damsData';

export const allPunjabData: KarnatakaPOI[] = [
  chandigarhData, ludhianaData, amritsarData,
  ...punjabMajorCitiesData,
  ...punjabRiversData,
  ...punjabMountainsData,
  ...punjabWildlifeData,
  ...punjabForestsData,
  ...punjabWaterfallsData,
  ...punjabDamsData
];

export {
  chandigarhData, ludhianaData, amritsarData,
  punjabMajorCitiesData,
  punjabRiversData,
  punjabMountainsData,
  punjabWildlifeData,
  punjabForestsData,
  punjabWaterfallsData,
  punjabDamsData
};

export default allPunjabData;

