import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPEl2K8c77laODQqyy0dDkA2SpzWxbkt8",
  authDomain: "experience-cdbe3.firebaseapp.com",
  projectId: "experience-cdbe3",
  storageBucket: "experience-cdbe3.appspot.com",
  messagingSenderId: "896892267301",
  appId: "1:896892267301:web:your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore for metadata
export const db = getFirestore(app);

// Initialize Cloud Storage for images (blob storage)
export const storage = getStorage(app);

export default app;