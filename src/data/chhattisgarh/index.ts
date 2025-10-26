// Comprehensive Chhattisgarh Data
import { KarnatakaPOI } from '../../types/database';
import raipurData, { bilaspurData, durgData } from './placesData';
import chhattisgarhMajorCitiesData from './majorCities';
import chhattisgarhRiversData from './riversData';
import chhattisgarhMountainsData from './mountainsData';
import chhattisgarhWildlifeData from './wildlifeData';
import chhattisgarhForestsData from './forestsData';
import chhattisgarhWaterfallsData from './waterfallsData';
import chhattisgarhDamsData from './damsData';

export const allChhattisgarhData: KarnatakaPOI[] = [
  raipurData, bilaspurData, durgData,
  ...chhattisgarhMajorCitiesData,
  ...chhattisgarhRiversData,
  ...chhattisgarhMountainsData,
  ...chhattisgarhWildlifeData,
  ...chhattisgarhForestsData,
  ...chhattisgarhWaterfallsData,
  ...chhattisgarhDamsData
];

export {
  raipurData, bilaspurData, durgData,
  chhattisgarhMajorCitiesData,
  chhattisgarhRiversData,
  chhattisgarhMountainsData,
  chhattisgarhWildlifeData,
  chhattisgarhForestsData,
  chhattisgarhWaterfallsData,
  chhattisgarhDamsData
};

export default allChhattisgarhData;

