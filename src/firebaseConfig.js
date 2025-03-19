import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp35817kZvT-JZyA41CzWfSz-6R7SlcpA",
  authDomain: "bronyx-299f3.firebaseapp.com",
  projectId: "bronyx-299f3",
  storageBucket: "bronyx-299f3.appspot.com",  // Fix: should be appspot.com
  messagingSenderId: "160244140349",
  appId: "1:160244140349:web:46723699776ed2fa0d9d54",
  measurementId: "G-CVRVR157TF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
