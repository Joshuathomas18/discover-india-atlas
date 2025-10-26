// Test Link Replacement for Karnataka Monuments
// Focused approach to test the link replacement system

import { linkReplacementService, PlaceInfo } from '../src/services/linkReplacementService';

// Test with specific Karnataka monuments
const testPlaces: PlaceInfo[] = [
  {
    name: 'Bangalore Palace',
    state: 'Karnataka',
    category: 'monument',
    coordinates: { lat: 12.9988, lng: 77.5925 },
    description: 'Historic palace built in Tudor-style architecture'
  },
  {
    name: 'Mysore Palace',
    state: 'Karnataka', 
    category: 'monument',
    coordinates: { lat: 12.3051, lng: 76.6552 },
    description: 'Magnificent palace of the Wodeyar dynasty'
  },
  {
    name: 'Hampi',
    state: 'Karnataka',
    category: 'monument',
    coordinates: { lat: 15.3350, lng: 76.4600 },
    description: 'UNESCO World Heritage Site with ancient ruins'
  },
  {
    name: 'Gol Gumbaz',
    state: 'Karnataka',
    category: 'monument', 
    coordinates: { lat: 17.3297, lng: 76.8343 },
    description: 'Famous mausoleum with whispering gallery'
  }
];

async function testLinkReplacement() {
  console.log('🧪 Testing Link Replacement System');
  console.log('================================');
  
  for (const place of testPlaces) {
    console.log(`\n🔍 Processing: ${place.name}`);
    
    try {
      // Test different link categories
      const ticketLinks = await linkReplacementService.findRealLinks(place, 'tickets');
      const virtualTourLinks = await linkReplacementService.findRealLinks(place, 'virtual_tour');
      const officialLinks = await linkReplacementService.findRealLinks(place, 'official_website');
      
      console.log(`  🎫 Ticket links: ${ticketLinks.length}`);
      ticketLinks.forEach(link => {
        console.log(`    - ${link.newUrl} (confidence: ${(link.confidence * 100).toFixed(1)}%)`);
      });
      
      console.log(`  🏛️ Virtual tour links: ${virtualTourLinks.length}`);
      virtualTourLinks.forEach(link => {
        console.log(`    - ${link.newUrl} (confidence: ${(link.confidence * 100).toFixed(1)}%)`);
      });
      
      console.log(`  🏛️ Official links: ${officialLinks.length}`);
      officialLinks.forEach(link => {
        console.log(`    - ${link.newUrl} (confidence: ${(link.confidence * 100).toFixed(1)}%)`);
      });
      
      // Add delay between places
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.error(`  ❌ Error processing ${place.name}:`, error);
    }
  }
  
  // Show final stats
  const stats = linkReplacementService.getStats();
  console.log('\n📊 Final Statistics:');
  console.log(`Total places processed: ${stats.totalCached}`);
  console.log(`Average confidence: ${(stats.averageConfidence * 100).toFixed(1)}%`);
  console.log('Categories found:', stats.categoriesFound);
}

// Run the test
testLinkReplacement()
  .then(() => {
    console.log('\n✅ Test completed successfully!');
  })
  .catch(error => {
    console.error('❌ Test failed:', error);
  });

