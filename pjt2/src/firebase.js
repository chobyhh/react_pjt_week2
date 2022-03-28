// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDev2rBFjyeNbdP4YWPU0vdCdckSVUzJN4",
  authDomain: "sparta-react-pjt2.firebaseapp.com",
  projectId: "sparta-react-pjt2",
  storageBucket: "sparta-react-pjt2.appspot.com",
  messagingSenderId: "609500755886",
  appId: "1:609500755886:web:cd7b6384605c474b4b7a3f",
  measurementId: "G-G9L0EBKSHY"
};


initializeApp(firebaseConfig);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();