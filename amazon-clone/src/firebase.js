import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdFidY-uU4JOFTQaggRGubZOjkSl7ehUw",
  authDomain: "react-f72ef.firebaseapp.com",
  databaseURL: "https://react-f72ef.firebaseio.com",
  projectId: "react-f72ef",
  storageBucket: "react-f72ef.appspot.com",
  messagingSenderId: "816796975419",
  appId: "1:816796975419:web:2f6727a14fb33e1e85371e",
  measurementId: "G-BG23RMCM9D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //ititalized database

const auth = firebase.auth(); //handles authercation

export { db, auth };
