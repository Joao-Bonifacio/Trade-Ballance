import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBrzx_6oW80_dcdY02vRQYh4DrghFQIv0Y",
    authDomain: "trade-ballance.firebaseapp.com",
    projectId: "trade-ballance",
    storageBucket: "trade-ballance.appspot.com",
    messagingSenderId: "969852852215",
    appId: "1:969852852215:web:1fcfce2ed2a9f3e96000f2",
    measurementId: "G-Z84TDJ3Q1P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);