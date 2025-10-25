import { databaseService } from './database';
import type { State, Place, CulturalItem } from '../types/database';

// Data Validation Service for India Cultural Atlas

export class DataValidationService {
  
  // Validate state data
  validateState(state: Partial<State>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!state.id || state.id.trim() === '') {
      errors.push('State ID is required');
    }
    
    if (!state.name || state.name.trim() === '') {
      errors.push('State name is required');
    }
    
    if (!state.capital || state.capital.trim() === '') {
      errors.push('State capital is required');
    }
    
    if (!state.description || state.description.trim().length < 50) {
      errors.push('State description must be at least 50 characters');
    }
    
    if (!state.coordinates || !state.coordinates.lat || !state.coordinates.lng) {
      errors.push('State coordinates are required');
    }
    
    if (!state.banner_image || !state.banner_image.download_url) {
      errors.push('State banner image is required');
    }
    
    if (!state.best_time_to_visit || state.best_time_to_visit.trim() === '') {
      errors.push('Best time to visit is required');
    }
    
    if (!state.languages || state.languages.length === 0) {
      errors.push('At least one language is required');
    }
    
    if (!state.population || state.population.trim() === '') {
      errors.push('Population information is required');
    }
    
    if (!state.area_sq_km || state.area_sq_km <= 0) {
      errors.push('Valid area in sq km is required');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Validate place data
  validatePlace(place: Partial<Place>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!place.id || place.id.trim() === '') {
      errors.push('Place ID is required');
    }
    
    if (!place.state_id || place.state_id.trim() === '') {
      errors.push('State ID reference is required');
    }
    
    if (!place.name || place.name.trim() === '') {
      errors.push('Place name is required');
    }
    
    if (!place.type || !['city', 'town', 'village', 'heritage_site', 'hill_station', 'beach'].includes(place.type)) {
      errors.push('Valid place type is required');
    }
    
    if (!place.description || place.description.trim().length < 30) {
      errors.push('Place description must be at least 30 characters');
    }
    
    if (!place.coordinates || !place.coordinates.lat || !place.coordinates.lng) {
      errors.push('Place coordinates are required');
    }
    
    if (!place.banner_image || !place.banner_image.download_url) {
      errors.push('Place banner image is required');
    }
    
    if (!place.best_time_to_visit || place.best_time_to_visit.trim() === '') {
      errors.push('Best time to visit is required');
    }
    
    if (!place.how_to_reach || Object.keys(place.how_to_reach).length === 0) {
      errors.push('Travel information is required');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Validate cultural item data
  validateCulturalItem(item: Partial<CulturalItem>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!item.id || item.id.trim() === '') {
      errors.push('Cultural item ID is required');
    }
    
    if (!item.place_id || item.place_id.trim() === '') {
      errors.push('Place ID reference is required');
    }
    
    if (!item.state_id || item.state_id.trim() === '') {
      errors.push('State ID reference is required');
    }
    
    if (!item.category || !['monuments', 'food', 'customs', 'festivals', 'history'].includes(item.category)) {
      errors.push('Valid category is required');
    }
    
    if (!item.name || item.name.trim() === '') {
      errors.push('Cultural item name is required');
    }
    
    if (!item.description || item.description.trim().length < 20) {
      errors.push('Description must be at least 20 characters');
    }
    
    if (!item.details || item.details.trim().length < 100) {
      errors.push('Details must be at least 100 characters');
    }
    
    if (!item.images || item.images.length < 2) {
      errors.push('At least 2 images are required');
    }
    
    // Validate each image
    if (item.images) {
      item.images.forEach((image, index) => {
        if (!image.download_url || image.download_url.trim() === '') {
          errors.push(`Image ${index + 1}: Download URL is required`);
        }
        if (!image.caption || image.caption.trim() === '') {
          errors.push(`Image ${index + 1}: Caption is required`);
        }
        if (!image.credit || image.credit.trim() === '') {
          errors.push(`Image ${index + 1}: Credit is required`);
        }
      });
    }
    
    if (!item.actions || !item.actions.primary) {
      errors.push('Primary action is required');
    }
    
    if (item.actions?.primary) {
      if (!item.actions.primary.label || item.actions.primary.label.trim() === '') {
        errors.push('Primary action label is required');
      }
      if (!item.actions.primary.type || !['external_link', 'modal', 'places_search', 'highlight_pins'].includes(item.actions.primary.type)) {
        errors.push('Valid primary action type is required');
      }
      if (item.actions.primary.type === 'external_link' && (!item.actions.primary.url || !this.isValidUrl(item.actions.primary.url))) {
        errors.push('Valid URL is required for external_link action');
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Validate URL format
  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return url.startsWith('http://') || url.startsWith('https://');
    } catch {
      return false;
    }
  }

  // Validate coordinates
  validateCoordinates(coordinates: { lat: number; lng: number }): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (typeof coordinates.lat !== 'number' || coordinates.lat < -90 || coordinates.lat > 90) {
      errors.push('Latitude must be a number between -90 and 90');
    }
    
    if (typeof coordinates.lng !== 'number' || coordinates.lng < -180 || coordinates.lng > 180) {
      errors.push('Longitude must be a number between -180 and 180');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Validate image URL accessibility
  async validateImageUrl(url: string): Promise<{ isValid: boolean; error?: string }> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      
      if (!response.ok) {
        return { isValid: false, error: `HTTP ${response.status}: ${response.statusText}` };
      }
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.startsWith('image/')) {
        return { isValid: false, error: 'URL does not point to an image' };
      }
      
      return { isValid: true };
      
    } catch (error) {
      return { isValid: false, error: `Network error: ${error}` };
    }
  }

  // Validate all images in a cultural item
  async validateItemImages(item: CulturalItem): Promise<{ isValid: boolean; errors: string[] }> {
    const errors: string[] = [];
    
    for (let i = 0; i < item.images.length; i++) {
      const image = item.images[i];
      const validation = await this.validateImageUrl(image.download_url);
      
      if (!validation.isValid) {
        errors.push(`Image ${i + 1}: ${validation.error}`);
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Comprehensive validation for entire database
  async validateDatabase(): Promise<{
    states: { valid: number; invalid: number; errors: string[] };
    places: { valid: number; invalid: number; errors: string[] };
    cultural_items: { valid: number; invalid: number; errors: string[] };
  }> {
    const result = {
      states: { valid: 0, invalid: 0, errors: [] as string[] },
      places: { valid: 0, invalid: 0, errors: [] as string[] },
      cultural_items: { valid: 0, invalid: 0, errors: [] as string[] }
    };
    
    try {
      // Validate states
      const states = await databaseService.getAllStates();
      for (const state of states) {
        const validation = this.validateState(state);
        if (validation.isValid) {
          result.states.valid++;
        } else {
          result.states.invalid++;
          result.states.errors.push(`${state.id}: ${validation.errors.join(', ')}`);
        }
      }
      
      // Validate places
      for (const state of states) {
        const places = await databaseService.getPlacesByState(state.id);
        for (const place of places) {
          const validation = this.validatePlace(place);
          if (validation.isValid) {
            result.places.valid++;
          } else {
            result.places.invalid++;
            result.places.errors.push(`${place.id}: ${validation.errors.join(', ')}`);
          }
        }
      }
      
      // Validate cultural items
      for (const state of states) {
        const places = await databaseService.getPlacesByState(state.id);
        for (const place of places) {
          const items = await databaseService.getCulturalItemsByPlace(place.id);
          for (const item of items) {
            const validation = this.validateCulturalItem(item);
            const imageValidation = await this.validateItemImages(item);
            
            if (validation.isValid && imageValidation.isValid) {
              result.cultural_items.valid++;
            } else {
              result.cultural_items.invalid++;
              const allErrors = [...validation.errors, ...imageValidation.errors];
              result.cultural_items.errors.push(`${item.id}: ${allErrors.join(', ')}`);
            }
          }
        }
      }
      
    } catch (error) {
      console.error('Database validation failed:', error);
    }
    
    return result;
  }

  // Generate validation report
  generateValidationReport(validationResult: any): string {
    const report = [];
    
    report.push('=== DATABASE VALIDATION REPORT ===');
    report.push(`Generated: ${new Date().toISOString()}`);
    report.push('');
    
    report.push('STATES:');
    report.push(`  Valid: ${validationResult.states.valid}`);
    report.push(`  Invalid: ${validationResult.states.invalid}`);
    if (validationResult.states.errors.length > 0) {
      report.push('  Errors:');
      validationResult.states.errors.forEach((error: string) => {
        report.push(`    - ${error}`);
      });
    }
    report.push('');
    
    report.push('PLACES:');
    report.push(`  Valid: ${validationResult.places.valid}`);
    report.push(`  Invalid: ${validationResult.places.invalid}`);
    if (validationResult.places.errors.length > 0) {
      report.push('  Errors:');
      validationResult.places.errors.forEach((error: string) => {
        report.push(`    - ${error}`);
      });
    }
    report.push('');
    
    report.push('CULTURAL ITEMS:');
    report.push(`  Valid: ${validationResult.cultural_items.valid}`);
    report.push(`  Invalid: ${validationResult.cultural_items.invalid}`);
    if (validationResult.cultural_items.errors.length > 0) {
      report.push('  Errors:');
      validationResult.cultural_items.errors.forEach((error: string) => {
        report.push(`    - ${error}`);
      });
    }
    
    return report.join('\n');
  }
}

// Export singleton instance
export const dataValidationService = new DataValidationService();
