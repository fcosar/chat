// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCtNN0W2LE9_zF2oj7s_Srdu8zWPT0Qa5U',
  authDomain: 'chatrooms-66e2e.firebaseapp.com',
  projectId: 'chatrooms-66e2e',
  storageBucket: 'chatrooms-66e2e.appspot.com',
  messagingSenderId: '916994433128',
  appId: '1:916994433128:web:45a642c7bec2faf5181bdd',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);