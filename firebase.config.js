// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_31tfgpkwWO3fSQO_4E2ax17JZ7nS7PM",
  authDomain: "kv-ui-library.firebaseapp.com",
  projectId: "kv-ui-library",
  storageBucket: "kv-ui-library.appspot.com",
  messagingSenderId: "721704927462",
  appId: "1:721704927462:web:95c1943538a0c647353b27",
  measurementId: "G-45NJS7PW8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);