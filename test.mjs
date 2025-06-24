// testFirestore.mjs
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd_BWd3X9PIM39Jx35fRT7bb4_JXEdbFA",
  authDomain: "test-9c8dc.firebaseapp.com",
  projectId: "test-9c8dc",
  storageBucket: "test-9c8dc.appspot.com",  // ojo, corregí el storageBucket a .appspot.com
  messagingSenderId: "407243243556",
  appId: "1:407243243556:web:2c4eae69558d5cf95118b1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function listarDocumentos() {
  try {
    const snapshot = await getDocs(collection(db, "testCollection"));
    if (snapshot.empty) {
      console.log("No hay documentos en la colección 'testCollection'.");
    } else {
      snapshot.forEach(doc => {
        console.log(doc.id, doc.data());
      });
    }
  } catch (error) {
    console.error("Error obteniendo documentos:", error);
  }
}

listarDocumentos();
