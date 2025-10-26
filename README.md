# Anubhooti

**The Living Map of India** - A comprehensive interactive cultural atlas for exploring India's diverse geography, heritage, and culture.

## Overview

Anubhooti is an innovative web application that provides a unified, intuitive platform for discovering India's rich cultural and geographical diversity. Instead of navigating through multiple state tourism websites, users can explore all 36 states and union territories through an interactive map interface.

## Key Features

### Interactive Map Interface
- Single-click discovery across all states and union territories
- Zoom into states to reveal geographical points of interest
- View cities, monuments, rivers, waterfalls, mountains, wildlife sanctuaries, forests, and dams
- Smooth transitions and intuitive navigation

### Category-Based Information System
- Cities: Discover monuments, food, customs, festivals, and history
- Mountains: Access facts, trekking information, and directions
- Waterfalls: Learn about associated rivers, facts, and visiting information
- Wildlife Sanctuaries: Explore facts, visiting details, and wildlife information
- Rivers: Understand facts, fish species, and access information
- Forests: Learn facts, visiting information, and wildlife details
- Dams: Find associated rivers, facts, and tourist information

### Smart Search with AI
- Natural language search powered by Google Gemini AI
- Handles queries for places not in the database
- Provides structured information from AI-powered web searches
- Always available search option for any query

### AI-Powered Trip Planner
- Conversational interface for personalized trip planning
- Asks about place preferences, region, terrain type, activity interests, duration, and budget
- Generates detailed itineraries with destinations, budgets, meals, and accommodation
- Provides actionable links to book and explore

### 3D Virtual Exploration
- Google Street View integration for monuments
- Immersive 3D experiences with smooth navigation
- Rate limiting protection for optimal performance

### Actionable Content
- Real links to official websites and booking platforms
- Direct access to buy tickets, virtual tours, and map views
- Integration with Google Maps for navigation

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Mapping**: Google Maps JavaScript API
- **AI**: Google Gemini API
- **Search**: Meilisearch
- **Vector Database**: ChromaDB for RAG (Retrieval-Augmented Generation)
- **Data Storage**: Firestore-like structure

## Setup

See [SETUP.md](SETUP.md) for detailed installation and configuration instructions.

## Project Structure

```
discover-india-atlas/
├── src/
│   ├── components/      # React components
│   ├── pages/           # Page components
│   ├── services/        # API services and business logic
│   ├── data/            # State-specific data files
│   ├── config/          # Configuration files
│   └── utils/           # Utility functions
├── public/              # Static assets
├── scripts/             # Utility scripts
└── docker-compose.yml   # Docker configuration for services
```

## Data Coverage

- 36 states and union territories
- 300+ points of interest
- Categories: Cities, Rivers, Mountains, Wildlife Sanctuaries, Forests, Waterfalls, Dams
- Comprehensive cultural information for each location

## Features in Detail

### Map Navigation
1. Click on any state to zoom in
2. View geographical points of interest
3. Click on a POI to see category tabs
4. Explore rich cultural information

### Search Functionality
- Traditional search through Meilisearch for known locations
- AI-powered search for unique or new locations
- Intelligent handling of zero-result searches

### Trip Planning
- Interactive conversation flow
- Multiple preference options
- Detailed itinerary generation
- Budget and accommodation recommendations

## API Keys Required

- Google Maps API
- Google Gemini API
- Meilisearch (included via Docker)

## Development

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## License

This project is part of a hackathon submission.
