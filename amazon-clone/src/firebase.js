import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBve6DMiQlnNeiqmNDEqDtQJEFIjzh0WbU",
    authDomain: "clone-b67b9.firebaseapp.com",
    databaseURL: "https://clone-b67b9.firebaseio.com",
    projectId: "clone-b67b9",
    storageBucket: "clone-b67b9.appspot.com",
    messagingSenderId: "890988206096",
    appId: "1:890988206096:web:9d058a8cb4166bb60b5295",
    measurementId: "G-E8LW9TX2HP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore(); //ititalized database

  const auth =  firebase.auth(); //handles authercation

  export {db, auth};
  
  