import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSBKZhBeCd75ak_3KIj7S47uzdXKys-ic",
  authDomain: "disney-clone-8e959.firebaseapp.com",
  projectId: "disney-clone-8e959",
  storageBucket: "disney-clone-8e959.appspot.com",
  messagingSenderId: "266328930301",
  appId: "1:266328930301:web:0120361e195ab8f23f8b94",
  measurementId: "G-VFJQPRL7VB",
};
//initialzing firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
//database
const db = firebaseApp.firestore();
//authentication for login and logout
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const storage = firebase.storage();

export default db;
