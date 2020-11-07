import { notification } from 'antd';

import * as ActionTypes from '../Types';
import Firebase from '../../firebaseConfig';

const userRef = Firebase.firestore().collection('users');
export const addCakeToCart = (uid, cake) => (dispatch) => {
  userRef
    .doc(uid)
    .collection('cart')
    .add({
      ...cake,
      quantity: 1,
    })
    .then((doc) => doc.update({ cakeId: doc.id }));
  dispatch({ type: ActionTypes.ADD_CAKE });
};
export const removeCakeFromCart = (uid, cakeId) => (dispatch) => {
  userRef.doc(uid).collection('cart').doc(cakeId).delete();
  dispatch({ type: ActionTypes.REMOVE_CAKE });
};

export const showCart = () => (dispatch) => {
  dispatch({ type: ActionTypes.SHOW_CART });
};

export const hideCart = () => (dispatch) => {
  dispatch({ type: ActionTypes.HIDE_CART });
};
export const setToDefault = () => (dispatch) => {
  dispatch({ type: ActionTypes.SET_TO_DEFAULT });
};

export const paymentDone = (duration) => (dispatch) => {
  dispatch({ type: ActionTypes.PAYMENT_DONE });
  notification.success({
    duration,
    message: 'Payment Successfull',
    description: 'An invoice has been sent to your email inbox.',
  });
};
export const paymentErr = (duration) => (dispatch) => {
  dispatch({ type: ActionTypes.PAYMENT_ERR });
  notification.error({
    duration,
    message: 'Payment Failed',
    description: 'An error has been occurred. Please try again after sometime.',
  });
};
