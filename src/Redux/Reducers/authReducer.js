import { message } from 'antd';
import * as ActionTypes from '../Types';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER:
      message.loading(action.msg1, state.loading).then(() => message.success(action.msg2, 1));
      return state;
    case ActionTypes.REGISTER_ERR:
      message.error(action.err, 2);
      return state;
    case ActionTypes.SIGN_IN:
      message.loading(action.msg1, state.loading).then(() => message.success(action.msg2, 1));
      return state;
    case ActionTypes.SIGN_IN_ERR:
      message.error(action.err, 2);
      return state;
    case ActionTypes.SIGN_OUT:
      message.success(action.msg, 1);
      return state;
    case ActionTypes.SIGN_OUT_ERR:
      message.error(action.err, 2);
      return state;
    case ActionTypes.START_LOADER:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.STOP_LOADER:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
