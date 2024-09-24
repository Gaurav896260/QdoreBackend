import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwzbF2KFsPEUx_NqCyfMu2NVwR4b5cGUE",
  authDomain: "qdorhome.firebaseapp.com",
  projectId: "qdorhome",
  storageBucket: "qdorhome.appspot.com",
  messagingSenderId: "801447252152",
  appId: "1:801447252152:web:1d0650da6e47be6f18a44d",
  measurementId: "G-Z92MS0ZY46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export {
  auth,
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  GoogleAuthProvider,
  signInWithPopup,
};
