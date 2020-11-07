import * as ActionTypes from '../Types';

const initialState = {
  reloading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_RELOAD_PAGE:
      return {
        ...state,
        reloading: true,
      };
    case ActionTypes.STOP_RELOAD_PAGE:
      return {
        ...state,
        reloading: false,
      };
    default:
      return state;
  }
};
