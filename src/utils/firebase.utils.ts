import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, User} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

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

//set the type of the messages array
export type Message = {
  from: String;
  content: String;
}
export type Messages = Message[]

//get google provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  display: 'popup'
})
//get the auth object
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);

export const db = getFirestore()

export const createUserDocumentFromAuth  = async(userAuth: User) => {
  const userDoc = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDoc);

  // if user data does not exist 
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const messages: Messages = [];
    try {
      await setDoc(userDoc, {
        displayName,
        email,
        messages
      })
    }
    catch(error){
      console.log('error creating document')
    }
  }

  // if user data exists
  return userDoc;
}