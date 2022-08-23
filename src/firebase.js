import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyC0jsEt0c4gLqLPuvr9IUi_it9QieCsZos",
    authDomain: "messenger-app-35020.firebaseapp.com",
    projectId: "messenger-app-35020",
    storageBucket: "messenger-app-35020.appspot.com",
    messagingSenderId: "115373173082",
    appId: "1:115373173082:web:07fc0e109d972300afab63",
  })
  .auth();
