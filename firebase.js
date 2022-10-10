// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBEhvio68y02jBeQURgQOnnR2jz6ePmgiw",
    authDomain: "twitter-clone-a8391.firebaseapp.com",
    projectId: "twitter-clone-a8391",
    storageBucket: "twitter-clone-a8391.appspot.com",
    messagingSenderId: "415165440231",
    appId: "1:415165440231:web:1e0eb63c8e9bb5d228c242",
    measurementId: "G-V42NF1GPMV"
  };


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };