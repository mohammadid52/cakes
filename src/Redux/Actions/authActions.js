import Firebase from '../../firebaseConfig';
import * as ActionTypes from '../Types';

export const register = (credentials) => async (dispach) => {
  dispach({ type: ActionTypes.START_LOADER });
  dispach({ type: ActionTypes.REGISTER, msg1: 'Authenticating...', msg2: 'Registered' });
  try {
    const createdUser = await Firebase.auth().createUserWithEmailAndPassword(
      credentials.email,
      credentials.password,
    );
    createdUser.user.updateProfile({
      displayName: credentials.username,
    });
    const { uid } = createdUser.user;
    const userRef = Firebase.firestore().collection('users').doc(uid);
    userRef.set({
      username: credentials.username,
      email: credentials.email,
    });
    const cakesRef = await userRef.collection('cakes').add({
      items: 0,
    });
    cakesRef.update({
      id: cakesRef.id,
    });
  } catch (error) {
    dispach({ type: ActionTypes.REGISTER_ERR, err: error.message });
  } finally {
    dispach({ type: ActionTypes.STOP_LOADER });
  }
};
export const login = (credentials) => async (dispach) => {
  dispach({ type: ActionTypes.START_LOADER });
  dispach({ type: ActionTypes.SIGN_IN, msg1: 'Authenticating...', msg2: 'Logged in' });
  try {
    await Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
  } catch (error) {
    dispach({ type: ActionTypes.SIGN_IN_ERR, err: error.message });
  } finally {
    dispach({ type: ActionTypes.STOP_LOADER });
  }
};
export const logOut = () => async (dispach) => {
  dispach({ type: ActionTypes.START_LOADER });

  try {
    await Firebase.auth().signOut();
    dispach({ type: ActionTypes.SIGN_OUT, msg: 'Logged out' });
  } catch (error) {
    dispach({ type: ActionTypes.SIGN_OUT_ERR, err: error.message });
  } finally {
    dispach({ type: ActionTypes.STOP_LOADER });
  }
};

export const signInWithGoogle = (firebase) => async (dispach) => {
  dispach({ type: ActionTypes.START_LOADER });
  try {
    firebase.login({
      provider: 'google',
      type: 'popup',
    });
  } catch (error) {
    dispach({ type: ActionTypes.SIGN_IN_ERR, err: error.message });
  } finally {
    dispach({ type: ActionTypes.STOP_LOADER });
  }
};
