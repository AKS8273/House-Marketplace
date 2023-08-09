// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClK1wIlYiVK92PyfKgpiM9-1idBCubNF4",
  authDomain: "house-market-36dd0.firebaseapp.com",
  projectId: "house-market-36dd0",
  storageBucket: "house-market-36dd0.appspot.com",
  messagingSenderId: "933704046340",
  appId: "1:933704046340:web:79968ec15b054b53bc6251"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();