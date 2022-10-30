import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBfgdoYAgX-vY8i08LucQ4qjgMuLQlBsJU",
    authDomain: "crwn-clothing-m218.firebaseapp.com",
    projectId: "crwn-clothing-m218",
    storageBucket: "crwn-clothing-m218.appspot.com",
    messagingSenderId: "628006208346",
    appId: "1:628006208346:web:240bbf58b60facfc442963"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);