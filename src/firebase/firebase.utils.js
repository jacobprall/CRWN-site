import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA8KS1EROZVaXn1oV_OfUQ-vtUVQHjzcak",
    authDomain: "crwn-db-bee90.firebaseapp.com",
    projectId: "crwn-db-bee90",
    storageBucket: "crwn-db-bee90.appspot.com",
    messagingSenderId: "180613639109",
    appId: "1:180613639109:web:779a0402e3ef0bcfdb39ac",
    measurementId: "G-CJX5947YTE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( { prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;