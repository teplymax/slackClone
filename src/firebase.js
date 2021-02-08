import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmwMSXdTVrtabVbayCSoOlhUujOY5FNUI",
  authDomain: "slack-clone-app-4e387.firebaseapp.com",
  databaseURL: "https://slack-clone-app-4e387.firebaseio.com",
  projectId: "slack-clone-app-4e387",
  storageBucket: "slack-clone-app-4e387.appspot.com",
  messagingSenderId: "453756002083",
  appId: "1:453756002083:web:c0a8395b22248b5c177696",
  measurementId: "G-3FZ3DWR4KE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export { auth, provider };
