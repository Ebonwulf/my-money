import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCnI2gswrgLMoZHW0zYMB_Ph8M5xq-o5tw',
  authDomain: 'mymoney-cc256.firebaseapp.com',
  projectId: 'mymoney-cc256',
  storageBucket: 'mymoney-cc256.appspot.com',
  messagingSenderId: '44043871968',
  appId: '1:44043871968:web:4c6d41b54b76b0966b9285',
};

// init firebase
firebase.initializeApp(firebaseConfig);
// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
