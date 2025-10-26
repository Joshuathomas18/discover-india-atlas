const axios = require('axios');
const fs = require('fs');

// Read the state tourism websites JSON
const websitesData = JSON.parse(fs.readFileSync('src/data/stateTourismWebsites.json', 'utf8'));
const stateWebsites = websitesData.stateTourismWebsites;

async function checkWebsite(url) {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    return { statusCode: response.status };
  } catch (error) {
    return { 
      error: error.code || error.message,
      statusCode: error.response?.status 
    };
  }
}

async function checkAllWebsites() {
  console.log('🔍 Checking all state tourism websites...\n');
  
  const results = [];
  
  for (const [state, url] of Object.entries(stateWebsites)) {
    console.log(`Checking ${state}...`);
    const result = await checkWebsite(url);
    
    const status = {
      state,
      url,
      status: result.statusCode && result.statusCode < 400 ? 'working' : 'not_working',
      statusCode: result.statusCode,
      error: result.error
    };
    
    results.push(status);
    
    if (status.status === 'working') {
      console.log(`✅ ${state}: Working (${status.statusCode})`);
    } else {
      console.log(`❌ ${state}: Not working - ${status.error}`);
    }
    
    // Add delay to avoid overwhelming servers
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Summary
  const working = results.filter(r => r.status === 'working').length;
  const notWorking = results.filter(r => r.status === 'not_working').length;
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Working: ${working}/${results.length}`);
  console.log(`❌ Not Working: ${notWorking}/${results.length}`);
  
  // Show not working websites
  if (notWorking > 0) {
    console.log(`\n❌ Not Working Websites:`);
    results.filter(r => r.status === 'not_working').forEach(r => {
      console.log(`- ${r.state}: ${r.url} (${r.error})`);
    });
  }
  
  // Save results to file
  fs.writeFileSync('website-check-results.json', JSON.stringify(results, null, 2));
  console.log(`\n💾 Results saved to website-check-results.json`);
}

// Run the check
checkAllWebsites().catch(console.error);

