import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCMV-paSY-h2nu7LHLZEQ1l6fRwMWQJLok",
    authDomain: "store-again.firebaseapp.com",
    databaseURL: "https://store-again.firebaseio.com",
    projectId: "store-again",
    storageBucket: "store-again.appspot.com",
    messagingSenderId: "787537402614",
    appId: "1:787537402614:web:c133c9cb0327337b15aad7"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore()
export const dbMenuAdd = db.collection('menuItems');