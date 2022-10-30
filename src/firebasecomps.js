import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/database';

  
const firebaseConfig = {
    // Your credentials

apiKey: "AIzaSyB0s-fu_VdP0XXJ1zvbLVeqQgjHHqk5ZVQ",

authDomain: "testing-form-new.firebaseapp.com",

databaseURL: "https://testing-form-new-default-rtdb.asia-southeast1.firebasedatabase.app",

projectId: "testing-form-new",

storageBucket: "testing-form-new.appspot.com",

messagingSenderId: "191958925202",

appId: "1:191958925202:web:a3c3a05af8c9de21f3cb4b",

measurementId: "G-WY1CD2YD4G"
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export {auth , provider, database};


