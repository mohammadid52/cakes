import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.firestore();
firebase.auth();

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

export default firebase;
