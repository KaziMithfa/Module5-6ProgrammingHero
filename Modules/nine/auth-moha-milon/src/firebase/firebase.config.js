// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEzohf_MSYpkQt0pkoszVxdez6E1grOuw",
  authDomain: "auth-moha-milon-6eed9.firebaseapp.com",
  projectId: "auth-moha-milon-6eed9",
  storageBucket: "auth-moha-milon-6eed9.firebasestorage.app",
  messagingSenderId: "695239506128",
  appId: "1:695239506128:web:adabe52aba482f03cd46d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
