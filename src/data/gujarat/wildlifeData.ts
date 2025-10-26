// Gujarat Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const girNationalParkData: KarnatakaPOI = {
  id: 'gir_national_park_gujarat',
  name: 'Gir National Park',
  category: 'wildlife',
  coordinates: { lat: 21.5226, lng: 70.4579 },
  description: 'Home to the Asiatic lions, the only place where they exist in the wild.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'Only home of Asiatic lions in the wild.', image_url: 'https://www.gujarattourism.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://www.gujarattourism.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris available for wildlife viewing.', image_url: 'https://www.gujarattourism.com/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://www.gujarattourism.com/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Asiatic Lions', description: 'Famous for Asiatic lion population.', image_url: 'https://www.gujarattourism.com/asiatic-lions.jpg', links: [{ title: 'Wildlife List', url: 'https://www.gujarattourism.com/wildlife-list' }] }] }
  }
};

export const marineNationalParkData: KarnatakaPOI = {
  id: 'marine_national_park_gujarat',
  name: 'Marine National Park',
  category: 'wildlife',
  coordinates: { lat: 22.4707, lng: 70.0577 },
  description: 'First marine national park in India, known for its coral reefs.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'First marine national park in India.', image_url: 'https://www.gujarattourism.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://www.gujarattourism.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Marine Tours', description: 'Boat tours available for marine life viewing.', image_url: 'https://www.gujarattourism.com/marine-tours.jpg', links: [{ title: 'Tour Booking', url: 'https://www.gujarattourism.com/tour-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Marine Life', description: 'Diverse marine life including coral reefs.', image_url: 'https://www.gujarattourism.com/marine-life.jpg', links: [{ title: 'Species List', url: 'https://www.gujarattourism.com/species-list' }] }] }
  }
};

export default [girNationalParkData, marineNationalParkData];
