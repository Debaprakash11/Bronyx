import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Firebase configuration (same as in firebase.js)
const firebaseConfig = {
  apiKey: "AIzaSyAp35817kZvT-JZyA41CzWfSz-6R7SlcpA",
  authDomain: "bronyx-299f3.firebaseapp.com",
  projectId: "bronyx-299f3",
  storageBucket: "bronyx-299f3.appspot.com",  // Correct storageBucket
  messagingSenderId: "160244140349",
  appId: "1:160244140349:web:46723699776ed2fa0d9d54",
  measurementId: "G-CVRVR157TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore functions
export { db, collection, addDoc, getDocs };
