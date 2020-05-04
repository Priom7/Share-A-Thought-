import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyBL8Cwx76Q4v8AgpINHzXpFSZx5J1iOawk",
    authDomain: "share-a-thought.firebaseapp.com",
    databaseURL: "https://share-a-thought.firebaseio.com",
    projectId: "share-a-thought",
    storageBucket: "share-a-thought.appspot.com",
    messagingSenderId: "444444331335",
    appId: "1:444444331335:web:e76a5e998f7492939ed062",
    measurementId: "G-XGE0RQKQVF",
  };
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;