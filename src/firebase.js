const { app } = require("firebase/app");
const { initializeApp } = require("firebase/app");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} = require("firebase/auth");
const { getFirestore, doc, setDoc, collection, getDoc, getDocs} = require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyD14QZpu3CE-78nZUaGNA8fPJeBYPAPvzw",
    authDomain: "tickets-de-servicio.firebaseapp.com",
    projectId: "tickets-de-servicio",
    storageBucket: "tickets-de-servicio.appspot.com",
    messagingSenderId: "1046816598720",
    appId: "1:1046816598720:web:948eb2937b49e5f4939b25",
    measurementId: "G-PDHVJZCPD8"
};

initializeApp(firebaseConfig);
let firestoreDb = getFirestore(app);
let auth = getAuth(app);

module.exports = { getAuth, getFirestore, doc, setDoc, firestoreDb, auth, collection, createUserWithEmailAndPassword, getDoc, getDocs, signInWithEmailAndPassword};