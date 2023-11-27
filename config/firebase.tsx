import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "@firebase/auth";

const url = "/class";

const firebaseConfig = {
  apiKey: "AIzaSyDtn53oGOyfga6XOMfH-yCYX2gFiD8NLvo",
  authDomain: "scan-app-d590a.firebaseapp.com",
  databaseURL:
    "https://scan-app-d590a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "scan-app-d590a",
  storageBucket: "scan-app-d590a.appspot.com",
  messagingSenderId: "452037702578",
  appId: "1:452037702578:web:01d38b3f011d7722d72aab",
  measurementId: "G-KNX9P363T2",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(appFirebase);

// Firestore
const db = getFirestore(appFirebase);

const authFirebase = getAuth();

export {database, db, authFirebase, url};
