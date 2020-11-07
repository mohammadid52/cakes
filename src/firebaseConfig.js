import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAcO3tvMYbeAmFtsbFFohxrTZ_CD0xodP4',
  authDomain: 'cakes-fc126.firebaseapp.com',
  databaseURL: 'https://cakes-fc126.firebaseio.com',
  projectId: 'cakes-fc126',
  storageBucket: 'cakes-fc126.appspot.com',
  messagingSenderId: '12090665833',
  appId: '1:12090665833:web:d4e03de5a95122a341abf8',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.firestore();
firebase.auth();
firebase.storage();

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

export { firebase as default, rrfConfig };
