import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVhneKwAHH7YyrarPwzU0ygY3tmESLn_w",
    authDomain: "crwn-db-3c20e.firebaseapp.com",
    projectId: "crwn-db-3c20e",
    storageBucket: "crwn-db-3c20e.appspot.com",
    messagingSenderId: "366861084229",
    appId: "1:366861084229:web:e5d1f42f4b70877203a52c",
    measurementId: "G-30FY5RMGGW"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;