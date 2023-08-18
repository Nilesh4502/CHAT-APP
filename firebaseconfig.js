// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnuumrDss6anXK4agJFfAIlukPTDCV74k",
  authDomain: "fir-contact-165a0.firebaseapp.com",
  databaseURL: "https://fir-contact-165a0-default-rtdb.firebaseio.com",
  projectId: "fir-contact-165a0",
  storageBucket: "fir-contact-165a0.appspot.com",
  messagingSenderId: "58692561279",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export {auth,db}
