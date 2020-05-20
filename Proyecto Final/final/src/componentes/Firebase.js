// import * as firebase from 'firebase'

// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCuqJcWzd3v6M5wog6tNvpQZAo6D-BSuy0",
//     authDomain: "tpfinal-e4dfa.firebaseapp.com",
//     databaseURL: "https://tpfinal-e4dfa.firebaseio.com",
//     projectId: "tpfinal-e4dfa",
//     storageBucket: "tpfinal-e4dfa.appspot.com",
//     messagingSenderId: "412702354659",
//     appId: "1:412702354659:web:eac60f658e5704d56229d6",
//     measurementId: "G-5BPYMBQRT9"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// const db = firebase.firestore();
// // db.settings({
// //   timestampsInSnapshots: true
// // });
// firebase.auth = firebase.auth();
// firebase.db=db;

//   export default firebase;


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