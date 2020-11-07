import * as ActionTypes from '../Types';

export const startReload = () => (dispatch) => {
  dispatch({ type: ActionTypes.START_RELOAD_PAGE });
};
export const stopReload = () => (dispatch) => {
  dispatch({ type: ActionTypes.STOP_RELOAD_PAGE });
};
