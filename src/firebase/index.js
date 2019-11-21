import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDpvdMWjK9fUdHYwLxN9yjwKUEuhThQ3tQ",
    authDomain: "burguer-queen-b0f88.firebaseapp.com",
    databaseURL: "https://burguer-queen-b0f88.firebaseio.com",
    projectId: "burguer-queen-b0f88",
    storageBucket: "burguer-queen-b0f88.appspot.com",
    messagingSenderId: "722895939570",
    appId: "1:722895939570:web:cd1e64901543d5d877ed6b"
  };

firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();

const authUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
const logout =() => firebase.auth().signOut();

export { authUser, logout };