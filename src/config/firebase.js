import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore'; 

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyCWCkRjpOrVbcr0b8b1YfiLb8SVUEO8j9w",
  authDomain: "consentimiento-b68ab.firebaseapp.com",
  projectId: "consentimiento-b68ab",
  storageBucket: "consentimiento-b68ab.appspot.com",
  messagingSenderId: "784029797289",
  appId: "1:784029797289:web:a42354669a6f9ed54d92b8"
});

/* export const timestamp = firebase.firestore.FieldValue.serverTimestamp;*/
export const firestoreApp = app.firestore(); 
export const storageApp = app.storage();
export const authApp = app.auth();


