import * as ActionTypes from '../Types';

const initialState = {
  cardVisible: false,
  defaultCake: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CAKE:
      return state;
    case ActionTypes.REMOVE_CAKE:
      return state;
    case ActionTypes.SHOW_CART:
      return {
        ...state,
        cardVisible: true,
      };
    case ActionTypes.HIDE_CART:
      return {
        ...state,
        cardVisible: false,
      };
    case ActionTypes.SET_TO_DEFAULT:
      return {
        ...state,
        defaultCake: [],
      };
    case ActionTypes.PAYMENT_DONE:
      return state;
    case ActionTypes.PAYMENT_ERR:
      return state;

    default:
      return state;
  }
};
