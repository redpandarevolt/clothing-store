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

firebase.initializeApp(config);

export  const auth =  firebase.auth();
export  const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;