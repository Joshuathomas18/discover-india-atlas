import { databaseService } from './database';
import { ImageReference } from '../types/database';
import { ref, uploadBytes, getDownloadURL, getMetadata } from 'firebase/storage';
import { storage } from '../config/firebase';

// Image Collection and Upload Script for Blob Storage

export class ImageCollectionService {
  
  // Upload single image to Firebase Storage
  async uploadImageToBlobStorage(
    imageUrl: string,
    stateId: string,
    placeId: string,
    category: string,
    itemId: string,
    imageIndex: number,
    caption: string,
    credit: string
  ): Promise<ImageReference> {
    try {
      // Fetch image from URL
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      // Create file object
      const fileName = imageUrl.split('/').pop() || `image_${imageIndex}.jpg`;
      const file = new File([blob], fileName, { type: blob.type });
      
      // Upload to Firebase Storage
      const uploadResult = await databaseService.uploadImage(
        file,
        stateId,
        placeId,
        category,
        itemId,
        imageIndex
      );
      
      return {
        storage_path: uploadResult.storage_path,
        download_url: uploadResult.download_url,
        caption: caption,
        credit: credit,
        alt_text: `${itemId} - ${caption}`,
        uploaded_at: uploadResult.metadata.uploaded_at
      };
      
    } catch (error) {
      console.error(`Failed to upload image for ${itemId}:`, error);
      throw error;
    }
  }

  // Batch upload images for a cultural item
  async uploadItemImages(
    imageUrls: string[],
    stateId: string,
    placeId: string,
    category: string,
    itemId: string,
    captions: string[],
    credits: string[]
  ): Promise<ImageReference[]> {
    const uploadPromises = imageUrls.map((url, index) => 
      this.uploadImageToBlobStorage(
        url,
        stateId,
        placeId,
        category,
        itemId,
        index,
        captions[index] || `Image ${index + 1}`,
        credits[index] || 'Unknown'
      )
    );
    
    return Promise.all(uploadPromises);
  }

  // Upload banner image for state or place
  async uploadBannerImage(
    imageUrl: string,
    type: 'state' | 'place',
    id: string,
    caption: string,
    credit: string
  ): Promise<ImageReference> {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      const fileName = imageUrl.split('/').pop() || `${type}_${id}_banner.jpg`;
      const file = new File([blob], fileName, { type: blob.type });
      
      // Upload to banners folder
      const storagePath = `banners/${type}_${id}_banner.${fileName.split('.').pop()}`;
      const imageRef = ref(storage, storagePath);
      
      const snapshot = await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      const metadata = await getMetadata(snapshot.ref);
      
      return {
        storage_path: storagePath,
        download_url: downloadURL,
        caption: caption,
        credit: credit,
        alt_text: `${type} banner for ${id}`,
        uploaded_at: new Date(metadata.timeCreated)
      };
      
    } catch (error) {
      console.error(`Failed to upload banner for ${type} ${id}:`, error);
      throw error;
    }
  }

  // Get images from Unsplash API
  async getUnsplashImages(query: string, count: number = 3): Promise<{
    urls: string[];
    credits: string[];
  }> {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    if (!apiKey) {
      throw new Error('Unsplash API key not configured');
    }
    
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&client_id=${apiKey}`
      );
      
      const data = await response.json();
      
      return {
        urls: data.results.map((photo: any) => photo.urls.regular),
        credits: data.results.map((photo: any) => `Unsplash/${photo.user.name}`)
      };
      
    } catch (error) {
      console.error('Failed to fetch from Unsplash:', error);
      throw error;
    }
  }

  // Get images from Pexels API
  async getPexelsImages(query: string, count: number = 3): Promise<{
    urls: string[];
    credits: string[];
  }> {
    const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
    if (!apiKey) {
      throw new Error('Pexels API key not configured');
    }
    
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${count}`,
        {
          headers: {
            'Authorization': apiKey
          }
        }
      );
      
      const data = await response.json();
      
      return {
        urls: data.photos.map((photo: any) => photo.src.medium),
        credits: data.photos.map((photo: any) => `Pexels/${photo.photographer}`)
      };
      
    } catch (error) {
      console.error('Failed to fetch from Pexels:', error);
      throw error;
    }
  }

  // Auto-collect images for a cultural item
  async autoCollectImages(
    itemName: string,
    placeName: string,
    stateName: string,
    category: string,
    count: number = 3
  ): Promise<{
    urls: string[];
    credits: string[];
  }> {
    // Create search queries
    const queries = [
      `${itemName} ${placeName}`,
      `${itemName} ${stateName}`,
      `${category} ${placeName}`,
      `${itemName} India`
    ];
    
    // Try Unsplash first
    try {
      for (const query of queries) {
        const result = await this.getUnsplashImages(query, count);
        if (result.urls.length > 0) {
          return result;
        }
      }
    } catch (error) {
      console.log('Unsplash failed, trying Pexels...');
    }
    
    // Try Pexels as fallback
    try {
      for (const query of queries) {
        const result = await this.getPexelsImages(query, count);
        if (result.urls.length > 0) {
          return result;
        }
      }
    } catch (error) {
      console.log('Pexels also failed');
    }
    
    // Return empty if both fail
    return {
      urls: [],
      credits: []
    };
  }

  // Process and upload images for entire cultural item
  async processCulturalItemImages(
    itemData: {
      id: string;
      name: string;
      place_id: string;
      state_id: string;
      category: string;
    },
    placeName: string,
    stateName: string
  ): Promise<ImageReference[]> {
    try {
      // Auto-collect images
      const imageData = await this.autoCollectImages(
        itemData.name,
        placeName,
        stateName,
        itemData.category,
        3
      );
      
      if (imageData.urls.length === 0) {
        console.warn(`No images found for ${itemData.name}`);
        return [];
      }
      
      // Upload to blob storage
      const captions = imageData.urls.map((_, index) => `${itemData.name} - Image ${index + 1}`);
      
      return await this.uploadItemImages(
        imageData.urls,
        itemData.state_id,
        itemData.place_id,
        itemData.category,
        itemData.id,
        captions,
        imageData.credits
      );
      
    } catch (error) {
      console.error(`Failed to process images for ${itemData.name}:`, error);
      return [];
    }
  }
}

// Export singleton instance
export const imageCollectionService = new ImageCollectionService();
