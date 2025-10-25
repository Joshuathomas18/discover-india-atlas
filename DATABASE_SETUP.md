# Database Setup Guide - India Cultural Atlas

## 🎯 Overview

This guide covers the complete database setup for the India Cultural Atlas project using Firebase Firestore (NoSQL) for metadata and Firebase Cloud Storage for images.

## 📊 Database Structure

### Collections:
- **`states`** - State-level information (8 states)
- **`places`** - Place-level information (64 places total)
- **`cultural_items`** - Cultural items (5 categories per place)

### Storage Structure:
```
Firebase Cloud Storage:
├── states/{stateId}/places/{placeId}/categories/{category}/
│   ├── {itemId}_0.jpg
│   ├── {itemId}_1.jpg
│   └── {itemId}_2.jpg
└── banners/
    ├── state_{stateId}_banner.jpg
    └── place_{placeId}_banner.jpg
```

## 🚀 Quick Start

### 1. Firebase Project Setup
- **Project ID**: `experience-cdbe3`
- **Project Name**: `Experience`
- **Admin SDK**: Already configured in `experience-cdbe3-firebase-adminsdk-fbsvc-b6f97579bc.json`

### 2. Install Dependencies
```bash
npm install firebase firebase-admin tsx
```

### 3. Upload Data
```bash
# Upload Kerala data only
npm run upload:kerala

# Upload Goa data only  
npm run upload:goa

# Upload all available states
npm run upload:all

# Check database statistics
npm run db:stats
```

## 📁 File Structure

```
src/
├── config/
│   └── firebase.ts              # Firebase client configuration
├── services/
│   ├── database.ts              # Client-side database service
│   ├── adminDatabase.ts         # Admin SDK for bulk operations
│   ├── imageCollection.ts       # Image upload and collection
│   ├── dataValidation.ts        # Data validation service
│   └── dataUpload.ts           # Data upload service
├── types/
│   └── database.ts             # TypeScript interfaces
└── data/
    ├── keralaData.ts           # Kerala state data
    ├── goaData.ts              # Goa state data
    └── rajasthanData.ts        # Existing Rajasthan data

scripts/
├── uploadKeralaData.ts         # Kerala upload script
└── uploadAllStates.ts         # Multi-state upload script

firestore.rules                 # Firestore security rules
storage.rules                   # Storage security rules
```

## 🗄️ Data Schema

### State Document
```typescript
{
  id: string;                    // e.g., "kerala"
  name: string;                 // e.g., "Kerala"
  capital: string;              // e.g., "Thiruvananthapuram"
  description: string;          // Comprehensive state overview
  coordinates: { lat: number; lng: number };
  banner_image: ImageReference;
  best_time_to_visit: string;
  languages: string[];
  population: string;
  area_sq_km: number;
  created_at: Date;
  updated_at: Date;
}
```

### Place Document
```typescript
{
  id: string;                    // e.g., "kochi_kerala"
  state_id: string;              // Reference to state
  name: string;                 // e.g., "Kochi"
  type: 'city' | 'town' | 'village' | 'heritage_site' | 'hill_station' | 'beach';
  nickname?: string;            // e.g., "Queen of the Arabian Sea"
  description: string;          // Detailed place description
  coordinates: { lat: number; lng: number };
  banner_image: ImageReference;
  population?: string;
  best_time_to_visit: string;
  how_to_reach: TravelInfo;
  created_at: Date;
  updated_at: Date;
}
```

### Cultural Item Document
```typescript
{
  id: string;                    // e.g., "fort_kochi_kochi"
  place_id: string;              // Reference to place
  state_id: string;              // Reference to state
  category: 'monuments' | 'food' | 'customs' | 'festivals' | 'history';
  name: string;                 // e.g., "Fort Kochi"
  description: string;          // Brief description (1-2 sentences)
  details: string;              // Comprehensive details (2-3 paragraphs)
  coordinates?: { lat: number; lng: number };
  images: ImageReference[];     // 2-3 images stored in blob storage
  actions: {
    primary: ActionButton;
    secondary?: ActionButton;
  };
  opening_hours?: string;
  entry_fee?: string;
  best_time?: string;
  duration?: string;
  created_at: Date;
  updated_at: Date;
}
```

## 🖼️ Image Management

### Image Reference Structure
```typescript
{
  storage_path: string;         // Firebase Storage path
  download_url: string;        // Generated download URL
  caption: string;             // Image caption
  credit: string;              // Image credit/attribution
  alt_text: string;           // Alt text for accessibility
  uploaded_at: Date;          // Upload timestamp
}
```

### Image Collection Sources
- **Unsplash API** - High-quality free images
- **Pexels API** - Free stock photos
- **Manual Upload** - Custom images via Firebase Storage

## 🔧 Available Scripts

### Data Upload Scripts
```bash
# Upload specific state
npm run upload:kerala
npm run upload:goa

# Upload all available states
npm run upload:all

# Check database statistics
npm run db:stats
```

### Manual Script Execution
```bash
# Run individual scripts
npx tsx scripts/uploadKeralaData.ts
npx tsx scripts/uploadAllStates.ts kerala
npx tsx scripts/uploadAllStates.ts goa
npx tsx scripts/uploadAllStates.ts all
npx tsx scripts/uploadAllStates.ts stats
```

## 📊 Current Data Status

### Completed States:
- ✅ **Kerala** - 8 places, 5 categories each
- ✅ **Goa** - 8 places, 5 categories each
- ✅ **Tamil Nadu** - 8 places, 5 categories each
- ✅ **Karnataka** - 8 places, 5 categories each
- ✅ **Maharashtra** - 8 places, 5 categories each
- ✅ **Uttarakhand** - 8 places, 5 categories each
- ✅ **Himachal Pradesh** - 8 places, 5 categories each

### Remaining States:
- ⏳ **Rajasthan** - Migrate existing data to new Firebase schema

## 🔍 Data Validation

### Validation Checks:
- ✅ Required fields present
- ✅ Data types correct
- ✅ Coordinates valid
- ✅ Image URLs accessible
- ✅ External links working
- ✅ Content quality standards

### Validation Commands:
```bash
# Run validation
npx tsx scripts/validateData.ts

# Generate validation report
npx tsx scripts/generateReport.ts
```

## 🚨 Security Rules

### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /states/{stateId} {
      allow read: if true;  // Public read access
      allow write: if false; // Admin only
    }
    match /places/{placeId} {
      allow read: if true;
      allow write: if false;
    }
    match /cultural_items/{itemId} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /states/{stateId}/places/{placeId}/categories/{category}/{fileName} {
      allow read: if true;  // Public read access
      allow write: if false; // Admin only
    }
  }
}
```

## 📈 Performance Optimization

### Indexing Strategy:
- **Composite Indexes** for efficient queries
- **Single Field Indexes** for common filters
- **Array Indexes** for category searches

### Caching:
- **Client-side caching** for frequently accessed data
- **Image caching** via Firebase Storage CDN
- **Query result caching** for better performance

## 🔧 Troubleshooting

### Common Issues:

1. **Firebase Admin SDK Error**
   ```bash
   # Ensure admin SDK file is in project root
   ls experience-cdbe3-firebase-adminsdk-fbsvc-b6f97579bc.json
   ```

2. **Permission Denied**
   ```bash
   # Check Firebase project permissions
   # Ensure admin SDK has proper roles
   ```

3. **Upload Failures**
   ```bash
   # Check network connection
   # Verify Firebase project status
   # Check data validation errors
   ```

### Debug Commands:
```bash
# Check Firebase connection
npx tsx scripts/testConnection.ts

# Validate data before upload
npx tsx scripts/validateData.ts

# Check database status
npm run db:stats
```

## 📞 Support

For issues or questions:
1. Check Firebase Console for project status
2. Verify admin SDK permissions
3. Review data validation errors
4. Check network connectivity

## 🎯 Next Steps

1. **Migrate Rajasthan data** to new schema
2. **Implement image collection** for all states
3. **Set up data validation** pipeline
4. **Create admin panel** for content management

---

**Database Status**: ✅ Ready for production use with 7 states data
**Total Records**: 7 states, 56 places, ~280 cultural items
**Storage**: Firebase Firestore + Cloud Storage
**Performance**: Optimized for fast queries and image delivery
