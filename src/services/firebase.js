import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2qj2Re4ZRULEW0jCP5vP_jWDZK14Cn1I",
  authDomain: "dotnotes-9983d.firebaseapp.com",
  projectId: "dotnotes-9983d",
  storageBucket: "dotnotes-9983d.firebasestorage.app",
  messagingSenderId: "679046431991",
  appId: "1:679046431991:web:990c62609b5f3f0011bff2",
  measurementId: "G-7969E1V3SX"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Serviços
export const auth = getAuth(app);
export const db = getFirestore(app);