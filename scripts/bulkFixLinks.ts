// Bulk Link Fixer Script
// Fixes all remaining placeholder links in the database

import * as fs from 'fs';
import * as path from 'path';

// State-specific tourism websites
const stateTourismSites: Record<string, string> = {
  'sikkim': 'https://www.sikkimtourism.gov.in',
  'bihar': 'https://www.bihartourism.gov.in',
  'jharkhand': 'https://www.jharkhandtourism.gov.in',
  'chhattisgarh': 'https://www.chhattisgarhtourism.gov.in',
  'madhya-pradesh': 'https://www.mptourism.com',
  'haryana': 'https://www.haryanatourism.gov.in',
  'punjab': 'https://www.punjabtourism.gov.in',
  'assam': 'https://www.assamtourism.gov.in',
  'odisha': 'https://www.odishatourism.gov.in',
  'telangana': 'https://www.telanganatourism.gov.in',
  'andhra-pradesh': 'https://www.aptourism.gov.in',
  'west-bengal': 'https://www.wbtourism.gov.in',
  'gujarat': 'https://www.gujarattourism.com',
  'uttarakhand': 'https://www.uttarakhandtourism.gov.in',
  'himachal-pradesh': 'https://www.himachaltourism.gov.in',
  'uttar-pradesh': 'https://www.uptourism.gov.in',
  'maharashtra': 'https://www.maharashtratourism.gov.in',
  'tamil-nadu': 'https://www.tamilnadutourism.tn.gov.in',
  'goa': 'https://www.goatourism.gov.in',
  'kerala': 'https://www.keralatourism.org',
  'rajasthan': 'https://www.rajasthantourism.gov.in',
  'karnataka': 'https://www.karnatakatourism.org',
  'ladakh': 'https://www.ladakhtourism.gov.in',
  'manipur': 'https://www.manipurtourism.gov.in',
  'meghalaya': 'https://www.meghalayatourism.gov.in'
};

// Additional useful URLs for different link types
const linkReplacements: Record<string, string> = {
  // Government and official sites
  'height-measurements': 'https://www.surveyofindia.gov.in',
  'geographic-survey': 'https://www.surveyofindia.gov.in',
  'flow-data': 'https://www.cwc.gov.in',
  'seasonal-variations': 'https://www.imd.gov.in',
  'weather-information': 'https://www.imd.gov.in',
  'train-schedule': 'https://www.irctc.co.in',
  'station-information': 'https://www.irctc.co.in',
  'bus-services': 'https://www.redbus.in',
  'taxi-services': 'https://www.olacabs.com',
  
  // Tourism and booking sites
  'tickets': 'https://www.bookmyshow.com',
  'booking': 'https://www.makemytrip.com',
  'hotel-booking': 'https://www.booking.com',
  'restaurant-booking': 'https://www.zomato.com',
  'tour-guide': 'https://www.tripadvisor.com',
  
  // Safety and information
  'safety-guidelines': 'https://www.tourism.gov.in/safety',
  'emergency-procedures': 'https://www.tourism.gov.in/emergency',
  'accessibility': 'https://www.tourism.gov.in/accessibility',
  
  // Virtual tours and 360 views
  'virtual-tour': 'https://www.google.com/maps',
  '360-view': 'https://www.google.com/maps',
  'street-view': 'https://www.google.com/maps'
};

function fixLinksInFile(filePath: string, stateName: string): void {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Replace example.com with state tourism site
    const stateSite = stateTourismSites[stateName] || 'https://www.tourism.gov.in';
    const oldContent = content;
    
    content = content.replace(/https:\/\/example\.com/g, stateSite);
    
    // Replace specific link patterns with more relevant URLs
    for (const [pattern, replacement] of Object.entries(linkReplacements)) {
      const regex = new RegExp(`https://example\\.com/${pattern}`, 'g');
      content = content.replace(regex, replacement);
    }
    
    // Replace generic example.com links with state-specific ones
    content = content.replace(/https:\/\/example\.com\/([^'"`\s]+)/g, `${stateSite}/$1`);
    
    if (content !== oldContent) {
      // Create backup
      const backupPath = `${filePath}.backup.${Date.now()}`;
      fs.writeFileSync(backupPath, oldContent);
      
      // Write updated content
      fs.writeFileSync(filePath, content);
      
      console.log(`✅ Fixed: ${path.basename(filePath)}`);
      updated = true;
    }
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error);
  }
}

function fixAllLinks(): void {
  console.log('🚀 Starting bulk link fixing...');
  
  const dataDir = path.join(__dirname, '../src/data');
  const states = fs.readdirSync(dataDir);
  
  let totalFilesFixed = 0;
  
  for (const state of states) {
    const statePath = path.join(dataDir, state);
    if (!fs.statSync(statePath).isDirectory()) continue;
    
    console.log(`\n📁 Processing state: ${state}`);
    
    const files = fs.readdirSync(statePath);
    let stateFilesFixed = 0;
    
    for (const file of files) {
      if (file.endsWith('.ts')) {
        const filePath = path.join(statePath, file);
        const oldContent = fs.readFileSync(filePath, 'utf8');
        
        if (oldContent.includes('https://example.com')) {
          fixLinksInFile(filePath, state);
          stateFilesFixed++;
          totalFilesFixed++;
        }
      }
    }
    
    console.log(`   Fixed ${stateFilesFixed} files`);
  }
  
  console.log(`\n🎉 Bulk fixing completed!`);
  console.log(`   Total files fixed: ${totalFilesFixed}`);
}

// Run the fixer
fixAllLinks();

