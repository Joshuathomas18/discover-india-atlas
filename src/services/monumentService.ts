import { allKarnatakaData } from '@/data/karnataka';
import { KarnatakaPOI } from '@/types/database';

export interface Monument {
  id: string;
  name: string;
  description: string;
  details: string;
  coordinates: { lat: number; lng: number };
  city: string;
  images?: Array<{
    download_url: string;
    caption: string;
    alt_text: string;
  }>;
  opening_hours?: string;
  entry_fee?: string;
  best_time?: string;
  duration?: string;
  accessibility_info?: string;
}

class MonumentService {
  private monuments: Monument[] = [];

  constructor() {
    this.extractAllMonuments();
  }

  private extractAllMonuments(): void {
    this.monuments = [];

    allKarnatakaData.forEach((poi: KarnatakaPOI) => {
      if (poi.tabs?.monuments) {
        poi.tabs.monuments.forEach((monument) => {
          // Only include monuments with valid coordinates
          if (monument.coordinates.lat !== 0 && monument.coordinates.lng !== 0) {
            this.monuments.push({
              id: monument.id,
              name: monument.name,
              description: monument.description,
              details: monument.details,
              coordinates: monument.coordinates,
              city: poi.name,
              images: monument.images?.map(img => ({
                download_url: img.download_url,
                caption: img.caption,
                alt_text: img.alt_text
              })),
              opening_hours: monument.opening_hours,
              entry_fee: monument.entry_fee,
              best_time: monument.best_time,
              duration: monument.duration,
              accessibility_info: monument.accessibility_info
            });
          }
        });
      }
    });

    console.log(`Extracted ${this.monuments.length} monuments from Karnataka database`);
  }

  /**
   * Get all monuments
   */
  getAllMonuments(): Monument[] {
    return this.monuments;
  }

  /**
   * Get monuments by city
   */
  getMonumentsByCity(cityName: string): Monument[] {
    return this.monuments.filter(monument => 
      monument.city.toLowerCase().includes(cityName.toLowerCase())
    );
  }

  /**
   * Get monument by ID
   */
  getMonumentById(id: string): Monument | undefined {
    return this.monuments.find(monument => monument.id === id);
  }

  /**
   * Get monuments with Street View availability
   */
  getMonumentsWithStreetView(): Monument[] {
    // These are major monuments likely to have Street View coverage
    const majorMonuments = [
      'bangalore_palace',
      'vidhana_soudha',
      'mysore_palace',
      'chamundi_hills_temple',
      'kadri_manjunath_temple'
    ];

    return this.monuments.filter(monument => 
      majorMonuments.includes(monument.id) || 
      monument.name.toLowerCase().includes('palace') ||
      monument.name.toLowerCase().includes('fort') ||
      monument.name.toLowerCase().includes('temple')
    );
  }

  /**
   * Search monuments by name
   */
  searchMonuments(query: string): Monument[] {
    const lowercaseQuery = query.toLowerCase();
    return this.monuments.filter(monument =>
      monument.name.toLowerCase().includes(lowercaseQuery) ||
      monument.description.toLowerCase().includes(lowercaseQuery) ||
      monument.city.toLowerCase().includes(lowercaseQuery)
    );
  }

  /**
   * Get monument statistics
   */
  getMonumentStats(): {
    total: number;
    byCity: Record<string, number>;
    withStreetView: number;
  } {
    const byCity: Record<string, number> = {};
    
    this.monuments.forEach(monument => {
      byCity[monument.city] = (byCity[monument.city] || 0) + 1;
    });

    return {
      total: this.monuments.length,
      byCity,
      withStreetView: this.getMonumentsWithStreetView().length
    };
  }
}

export const monumentService = new MonumentService();

