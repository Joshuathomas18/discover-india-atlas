// Sikkim Index - Combine all POI data
import { KarnatakaPOI } from '../../types/database';
import placesData from './placesData';
import majorCities from './majorCities';
import riversData from './riversData';
import mountainsData from './mountainsData';
import wildlifeData from './wildlifeData';
import forestsData from './forestsData';
import waterfallsData from './waterfallsData';
import damsData from './damsData';

export const allSikkimData: KarnatakaPOI[] = [
  ...placesData,
  ...majorCities,
  ...riversData,
  ...mountainsData,
  ...wildlifeData,
  ...forestsData,
  ...waterfallsData,
  ...damsData
];

export default allSikkimData;

