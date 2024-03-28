// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEa-dwOXzQq8dgLn1yUJ8ArSwhEGkyoCA",
  authDomain: "enigma-fest-bc921.firebaseapp.com",
  projectId: "enigma-fest-bc921",
  storageBucket: "enigma-fest-bc921.appspot.com",
  messagingSenderId: "789058192275",
  appId: "1:789058192275:web:993efc47c5678ef5321e66",
  measurementId: "G-1SN4M7NGGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);