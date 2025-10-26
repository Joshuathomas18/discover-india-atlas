# Setup Guide for Anubhooti

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker and Docker Compose
- API keys for Google Maps and Google Gemini

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd discover-india-atlas
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# Google Maps API
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Google Gemini API
VITE_GEMINI_API_KEY=your_gemini_api_key

# Meilisearch
VITE_MEILISEARCH_HOST=http://localhost:7700
VITE_MEILISEARCH_MASTER_KEY=your_master_key
```

### 4. Start Required Services

Start Meilisearch and ChromaDB using Docker:

```bash
docker-compose up -d
```

This will start:
- Meilisearch on `http://localhost:7700`
- ChromaDB on `http://localhost:8000`

### 5. Index Data

Index the data to Meilisearch:

```bash
npx tsx scripts/indexToMeilisearch.ts
```

Index data to ChromaDB for RAG:

```bash
npx tsx scripts/indexToChromaDB.ts
```

### 6. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Configuration

### Google Maps API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Maps JavaScript API
4. Create an API key
5. Add the key to your `.env` file

### Google Gemini API

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create an API key
3. Add the key to your `.env` file

### Meilisearch Configuration

Meilisearch runs via Docker Compose. The default configuration is in `docker-compose.yml`:

```yaml
meilisearch:
  image: getmeili/meilisearch:latest
  ports:
    - "7700:7700"
  environment:
    MEILI_MASTER_KEY: your_master_key
  volumes:
    - ./meilisearch_data:/meili_data
```

### ChromaDB Configuration

ChromaDB runs via Docker Compose. The default configuration is in `docker-compose.yml`:

```yaml
chromadb:
  image: chromadb/chroma:latest
  ports:
    - "8000:8000"
  volumes:
    - ./chromadb_data:/chroma/chroma
```

## Project Structure

```
discover-india-atlas/
├── src/
│   ├── components/       # React components (UI)
│   ├── pages/           # Page components
│   ├── services/        # API services and business logic
│   │   ├── meilisearchService.ts      # Search service
│   │   ├── geminiService.ts           # AI service
│   │   ├── tripPlannerService.ts      # Trip planner
│   │   └── universalRAGService.ts    # RAG service
│   ├── data/            # State-specific data files
│   │   └── karnataka/   # Karnataka data as example
│   ├── config/          # Configuration files
│   └── utils/           # Utility functions
├── public/              # Static assets
├── scripts/             # Utility scripts
│   ├── indexToMeilisearch.ts
│   ├── indexToChromaDB.ts
│   └── ...             # Other utility scripts
└── docker-compose.yml   # Docker configuration

```

## Development Workflow

### Adding New States

1. Create data files in `src/data/[state-name]/`
2. Include: majorCities, riversData, mountainsData, wildlifeData, forestsData, waterfallsData, damsData
3. Follow the Karnataka data structure as reference

### Updating Search Index

After adding or modifying data:

```bash
npx tsx scripts/indexToMeilisearch.ts
npx tsx scripts/indexToChromaDB.ts
```

### Running Tests

```bash
npm test
```

## Troubleshooting

### Meilisearch Connection Issues

1. Check if Docker is running
2. Verify Meilisearch is accessible at `http://localhost:7700`
3. Check firewall settings

### Gemini API Errors

1. Verify API key is correct in `.env`
2. Check API quota limits
3. Ensure billing is enabled on Google Cloud

### Build Errors

1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
2. Clear Vite cache:
   ```bash
   rm -rf .vite
   ```

## Production Deployment

### Build for Production

```bash
npm run build
```

### Deploy

The `dist` folder contains the production build. Deploy this folder to your hosting provider.

Recommended hosting platforms:
- Vercel
- Netlify
- AWS Amplify
- Google Cloud App Engine

### Environment Variables in Production

Set the following environment variables in your hosting platform:

- `VITE_GOOGLE_MAPS_API_KEY`
- `VITE_GEMINI_API_KEY`
- `VITE_MEILISEARCH_HOST`
- `VITE_MEILISEARCH_MASTER_KEY`

### Docker Services in Production

For production, deploy Docker services separately:

1. Use managed services for Meilisearch (CloudMeili) or ChromaDB
2. Or deploy Docker containers on a VPS with proper security

## API Rate Limits

Be aware of API rate limits:

- Google Maps: 25,000 requests/day (free tier)
- Google Gemini: 15 requests/min (free tier)
- Adjust rate limiting in the code if needed

## Support

For issues and questions, refer to the development team or create an issue in the repository.


