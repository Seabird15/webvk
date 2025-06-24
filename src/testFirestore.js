// testFirestore.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDOZdz0Q6WHBoIojs1oxcrkcxEClT0iZU",
  authDomain: "sitiovks.firebaseapp.com",
  projectId: "sitiovks",
  storageBucket: "sitiovks.firebasestorage.app",
  messagingSenderId: "472095500341",
  appId: "1:472095500341:web:b1eefdc014e9fe26b2a97c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function pruebaEscritura() {
  try {
    const docRef = await addDoc(collection(db, "entrenamientos"), {
      name: "prueba_node",
      razon: "test desde node"
    });
    console.log("Documento escrito con ID:", docRef.id);
  } catch (error) {
    console.error("Error escribiendo en Firestore:", error);
  }
}

pruebaEscritura();
