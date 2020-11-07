import * as ActionTypes from '../Types';

const initialState = {
  step: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        step: state.step + 1,
      };

    default:
      return state;
  }
};
