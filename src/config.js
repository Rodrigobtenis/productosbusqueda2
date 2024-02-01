// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxnO9m8E4tjRSBAaHtCLV_lYwiQQqSvrs",
  authDomain: "productosbusqueda.firebaseapp.com",
  projectId: "productosbusqueda",
  storageBucket: "productosbusqueda.appspot.com",
  messagingSenderId: "12437204011",
  appId: "1:12437204011:web:c64d83c82dfdfe02e98e6e",
  measurementId: "G-H0K6BFM01H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);


