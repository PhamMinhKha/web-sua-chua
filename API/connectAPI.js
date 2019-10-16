import firebase from "@firebase/app";
import "@firebase/firestore";
if (!firebase.apps.length) {
  var app = firebase.initializeApp({
    apiKey: "AIzaSyBA1vQC1uvrkFIeiBCaz9JNldbo3dgbch0",
    authDomain: "suachuabaohanh-b99ee.firebaseapp.com",
    databaseURL: "https://suachuabaohanh-b99ee.firebaseio.com",
    projectId: "suachuabaohanh-b99ee",
    storageBucket: "suachuabaohanh-b99ee.appspot.com",
    messagingSenderId: "355440318906",
    appId: "1:355440318906:web:5f3991151dc35019"
  });
}
var db = firebase.firestore();
export default db;
