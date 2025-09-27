// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArWhLbQTItSiPqS1JfuSNquRo16o_Tpq8",
  authDomain: "smartprep-98489.firebaseapp.com",
  projectId: "smartprep-98489",
  storageBucket: "smartprep-98489.firebasestorage.app",
  messagingSenderId: "6354338959",
  appId: "1:6354338959:web:358c5fee61b74635339cfa",
  measurementId: "G-YMRYXVRCR3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);