import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  startAfter,
  DocumentSnapshot
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject,
  listAll,
  getMetadata
} from 'firebase/storage';
import { db, storage } from '../config/firebase';
import type {
  State,
  Place,
  CulturalItem,
  GeographicalPOI,
  POICategory,
  KarnatakaPOI,
  KarnatakaPOICategory,
  ImageReference,
  ImageUploadResult,
  BatchImageUpload,
  SearchFilters,
  SearchResult,
  StateIndex,
  PlaceIndex,
  CulturalItemIndex
} from '../types/database';

// Database Service Layer with Blob Storage Integration

export class DatabaseService {
  
  // ========== STATES COLLECTION ==========
  
  async getAllStates(): Promise<State[]> {
    const statesRef = collection(db, 'states');
    const q = query(statesRef, orderBy('name'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as State));
  }

  async getStateById(stateId: string): Promise<State | null> {
    const stateRef = doc(db, 'states', stateId);
    const snapshot = await getDoc(stateRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } as State : null;
  }

  async getStatesIndex(): Promise<StateIndex[]> {
    const statesRef = collection(db, 'states');
    const q = query(statesRef, orderBy('name'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        coordinates: data.coordinates,
        banner_image_url: data.banner_image?.download_url || '',
        places_count: data.places_count || 0
      } as StateIndex;
    });
  }

  // ========== PLACES COLLECTION ==========
  
  async getPlacesByState(stateId: string): Promise<Place[]> {
    const placesRef = collection(db, 'places');
    const q = query(placesRef, where('state_id', '==', stateId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Place));
  }

  async getPlaceById(placeId: string): Promise<Place | null> {
    const placeRef = doc(db, 'places', placeId);
    const snapshot = await getDoc(placeRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } as Place : null;
  }

  async getPlacesIndex(stateId?: string): Promise<PlaceIndex[]> {
    const placesRef = collection(db, 'places');
    const q = stateId 
      ? query(placesRef, where('state_id', '==', stateId))
      : query(placesRef);
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        state_id: data.state_id,
        name: data.name,
        type: data.type,
        coordinates: data.coordinates,
        banner_image_url: data.banner_image?.download_url || '',
        cultural_items_count: data.cultural_items_count || 0
      } as PlaceIndex;
    });
  }

  // ========== KARNATAKA POIs COLLECTION ==========
  
  async getKarnatakaPOIs(): Promise<KarnatakaPOI[]> {
    const poisRef = collection(db, 'karnataka_pois');
    const q = query(poisRef, orderBy('name'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as KarnatakaPOI));
  }

  async getKarnatakaPOIsByCategory(category: KarnatakaPOICategory): Promise<KarnatakaPOI[]> {
    const poisRef = collection(db, 'karnataka_pois');
    const q = query(poisRef, where('category', '==', category));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as KarnatakaPOI));
  }

  async getKarnatakaPOIById(poiId: string): Promise<KarnatakaPOI | null> {
    const poiRef = doc(db, 'karnataka_pois', poiId);
    const snapshot = await getDoc(poiRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } as KarnatakaPOI : null;
  }

  async addKarnatakaPOI(poi: Omit<KarnatakaPOI, 'id'>): Promise<string> {
    const poisRef = collection(db, 'karnataka_pois');
    const docRef = await addDoc(poisRef, poi);
    return docRef.id;
  }

  async updateKarnatakaPOI(poiId: string, updates: Partial<KarnatakaPOI>): Promise<void> {
    const poiRef = doc(db, 'karnataka_pois', poiId);
    await updateDoc(poiRef, updates);
  }

  async deleteKarnatakaPOI(poiId: string): Promise<void> {
    const poiRef = doc(db, 'karnataka_pois', poiId);
    await deleteDoc(poiRef);
  }

  // ========== GEOGRAPHICAL POIs COLLECTION ==========
  
  async getGeographicalPOIsByState(stateId: string): Promise<GeographicalPOI[]> {
    const poisRef = collection(db, 'geographical_pois');
    const q = query(poisRef, where('state_id', '==', stateId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as GeographicalPOI));
  }

  async getGeographicalPOIsByCategory(stateId: string, category: POICategory): Promise<GeographicalPOI[]> {
    const poisRef = collection(db, 'geographical_pois');
    const q = query(
      poisRef, 
      where('state_id', '==', stateId),
      where('category', '==', category)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as GeographicalPOI));
  }

  async getGeographicalPOIById(poiId: string): Promise<GeographicalPOI | null> {
    const poiRef = doc(db, 'geographical_pois', poiId);
    const snapshot = await getDoc(poiRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } as GeographicalPOI : null;
  }

  async addGeographicalPOI(poi: Omit<GeographicalPOI, 'id'>): Promise<string> {
    const poisRef = collection(db, 'geographical_pois');
    const docRef = await addDoc(poisRef, poi);
    return docRef.id;
  }

  async updateGeographicalPOI(poiId: string, updates: Partial<GeographicalPOI>): Promise<void> {
    const poiRef = doc(db, 'geographical_pois', poiId);
    await updateDoc(poiRef, updates);
  }

  async deleteGeographicalPOI(poiId: string): Promise<void> {
    const poiRef = doc(db, 'geographical_pois', poiId);
    await deleteDoc(poiRef);
  }

  // ========== CULTURAL ITEMS COLLECTION ==========
  
  async getCulturalItemsByPlace(placeId: string): Promise<CulturalItem[]> {
    const itemsRef = collection(db, 'cultural_items');
    const q = query(itemsRef, where('place_id', '==', placeId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CulturalItem));
  }

  async getCulturalItemsByCategory(placeId: string, category: string): Promise<CulturalItem[]> {
    const itemsRef = collection(db, 'cultural_items');
    const q = query(
      itemsRef, 
      where('place_id', '==', placeId), 
      where('category', '==', category)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CulturalItem));
  }

  async getCulturalItemsIndex(placeId?: string, category?: string): Promise<CulturalItemIndex[]> {
    const itemsRef = collection(db, 'cultural_items');
    let q;
    
    if (placeId && category) {
      q = query(
        itemsRef, 
        where('place_id', '==', placeId), 
        where('category', '==', category)
      );
    } else if (placeId) {
      q = query(itemsRef, where('place_id', '==', placeId));
    } else if (category) {
      q = query(itemsRef, where('category', '==', category));
    } else {
      q = query(itemsRef);
    }
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        place_id: data.place_id,
        state_id: data.state_id,
        category: data.category,
        name: data.name,
        coordinates: data.coordinates,
        primary_image_url: data.images?.[0]?.download_url || '',
        has_actions: !!(data.actions?.primary)
      } as CulturalItemIndex;
    });
  }

  // ========== IMAGE BLOB STORAGE ==========
  
  async uploadImage(
    file: File, 
    stateId: string, 
    placeId: string, 
    category: string, 
    itemId: string, 
    imageIndex: number
  ): Promise<ImageUploadResult> {
    // Create storage path: states/{stateId}/places/{placeId}/categories/{category}/{itemId}_{index}.jpg
    const fileName = `${itemId}_${imageIndex}.${file.name.split('.').pop()}`;
    const storagePath = `states/${stateId}/places/${placeId}/categories/${category}/${fileName}`;
    const imageRef = ref(storage, storagePath);
    
    // Upload file to blob storage
    const snapshot = await uploadBytes(imageRef, file);
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    // Get metadata
    const metadata = await getMetadata(snapshot.ref);
    
    return {
      storage_path: storagePath,
      download_url: downloadURL,
      metadata: {
        size: metadata.size,
        contentType: metadata.contentType,
        uploaded_at: new Date(metadata.timeCreated)
      }
    };
  }

  async uploadBatchImages(batch: BatchImageUpload): Promise<ImageReference[]> {
    const results: ImageReference[] = [];
    
    for (let i = 0; i < batch.images.length; i++) {
      const file = batch.images[i];
      const uploadResult = await this.uploadImage(
        file,
        batch.state_id,
        batch.place_id,
        batch.category,
        batch.item_id,
        i
      );
      
      results.push({
        storage_path: uploadResult.storage_path,
        download_url: uploadResult.download_url,
        caption: `${batch.item_id} - Image ${i + 1}`,
        credit: 'Uploaded by admin',
        alt_text: `${batch.item_id} cultural item`,
        uploaded_at: uploadResult.metadata.uploaded_at
      });
    }
    
    return results;
  }

  async deleteImage(storagePath: string): Promise<void> {
    const imageRef = ref(storage, storagePath);
    await deleteObject(imageRef);
  }

  async getImagesByPath(prefix: string): Promise<ImageReference[]> {
    const listRef = ref(storage, prefix);
    const result = await listAll(listRef);
    
    const images: ImageReference[] = [];
    
    for (const itemRef of result.items) {
      const downloadURL = await getDownloadURL(itemRef);
      const metadata = await getMetadata(itemRef);
      
      images.push({
        storage_path: itemRef.fullPath,
        download_url: downloadURL,
        caption: `Image from ${prefix}`,
        credit: 'Firebase Storage',
        alt_text: `Cultural item image`,
        uploaded_at: new Date(metadata.timeCreated)
      });
    }
    
    return images;
  }

  // ========== SEARCH FUNCTIONALITY ==========
  
  async searchContent(searchTerm: string, filters?: SearchFilters): Promise<SearchResult> {
    const results: SearchResult = {
      states: [],
      places: [],
      cultural_items: [],
      total_results: 0
    };
    
    // Search states
    const statesIndex = await this.getStatesIndex();
    results.states = statesIndex.filter(state => 
      state.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Search places
    const placesIndex = await this.getPlacesIndex();
    results.places = placesIndex.filter(place => {
      const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStateFilter = !filters?.states || filters.states.includes(place.state_id);
      const matchesTypeFilter = !filters?.place_types || filters.place_types.includes(place.type);
      return matchesSearch && matchesStateFilter && matchesTypeFilter;
    });
    
    // Search cultural items
    const culturalItemsIndex = await this.getCulturalItemsIndex();
    results.cultural_items = culturalItemsIndex.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategoryFilter = !filters?.categories || filters.categories.includes(item.category);
      const matchesStateFilter = !filters?.states || filters.states.includes(item.state_id);
      const matchesImageFilter = !filters?.has_images || !!item.primary_image_url;
      const matchesActionFilter = !filters?.has_actions || item.has_actions;
      
      return matchesSearch && matchesCategoryFilter && matchesStateFilter && 
             matchesImageFilter && matchesActionFilter;
    });
    
    results.total_results = results.states.length + results.places.length + results.cultural_items.length;
    
    return results;
  }

  // ========== ADMIN FUNCTIONS ==========
  
  async addState(state: Omit<State, 'id' | 'created_at' | 'updated_at'>): Promise<string> {
    const statesRef = collection(db, 'states');
    const docRef = await addDoc(statesRef, {
      ...state,
      created_at: new Date(),
      updated_at: new Date()
    });
    return docRef.id;
  }

  async addPlace(place: Omit<Place, 'id' | 'created_at' | 'updated_at'>): Promise<string> {
    const placesRef = collection(db, 'places');
    const docRef = await addDoc(placesRef, {
      ...place,
      created_at: new Date(),
      updated_at: new Date()
    });
    return docRef.id;
  }

  async addCulturalItem(item: Omit<CulturalItem, 'id' | 'created_at' | 'updated_at'>): Promise<string> {
    const itemsRef = collection(db, 'cultural_items');
    const docRef = await addDoc(itemsRef, {
      ...item,
      created_at: new Date(),
      updated_at: new Date()
    });
    return docRef.id;
  }

  async updateState(stateId: string, updates: Partial<State>): Promise<void> {
    const stateRef = doc(db, 'states', stateId);
    await updateDoc(stateRef, {
      ...updates,
      updated_at: new Date()
    });
  }

  async updatePlace(placeId: string, updates: Partial<Place>): Promise<void> {
    const placeRef = doc(db, 'places', placeId);
    await updateDoc(placeRef, {
      ...updates,
      updated_at: new Date()
    });
  }

  async updateCulturalItem(itemId: string, updates: Partial<CulturalItem>): Promise<void> {
    const itemRef = doc(db, 'cultural_items', itemId);
    await updateDoc(itemRef, {
      ...updates,
      updated_at: new Date()
    });
  }

  // ========== STATISTICS ==========
  
  async getDatabaseStats(): Promise<{
    total_states: number;
    total_places: number;
    total_cultural_items: number;
    total_images: number;
  }> {
    const [statesSnapshot, placesSnapshot, itemsSnapshot] = await Promise.all([
      getDocs(collection(db, 'states')),
      getDocs(collection(db, 'places')),
      getDocs(collection(db, 'cultural_items'))
    ]);
    
    let totalImages = 0;
    itemsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      totalImages += data.images?.length || 0;
    });
    
    return {
      total_states: statesSnapshot.size,
      total_places: placesSnapshot.size,
      total_cultural_items: itemsSnapshot.size,
      total_images: totalImages
    };
  }
}

// Export singleton instance
export const databaseService = new DatabaseService();
