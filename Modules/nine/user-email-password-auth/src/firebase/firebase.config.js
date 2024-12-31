// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMcrpcOTml3wr3QQdzO-3akkaKYmFOUWI",
  authDomain: "user-email-password-auth-4e602.firebaseapp.com",
  projectId: "user-email-password-auth-4e602",
  storageBucket: "user-email-password-auth-4e602.firebasestorage.app",
  messagingSenderId: "990194474258",
  appId: "1:990194474258:web:eee9312d4845ec9db2a7cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
