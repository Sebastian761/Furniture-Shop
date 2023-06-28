// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import {getStorage, ref, uploadBytes, getDownloadURL, getBytes} from 'firebase/storage'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN ,
    projectId:import.meta.env.VITE_APP_FIREBASE_PROJECT_ID ,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:  import.meta.env.VITE_APP_FIREBASE_APP_ID,
    measurementId:  import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseDb = getFirestore(app)
export const firebaseAuth = getAuth(app)
export const firebaseStorage = getStorage(app)

// apiKey: import.meta.VITE_APP_FIREBASE_API_KEY,
// authDomain: import.meta.VITE_APP_FIREBASE_AUTH_DOMAIN ,
// projectId:import.meta.VITE_APP_FIREBASE_PROJECT_ID ,
// storageBucket: import.meta.VITE_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: import.meta.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId:  import.meta.VITE_APP_FIREBASE_APP_ID,
// measurementId:  import.meta.ITE_APP_FIREBASE_MEASUREMENT_ID