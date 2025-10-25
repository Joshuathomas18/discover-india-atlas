import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import admin from 'firebase-admin';

// Firebase Admin SDK Configuration
const serviceAccount = {
  type: "service_account",
  project_id: "experience-cdbe3",
  private_key_id: "b6f97579bc5ec937580307edb4419d8309c1d719",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZx+jqnjDK7QIS\nnT0UY7DEWR9zCe0hFdHBYyHInmjlE3k6tYBqIu+0IfNcoEZrL881a4mJ8PwFDlPc\nA3nGIubnkbekEfKDzBmTXclSySSta2A+hK6KZQAItnaffrDLcuJy0NBdOjMJN7kB\npMVUiXJaJxPMZCtRmK2rxq3wdFARKPQLQrUVyv2eF0GhmlbRrtmUAmue9xYMqUVC\n8/rQ3gVnaBEUviHpr/bIXI8A9EqZJHYCsmz83AXCpWp8HpYedMXvl67xqyW8JeeV\nDB5wllHhwgxmc/D5bGZ7L/DyrZXa5oTnk6qTSEHQDmGwhKkKquadYbfNtxnYB3mZ\nhcM3ekG3AgMBAAECggEAFt0ymmM2Sy+73nlsnrXiqpKSxzCdGTKhvXRraRUcfSRg\nv2Wr0DjPwrEnzCs1iW5RClI6c+V9iAhbjIc+4yrp5Bj71zldJTIp4zte9haRB7X0\nukuSyYvWB5QkexVBeXKbzKMYpRkFn6uefEowv3HYtBdTMEu58oydeyHWRB7qAwsA\ngyjhpOAzz8qoLN7ytwRje+XBuS0Hu+BCcmqok+J7wvh34Civ/c40HG2G+31IkQPB\nmLrJ83NSHgwO0sjUft9e5Nwqrm+KvDHM/gi9AH1+SK7lo6hrkrm3HeKUYSbbcZtc\n4wZ+49bVRGUlb2+iqYtkNxe6vyY6Q5saJrXFbdZwoQKBgQD4jJfAS0FI0orNRtO/\ncuTiDmvDyZEJkopUCBCbkP18/qZ35bs6totiaFWZjua0WN9XaqmaWZsM0caSoklw\nVJ8gf6RxByUqhCgZ0eOV5Hv2c2PsArTUcfm3CjqfdLjlqtsv6CNRAmtU+0hFcFqo\n7d1T+tfFVpzkz9X23flHrGpF4QKBgQDgTzI1ofhG+uUsxJ+5zmel/dTOApOckCW9\nNWo1gIo1RdRM58bm4j+dAIzGkIizk84vOctekBUQ7OuJEmGEhwj7PujcE9oBjbuR\nrgj2Vd/gdO2LxA24a1ilhZ6GKv6xeP64Hs7zZxccvqhjesfKOwzLtd6nZ8r118Fh\nB8m4L5hKlwKBgQDNxwDAiM21L/MQ/ynCoKoU6mGYSGKXLUbvSXoOgh0MhnxmWcII\nWyfNQppUNzaUa9wFMN7YVoWDOI6RymDI6paQPn1zwrmnmKDmt5oX+IIVSfWZaagz\nF2XqgEKG0AlgxHMSF7xdjoY0ZpKwQtQcdkq/A7fuvsXIvrXj3GVNTNbzoQKBgD0D\nDaMs9T1JTUDKErAVhnfN/S4z4Ta6tqkqeEMpPW6UGdT5Tk7Kx4bK+X+hHK3LzE9o\nJvsHsdMyvjZAe6nymOzOBcSm2auGg7hyYBmw7f49j8duglThTfFn0OCpnTFkudQW\n/S+ToOO+sEquwN0vBqH6TB+4yanpD752wdWJjKDtAoGBALZQ5zJTrGXV2s+VsLLc\nOqADPqEYEThmqX9Jw/w7AM0KLXkdnJmJyKkiDq0HmEtZYZrvLlcVonT0fcX7UJb1\nEayLgrFIPOwJwzaYS+xSINpQRfH1/RH3r5Y+acCr9eRuOmnJe2kmFGXiUdn7fBFo\nxicPjnFtxOQT8UVPYsUDLB6e\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-fbsvc@experience-cdbe3.iam.gserviceaccount.com",
  client_id: "100401695358929804918",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40experience-cdbe3.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

// Initialize Firebase Admin SDK
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount as admin.ServiceAccount),
    projectId: 'experience-cdbe3',
    storageBucket: 'experience-cdbe3.appspot.com'
  });
}

