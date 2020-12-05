import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

        apiKey: "AIzaSyDY-9XvGGHsyCRNE0sTloMIioWD_vDwEek",
            authDomain: "clothing-store-4170d.firebaseapp.com",
        projectId: "clothing-store-4170d",
        storageBucket: "clothing-store-4170d.appspot.com",
        messagingSenderId: "683784724464",
        appId: "1:683784724464:web:c5422aed272aece99a8735"

};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef= firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt= new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
          console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export  const auth =  firebase.auth();
export  const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;