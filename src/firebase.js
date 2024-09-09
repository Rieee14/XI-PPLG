// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA6VUg2cv-jD4Dicn5hGIRRo-pbz4IUaJU",
  authDomain: "web-kelas-eece0.firebaseapp.com",
  projectId: "web-kelas-eece0",
  storageBucket: "web-kelas-eece0.appspot.com",
  messagingSenderId: "311912131404",
  appId: "1:311912131404:web:9f8b18a9bf03fd1e103de9",
  measurementId: "G-QF15N5JJ5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();