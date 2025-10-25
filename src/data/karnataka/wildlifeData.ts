// Karnataka Wildlife Sanctuaries Data
// Comprehensive data for major wildlife sanctuaries in Karnataka with 3 tabs each

import { KarnatakaPOI, WildlifeTabs, ImageReference } from '../../types/database';

export const bandipurData: KarnatakaPOI = {
  id: 'bandipur_national_park',
  name: 'Bandipur National Park',
  category: 'wildlife',
  description: 'Famous tiger reserve and national park, part of Nilgiri Biosphere Reserve',
  coordinates: { lat: 11.6667, lng: 76.6167 },
  banner_image: {
    storage_path: 'karnataka/wildlife/bandipur/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Bandipur National Park - Tiger Reserve',
    credit: 'Unsplash',
    alt_text: 'Bandipur National Park with tiger in natural habitat',
    uploaded_at: new Date()
  },
  icon_type: 'tiger',
  created_at: new Date(),
  tabs: {
    facts: 'Bandipur National Park is one of India\'s most famous tiger reserves, established in 1974 as part of Project Tiger. It covers an area of 874 sq km and is part of the Nilgiri Biosphere Reserve. The park is known for its high tiger density and is home to over 100 tigers. It was once the private hunting ground of the Maharaja of Mysore. The park is located in the Chamarajanagar district of Karnataka and shares its boundaries with Mudumalai National Park in Tamil Nadu.',
    visiting_info: 'Bandipur National Park offers various safari options including jeep safaris, bus safaris, and elephant safaris. Safari timings: Morning 6:00 AM - 9:00 AM, Evening 3:00 PM - 6:00 PM. Entry fees: INR 200 (Indians), INR 1,000 (foreigners) for jeep safari. Accommodation options include forest lodges, resorts, and homestays. Best time to visit is from October to May. Advance booking is recommended for safaris. The park is closed during monsoon season (June-September).',
    animals_found: [
      'Bengal Tiger',
      'Indian Elephant',
      'Leopard',
      'Gaur (Indian Bison)',
      'Sambar Deer',
      'Spotted Deer',
      'Wild Boar',
      'Sloth Bear',
      'Wild Dog',
      'Mongoose',
      'Peacock',
      'Jungle Fowl',
      'Various species of birds and reptiles'
    ]
  } as WildlifeTabs
};

export const nagarholeData: KarnatakaPOI = {
  id: 'nagarhole_national_park',
  name: 'Nagarhole National Park',
  category: 'wildlife',
  description: 'Rajiv Gandhi National Park, known for elephants and rich wildlife',
  coordinates: { lat: 12.0000, lng: 76.1667 },
  banner_image: {
    storage_path: 'karnataka/wildlife/nagarhole/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Nagarhole National Park - Elephant Paradise',
    credit: 'Unsplash',
    alt_text: 'Nagarhole National Park with elephants in natural habitat',
    uploaded_at: new Date()
  },
  icon_type: 'elephant',
  created_at: new Date(),
  tabs: {
    facts: 'Nagarhole National Park, also known as Rajiv Gandhi National Park, is located in the Kodagu and Mysore districts of Karnataka. It covers an area of 643 sq km and is part of the Nilgiri Biosphere Reserve. The park is famous for its large elephant population and is considered one of the best places to spot elephants in India. It was established as a wildlife sanctuary in 1955 and upgraded to a national park in 1988. The park is named after the Nagarhole stream that flows through it.',
    visiting_info: 'Nagarhole offers jeep safaris, bus safaris, and boat safaris. Safari timings: Morning 6:00 AM - 9:00 AM, Evening 3:00 PM - 6:00 PM. Entry fees: INR 200 (Indians), INR 1,000 (foreigners) for jeep safari. Boat safari is available on the Kabini River. Accommodation options include forest lodges, resorts, and luxury tented camps. Best time to visit is from October to May. The park is closed during monsoon season (June-September). Advance booking is recommended.',
    animals_found: [
      'Indian Elephant',
      'Bengal Tiger',
      'Leopard',
      'Gaur (Indian Bison)',
      'Sambar Deer',
      'Spotted Deer',
      'Wild Boar',
      'Sloth Bear',
      'Wild Dog',
      'Mongoose',
      'Peacock',
      'Jungle Fowl',
      'Various species of birds and reptiles'
    ]
  } as WildlifeTabs
};

export const bannerghattaData: KarnatakaPOI = {
  id: 'bannerghatta_national_park',
  name: 'Bannerghatta National Park',
  category: 'wildlife',
  description: 'Wildlife sanctuary near Bengaluru with safari and zoo',
  coordinates: { lat: 12.8000, lng: 77.5667 },
  banner_image: {
    storage_path: 'karnataka/wildlife/bannerghatta/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Bannerghatta National Park',
    credit: 'Unsplash',
    alt_text: 'Bannerghatta National Park with lions',
    uploaded_at: new Date()
  },
  icon_type: 'lion',
  created_at: new Date(),
  tabs: {
    facts: 'Bannerghatta National Park is located near Bengaluru and covers an area of 104 sq km. It was established in 1971 and is famous for its safari park, zoo, and butterfly park. The park is home to various wildlife species and offers a unique experience of seeing animals in their natural habitat.',
    visiting_info: 'The park offers safari rides, zoo visits, and butterfly park tours. Safari timings: 9:00 AM - 5:00 PM. Entry fees: INR 80 (adults), INR 40 (children). Safari charges: INR 200 (adults), INR 100 (children). Best time to visit is from October to March.',
    animals_found: [
      'Lion',
      'Tiger',
      'Leopard',
      'Bear',
      'Deer',
      'Various birds',
      'Butterflies'
    ]
  } as WildlifeTabs
};

export const dandeliData: KarnatakaPOI = {
  id: 'dandeli_wildlife_sanctuary',
  name: 'Dandeli Wildlife Sanctuary',
  category: 'wildlife',
  description: 'Famous for hornbills and adventure activities',
  coordinates: { lat: 15.2667, lng: 74.6167 },
  banner_image: {
    storage_path: 'karnataka/wildlife/dandeli/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Dandeli Wildlife Sanctuary',
    credit: 'Unsplash',
    alt_text: 'Dandeli Wildlife Sanctuary with hornbills',
    uploaded_at: new Date()
  },
  icon_type: 'hornbill',
  created_at: new Date(),
  tabs: {
    facts: 'Dandeli Wildlife Sanctuary is located in the Uttara Kannada district and covers an area of 834 sq km. It is famous for its hornbill population and is a popular destination for adventure activities like white water rafting, kayaking, and jungle safaris.',
    visiting_info: 'The sanctuary offers jeep safaris, boat rides, and adventure activities. Safari timings: 6:00 AM - 9:00 AM, 3:00 PM - 6:00 PM. Entry fees: INR 200 (Indians), INR 1,000 (foreigners). Best time to visit is from October to May.',
    animals_found: [
      'Hornbill',
      'Tiger',
      'Leopard',
      'Elephant',
      'Gaur',
      'Deer',
      'Wild Boar',
      'Various birds'
    ]
  } as WildlifeTabs
};

export const karnatakaWildlifeData = [
  bandipurData,
  nagarholeData,
  bannerghattaData,
  dandeliData
];

export default karnatakaWildlifeData;
