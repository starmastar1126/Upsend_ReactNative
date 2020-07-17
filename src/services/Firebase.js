import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "xxxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxx.firebaseio.com",
    projectId: "xxxxxxxxx",
    storageBucket: "xxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxx",
    appId: "xxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxx"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseStorage = firebase.storage();

export default {
    firebaseApp
};