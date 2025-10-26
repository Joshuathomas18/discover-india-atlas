// Database File Updater
// Updates actual database files with real links

import * as fs from 'fs';
import * as path from 'path';
import { linkReplacementService, LinkReplacement } from '../src/services/linkReplacementService';

interface DatabaseUpdate {
  filePath: string;
  placeId: string;
  category: string;
  itemId: string;
  actionType: 'primary' | 'secondary';
  newUrl: string;
  confidence: number;
}

class DatabaseFileUpdater {
  private dataDir = path.join(__dirname, '../src/data');
  private updates: DatabaseUpdate[] = [];

  /**
   * Scan all database files for placeholder links
   */
  async scanDatabaseFiles(): Promise<void> {
    console.log('🔍 Scanning database files for placeholder links...');
    
    const states = fs.readdirSync(this.dataDir);
    
    for (const state of states) {
      const statePath = path.join(this.dataDir, state);
      if (!fs.statSync(statePath).isDirectory()) continue;
      
      console.log(`\n📁 Processing state: ${state}`);
      
      const files = fs.readdirSync(statePath);
      for (const file of files) {
        if (file.endsWith('.ts')) {
          await this.processFile(path.join(statePath, file), state);
        }
      }
    }
    
    console.log(`\n📊 Found ${this.updates.length} potential updates`);
  }

