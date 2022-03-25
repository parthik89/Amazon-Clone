import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
//import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAQA8jD33Zv--0hihHi4KqZ1q7XFfluXc",
  authDomain: "challenge-93eed.firebaseapp.com",
  projectId: "challenge-93eed",
  storageBucket: "challenge-93eed.appspot.com",
  messagingSenderId: "304097415224",
  appId: "1:304097415224:web:07102c3113067ac14a56cd",
  measurementId: "G-0MM1SXLFQL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
