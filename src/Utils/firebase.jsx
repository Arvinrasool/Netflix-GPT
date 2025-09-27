// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7qiuK8in0zmbL2ex2G_8CHHkbGIlOiuI",
  authDomain: "moviegpt-b6afa.firebaseapp.com",
  projectId: "moviegpt-b6afa",
  storageBucket: "moviegpt-b6afa.firebasestorage.app",
  messagingSenderId: "304611001548",
  appId: "1:304611001548:web:0816abd28a5964d44dee69",
  measurementId: "G-5QWH0SLR82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();