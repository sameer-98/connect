import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2TZ5Ngcg8axrUc8oLWkxT37hiBh-CZ7c",
  authDomain: "connect-a9829.firebaseapp.com",
  projectId: "connect-a9829",
  storageBucket: "connect-a9829.appspot.com",
  messagingSenderId: "18961857456",
  appId: "1:18961857456:web:c5a68fe0368643b2dfb475"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
