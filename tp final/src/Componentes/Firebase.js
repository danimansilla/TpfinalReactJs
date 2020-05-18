import * as firebase from 'firebase';

var config = {
    // apiKey: "AIzaSyAXKxi0-9qu4Z8GMXQ-zbKOfHH_YUWwy5w",
    // authDomain: "react-ca191.firebaseapp.com",
    // databaseURL: "https://react-ca191.firebaseio.com",
    // projectId: "react-ca191",
    // storageBucket: "react-ca191.appspot.com",
    // messagingSenderId: "156074816083",
    // appId: "1:156074816083:web:e937b4e9a06a414d764ca6"

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
    db.settings({
      timestampsInSnapshots: true
    });
    firebase.auth = firebase.auth();
    firebase.db=db;
    // console.log("Ingreso base");
    // console.log(firebase);
    
  }
  export default firebase;

