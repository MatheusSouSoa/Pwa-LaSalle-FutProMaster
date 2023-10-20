// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCLS529ZN0FFT4SepRMLaihydb95-SCT8",
  authDomain: "matheus-mobile-lasalle.firebaseapp.com",
  databaseURL: "https://matheus-mobile-lasalle-default-rtdb.firebaseio.com",
  projectId: "matheus-mobile-lasalle",
  storageBucket: "matheus-mobile-lasalle.appspot.com",
  messagingSenderId: "325347162133",
  appId: "1:325347162133:web:58120901398760c7b9761c",
  measurementId: "G-SNXZ6TRTS7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getDatabase()
export const auth = getAuth()