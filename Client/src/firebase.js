import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC-39cIipl9OXTqNyiXBblNdl7urDYFJ2M",
    authDomain: "clone-c7d5b.firebaseapp.com",
    projectId: "clone-c7d5b",
    storageBucket: "clone-c7d5b.appspot.com",
    messagingSenderId: "308140288964",
    appId: "1:308140288964:web:29e6c1779e831e3c9f5291",
    measurementId: "G-NGQ6ZL0WME"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };