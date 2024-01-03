//import * as firebase from 'firebase'
// var config = {
//     apiKey: "AIzaSyAWZObGQDfGbplDsJ0QXZGfZ22Ph9vlkgc",
//     authDomain: "photowall-45333.firebaseapp.com",
//     databaseURL: "https://photowall-45333.firebaseio.com",
//     projectId: "photowall-45333",
//     storageBucket: "photowall-45333.appspot.com",
//     messagingSenderId: "586411564955"
//   }
// For Firebase v9+
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


  const config = {
    apiKey: "AIzaSyBSdiFQS3FUKQzkoj-i_1qIAeYqnSaSx2o",
    authDomain: "photowall-f5a69.firebaseapp.com",
    databaseURL: "https://photowall-f5a69-default-rtdb.firebaseio.com",
    projectId: "photowall-f5a69",
    storageBucket: "photowall-f5a69.appspot.com",
    messagingSenderId: "946831761540",
    appId: "1:946831761540:web:e692cf24b72f480032e2d1",
    measurementId: "G-9Q2W5YQEW0"
  };
  const app = initializeApp(config);
  const database = getDatabase(app);
  // firebase.initializeApp(config)

  // const database = firebase.database()

  export {database}