// Export Firestore and Storage instances
export const adminDb = getFirestore();
export const adminStorage = getStorage();

// Database Admin Service for bulk operations
export class DatabaseAdminService {
  
  // Batch upload states
  async uploadStates(states: any[]): Promise<void> {
    const batch = adminDb.batch();
    
    states.forEach(state => {
      const stateRef = adminDb.collection('states').doc(state.id);
      batch.set(stateRef, {
        ...state,
        created_at: admin.firestore.FieldValue.serverTimestamp(),
        updated_at: admin.firestore.FieldValue.serverTimestamp()
      });
    });
    
    await batch.commit();
    console.log(`✅ Uploaded ${states.length} states`);
  }

  // Batch upload places
  async uploadPlaces(places: any[]): Promise<void> {
    const batch = adminDb.batch();
    
    places.forEach(place => {
      const placeRef = adminDb.collection('places').doc(place.id);
      batch.set(placeRef, {
        ...place,
        created_at: admin.firestore.FieldValue.serverTimestamp(),
        updated_at: admin.firestore.FieldValue.serverTimestamp()
      });
    });
    
    await batch.commit();
    console.log(`✅ Uploaded ${places.length} places`);
  }

  // Batch upload cultural items
  async uploadCulturalItems(items: any[]): Promise<void> {
    const batch = adminDb.batch();
    
    items.forEach(item => {
      const itemRef = adminDb.collection('cultural_items').doc(item.id);
      batch.set(itemRef, {
        ...item,
        created_at: admin.firestore.FieldValue.serverTimestamp(),
        updated_at: admin.firestore.FieldValue.serverTimestamp()
      });
    });
    
    await batch.commit();
    console.log(`✅ Uploaded ${items.length} cultural items`);
  }

  // Get database statistics
  async getStats(): Promise<any> {
    const [statesSnapshot, placesSnapshot, itemsSnapshot] = await Promise.all([
      adminDb.collection('states').get(),
      adminDb.collection('places').get(),
      adminDb.collection('cultural_items').get()
    ]);

    return {
      states: statesSnapshot.size,
      places: placesSnapshot.size,
      cultural_items: itemsSnapshot.size
    };
  }

  // Clear all data (for testing)
  async clearAllData(): Promise<void> {
    console.log('⚠️ Clearing all data...');
    
    // Delete cultural items
    const itemsSnapshot = await adminDb.collection('cultural_items').get();
    const itemsBatch = adminDb.batch();
    itemsSnapshot.docs.forEach(doc => itemsBatch.delete(doc.ref));
    await itemsBatch.commit();
    
    // Delete places
    const placesSnapshot = await adminDb.collection('places').get();
    const placesBatch = adminDb.batch();
    placesSnapshot.docs.forEach(doc => placesBatch.delete(doc.ref));
    await placesBatch.commit();
    
    // Delete states
    const statesSnapshot = await adminDb.collection('states').get();
    const statesBatch = adminDb.batch();
    statesSnapshot.docs.forEach(doc => statesBatch.delete(doc.ref));
    await statesBatch.commit();
    
    console.log('✅ All data cleared');
  }
}

export const databaseAdminService = new DatabaseAdminService();
