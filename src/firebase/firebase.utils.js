import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhmBDouo0tWo-JuPvv9oNTBalw6PmxZ_I",
  authDomain: "wxf-online-store.firebaseapp.com",
  databaseURL: "https://wxf-online-store.firebaseio.com",
  projectId: "wxf-online-store",
  storageBucket: "wxf-online-store.appspot.com",
  messagingSenderId: "843381460270",
  appId: "1:843381460270:web:0ccbdd0f82e89c543afebf",
  measurementId: "G-XXJ2YNY9T4"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);
export const auth = firebase.auth();
