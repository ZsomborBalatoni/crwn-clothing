import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef); 
    
    if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {displayName, email, createdAt });
    } catch (error){
      console.log('error creating the user', error.message);
    }
    return userDocRef;
  };

}