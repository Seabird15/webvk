// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmfahTShGZxIyeaCNUbOkAepw5T-caJaU",
  authDomain: "web-vikingas.firebaseapp.com",
  projectId: "web-vikingas",
  storageBucket: "web-vikingas.firebasestorage.app",
  messagingSenderId: "537242760349",
  appId: "1:537242760349:web:bafa94b13170fd5e0e9074",
  measurementId: "G-C32KVFMW6J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

