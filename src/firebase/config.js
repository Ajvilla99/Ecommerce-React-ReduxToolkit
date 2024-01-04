// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc78CnzsqmmvaRZmFk9dMq_UcbsJtpHe4",
  authDomain: "ecommerce-react-redux-9e704.firebaseapp.com",
  projectId: "ecommerce-react-redux-9e704",
  storageBucket: "ecommerce-react-redux-9e704.appspot.com",
  messagingSenderId: "734388584048",
  appId: "1:734388584048:web:4f2f7febfd26ea0f13beb5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );