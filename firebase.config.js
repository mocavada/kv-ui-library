// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
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
if (!getApps.length) {
    initializeApp(firebaseConfig);
    if (typeof window !== "undefined") {
      if ("measurementId" in firebaseConfig) {
        getAnalytics();
      }
    }
  }

  console.log("KEEEY----", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  console.log("NOOOO----", process.env.FIREBASE_API_KEY);



