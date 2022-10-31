import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/database';

  
const firebaseConfig = {
    // Your credentials

    apiKey: "AIzaSyAZyM1cpCNy0t_4LyhcHDJLbupN9R--vJM",

  authDomain: "mos-interface-app1.firebaseapp.com",

  databaseURL: "https://mos-interface-app1-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "mos-interface-app1",

  storageBucket: "mos-interface-app1.appspot.com",

  messagingSenderId: "798840057364",

  appId: "1:798840057364:web:a9f37563897458883c8101",

  measurementId: "G-SQXZ8299QW"
  
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;

export {auth, provider, database};


