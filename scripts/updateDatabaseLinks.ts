// Database Link Updater Script
// Extracts places from database and updates them with real links

import { linkReplacementService, PlaceInfo } from '../services/linkReplacementService';
import { allKarnatakaData } from '../data/karnataka';

interface DatabasePlace {
  id: string;
  name: string;
  state: string;
  category: string;
  coordinates?: { lat: number; lng: number };
  description?: string;
}

class DatabaseLinkUpdater {
  private places: DatabasePlace[] = [];

  /**
   * Extract all places from the database
   */
  extractPlacesFromDatabase(): DatabasePlace[] {
    console.log('🔍 Extracting places from database...');
    
    const places: DatabasePlace[] = [];

    // Extract from Karnataka data (as example)
    allKarnatakaData.forEach(poi => {
      // Add the main POI
      places.push({
        id: poi.id,
        name: poi.name,
        state: poi.state_id,
        category: poi.category,
        coordinates: poi.coordinates,
        description: poi.description
      });

      // Extract cultural items from tabs
      if (poi.tabs) {
        Object.entries(poi.tabs).forEach(([tabType, items]) => {
          if (Array.isArray(items)) {
            items.forEach(item => {
              places.push({
                id: item.id,
                name: item.name,
                state: poi.state_id,
                category: `${poi.category}_${tabType}`,
                coordinates: item.coordinates,
                description: item.description
              });
            });
          }
        });
      }
    });

    console.log(`📊 Extracted ${places.length} places from database`);
    return places;
  }

  /**
   * Update database files with real links
   */
  async updateDatabaseWithRealLinks(): Promise<void> {
    console.log('🚀 Starting database link update process...');
    
    // Extract places
    const places = this.extractPlacesFromDatabase();
    
    // Convert to PlaceInfo format
    const placeInfos: PlaceInfo[] = places.map(place => ({
      name: place.name,
      state: place.state,
      category: place.category,
      coordinates: place.coordinates,
      description: place.description
    }));

    // Process in batches to avoid rate limiting
    const batchSize = 10;
    const batches = this.chunkArray(placeInfos, batchSize);
    
    console.log(`📦 Processing ${batches.length} batches of ${batchSize} places each`);

    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      console.log(`\n🔄 Processing batch ${i + 1}/${batches.length}`);
      
      try {
        const results = await linkReplacementService.batchProcessPlaces(batch);
        
        // Log results for this batch
        this.logBatchResults(results);
        
        // Add delay between batches
        if (i < batches.length - 1) {
          console.log('⏳ Waiting 5 seconds before next batch...');
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
        
      } catch (error) {
        console.error(`❌ Error processing batch ${i + 1}:`, error);
      }
    }

    // Show final statistics
    this.showFinalStats();
  }

  /**
   * Log results for a batch
   */
  private logBatchResults(results: Map<string, LinkReplacement[]>): void {
    let totalReplacements = 0;
    const categoryCounts: Record<string, number> = {};

    for (const [placeKey, replacements] of results) {
      totalReplacements += replacements.length;
      
      replacements.forEach(replacement => {
        categoryCounts[replacement.category] = (categoryCounts[replacement.category] || 0) + 1;
      });
    }

    console.log(`✅ Batch completed: ${totalReplacements} links found`);
    console.log('📊 Category breakdown:', categoryCounts);
  }

  /**
   * Show final statistics
   */
  private showFinalStats(): void {
    const stats = linkReplacementService.getStats();
    
    console.log('\n🎉 Database link update completed!');
    console.log('📊 Final Statistics:');
    console.log(`   Total places processed: ${stats.totalCached}`);
    console.log(`   Average confidence: ${(stats.averageConfidence * 100).toFixed(1)}%`);
    console.log('   Categories found:', stats.categoriesFound);
  }

  /**
   * Split array into chunks
   */
  private chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  /**
   * Generate a report of all found links
   */
  generateLinkReport(): void {
    const stats = linkReplacementService.getStats();
    
    console.log('\n📋 LINK REPLACEMENT REPORT');
    console.log('========================');
    console.log(`Total places processed: ${stats.totalCached}`);
    console.log(`Average confidence: ${(stats.averageConfidence * 100).toFixed(1)}%`);
    console.log('\nCategories found:');
    
    Object.entries(stats.categoriesFound).forEach(([category, count]) => {
      console.log(`  ${category}: ${count} links`);
    });
  }
}

// Export for use in other scripts
export const databaseLinkUpdater = new DatabaseLinkUpdater();

// If running directly
if (require.main === module) {
  databaseLinkUpdater.updateDatabaseWithRealLinks()
    .then(() => {
      databaseLinkUpdater.generateLinkReport();
      console.log('\n✅ Link update process completed successfully!');
    })
    .catch(error => {
      console.error('❌ Link update process failed:', error);
      process.exit(1);
    });
}

