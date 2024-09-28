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
  apiKey: "AIzaSyBc6GcsUMl5JXKdXgmoauo8oAsnHh86yVg",
  authDomain: "qdore-home2.firebaseapp.com",
  projectId: "qdore-home2",
  storageBucket: "qdore-home2.appspot.com",
  messagingSenderId: "768058475197",
  appId: "1:768058475197:web:69da0985df7e4f659dadd4",
  measurementId: "G-Z694KGFY40",
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
