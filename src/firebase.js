// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBEWicBENcwObRn9ALTWee_Vrw8xBjW_XE",
  authDomain: "clone-aeadf.firebaseapp.com",
  projectId: "clone-aeadf",
  storageBucket: "clone-aeadf.appspot.com",
  messagingSenderId: "860499793896",
  appId: "1:860499793896:web:27689af8d9a083868a765d",
  measurementId: "G-H16YNCMHLT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
