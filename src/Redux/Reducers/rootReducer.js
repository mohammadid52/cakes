import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import cakeReducer from './cakeReducer';
import homeReducer from './homeReducer';
import stepReducer from './stepReducer';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  cake: cakeReducer,
  home: homeReducer,
  step: stepReducer,
});
