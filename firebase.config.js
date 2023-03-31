// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDDyBrTHPJVwlzVQNfAhr5IKFWzfOCcY4",
  authDomain: "kv-component-libraries.firebaseapp.com",
  projectId: "kv-component-libraries",
  storageBucket: "kv-component-libraries.appspot.com",
  messagingSenderId: "901896877595",
  appId: "1:901896877595:web:138acbfdf2d23cc532aabe",
  measurementId: "G-LKH8JTTVWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);