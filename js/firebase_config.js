// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrzx_6oW80_dcdY02vRQYh4DrghFQIv0Y",
  authDomain: "trade-ballance.firebaseapp.com",
  projectId: "trade-ballance",
  storageBucket: "trade-ballance.appspot.com",
  messagingSenderId: "969852852215",
  appId: "1:969852852215:web:1fcfce2ed2a9f3e96000f2",
  measurementId: "G-Z84TDJ3Q1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);