// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAdf0SMxcEGo_eoPQOEMop3uGpZrRuSaM0",
  authDomain: "react--blogging-app.firebaseapp.com",
  projectId: "react--blogging-app",
  storageBucket: "react--blogging-app.appspot.com",
  messagingSenderId: "855333225018",
  appId: "1:855333225018:web:8e1dbee4253f4df2ad2b03",
  measurementId: "G-JQN89YE7DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