  /**
   * Process a single database file
   */
  private async processFile(filePath: string, state: string): Promise<void> {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Find all placeholder URLs
      const placeholderRegex = /url:\s*['"`]https:\/\/example\.com\/[^'"`]*['"`]/g;
      const matches = content.match(placeholderRegex);
      
      if (!matches || matches.length === 0) return;
      
      console.log(`  📄 ${path.basename(filePath)}: ${matches.length} placeholder links`);
      
      // Extract place information from the file
      const placeInfo = this.extractPlaceInfo(content, state);
      if (!placeInfo) return;
      
      // Find real links for this place
      const replacements = await linkReplacementService.findRealLinks(placeInfo);
      
      if (replacements.length === 0) return;
      
      // Create updates for this file
      this.createUpdatesForFile(filePath, content, replacements);
      
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error);
    }
  }

  /**
   * Extract place information from file content
   */
  private extractPlaceInfo(content: string, state: string): { name: string; state: string; category: string } | null {
    // Try to extract place name from export statements
    const exportMatch = content.match(/export\s+const\s+(\w+)Data/);
    if (!exportMatch) return null;
    
    const placeName = exportMatch[1].replace(/([A-Z])/g, ' $1').trim();
    
    // Determine category from file name
    let category = 'place';
    if (content.includes('monuments')) category = 'monument';
    else if (content.includes('restaurants')) category = 'restaurant';
    else if (content.includes('hotels')) category = 'hotel';
    
    return {
      name: placeName,
      state: state,
      category: category
    };
  }

  /**
   * Create updates for a specific file
   */
  private createUpdatesForFile(filePath: string, content: string, replacements: LinkReplacement[]): void {
    const placeholderRegex = /url:\s*['"`]https:\/\/example\.com\/([^'"`]*)['"`]/g;
    let match;
    
    while ((match = placeholderRegex.exec(content)) !== null) {
      const placeholderType = match[1];
      const replacement = replacements.find(r => r.category === placeholderType);
      
      if (replacement && replacement.confidence > 0.6) {
        this.updates.push({
          filePath,
          placeId: 'unknown', // Would need more parsing to get exact IDs
          category: 'unknown',
          itemId: 'unknown',
          actionType: 'primary',
          newUrl: replacement.newUrl,
          confidence: replacement.confidence
        });
      }
    }
  }

  /**
   * Apply updates to database files
   */
  async applyUpdates(): Promise<void> {
    console.log(`\n🔄 Applying ${this.updates.length} updates to database files...`);
    
    const fileUpdates = new Map<string, DatabaseUpdate[]>();
    
    // Group updates by file
    for (const update of this.updates) {
      if (!fileUpdates.has(update.filePath)) {
        fileUpdates.set(update.filePath, []);
      }
      fileUpdates.get(update.filePath)!.push(update);
    }
    
    // Apply updates to each file
    for (const [filePath, updates] of fileUpdates) {
      await this.updateFile(filePath, updates);
    }
    
    console.log('✅ All updates applied successfully!');
  }

  /**
   * Update a single file with new links
   */
  private async updateFile(filePath: string, updates: DatabaseUpdate[]): Promise<void> {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let updated = false;
      
      for (const update of updates) {
        const oldPattern = /url:\s*['"`]https:\/\/example\.com\/[^'"`]*['"`]/;
        const newUrl = `url: '${update.newUrl}'`;
        
        if (content.match(oldPattern)) {
          content = content.replace(oldPattern, newUrl);
          updated = true;
          console.log(`  ✅ Updated: ${path.basename(filePath)} - ${update.newUrl}`);
        }
      }
      
      if (updated) {
        // Create backup
        const backupPath = `${filePath}.backup.${Date.now()}`;
        fs.writeFileSync(backupPath, fs.readFileSync(filePath));
        
        // Write updated content
        fs.writeFileSync(filePath, content);
        console.log(`  💾 Backup created: ${path.basename(backupPath)}`);
      }
      
    } catch (error) {
      console.error(`Error updating file ${filePath}:`, error);
    }
  }

  /**
   * Generate a report of all updates
   */
  generateUpdateReport(): void {
    console.log('\n📋 UPDATE REPORT');
    console.log('================');
    console.log(`Total updates: ${this.updates.length}`);
    
    const fileCounts = new Map<string, number>();
    const confidenceStats = { high: 0, medium: 0, low: 0 };
    
    for (const update of this.updates) {
      // Count by file
      const count = fileCounts.get(update.filePath) || 0;
      fileCounts.set(update.filePath, count + 1);
      
      // Count by confidence
      if (update.confidence >= 0.8) confidenceStats.high++;
      else if (update.confidence >= 0.6) confidenceStats.medium++;
      else confidenceStats.low++;
    }
    
    console.log('\nFiles updated:');
    for (const [filePath, count] of fileCounts) {
      console.log(`  ${path.basename(filePath)}: ${count} updates`);
    }
    
    console.log('\nConfidence distribution:');
    console.log(`  High (≥80%): ${confidenceStats.high}`);
    console.log(`  Medium (60-79%): ${confidenceStats.medium}`);
    console.log(`  Low (<60%): ${confidenceStats.low}`);
  }

  /**
   * Validate all updated URLs
   */
  async validateUpdatedUrls(): Promise<void> {
    console.log('\n🔍 Validating updated URLs...');
    
    const uniqueUrls = new Set(this.updates.map(u => u.newUrl));
    let validCount = 0;
    let invalidCount = 0;
    
    for (const url of uniqueUrls) {
      const isValid = await linkReplacementService.validateUrl(url);
      if (isValid) {
        validCount++;
        console.log(`  ✅ ${url}`);
      } else {
        invalidCount++;
        console.log(`  ❌ ${url}`);
      }
    }
    
    console.log(`\n📊 Validation Results:`);
    console.log(`  Valid URLs: ${validCount}`);
    console.log(`  Invalid URLs: ${invalidCount}`);
    console.log(`  Success rate: ${((validCount / (validCount + invalidCount)) * 100).toFixed(1)}%`);
  }
}

// Export for use in other scripts
export const databaseFileUpdater = new DatabaseFileUpdater();

// If running directly
if (require.main === module) {
  databaseFileUpdater.scanDatabaseFiles()
    .then(() => databaseFileUpdater.applyUpdates())
    .then(() => databaseFileUpdater.generateUpdateReport())
    .then(() => databaseFileUpdater.validateUpdatedUrls())
    .then(() => {
      console.log('\n🎉 Database link update process completed!');
    })
    .catch(error => {
      console.error('❌ Database update failed:', error);
      process.exit(1);
    });
}

