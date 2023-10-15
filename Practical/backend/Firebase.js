// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFeXYNOkfaCm9tNo7n77xZoSF6wbWuZgc",
  authDomain: "wd-practical.firebaseapp.com",
  projectId: "wd-practical",
  storageBucket: "wd-practical.appspot.com",
  messagingSenderId: "100733408315",
  appId: "1:100733408315:web:c172b82c6a6ebb1e1f381e",
  measurementId: "G-E7C06XGN77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);