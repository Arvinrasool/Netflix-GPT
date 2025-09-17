// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY9_uzoUELrCu6oqYGBXc-DBM1Qo5tuqI",
  authDomain: "netflix-gpt-c6bc6.firebaseapp.com",
  projectId: "netflix-gpt-c6bc6",
  storageBucket: "netflix-gpt-c6bc6.firebasestorage.app",
  messagingSenderId: "538574132893",
  appId: "1:538574132893:web:01e630d426cf43e9592674",
  measurementId: "G-6LC5JT45RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);