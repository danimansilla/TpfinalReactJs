import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCmzjF511U04RDtz9Kp4EAM8TbNBvGbk-s",
    authDomain: "reacttp-b3f91.firebaseapp.com",
    databaseURL: "https://reacttp-b3f91.firebaseio.com",
    projectId: "reacttp-b3f91",
    storageBucket: "reacttp-b3f91.appspot.com",
    messagingSenderId: "193662482724",
    appId: "1:193662482724:web:f7e86d65855e6b190e1bb1"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
    const db = firebase.firestore();
    firebase.auth = firebase.auth();
    firebase.db=db;
    
  }
  export default firebase;

