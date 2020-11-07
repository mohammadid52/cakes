/* eslint-disable import/prefer-default-export */
import * as ActionTypes from '../Types';

export const increment = () => (dispatch) => dispatch({ type: ActionTypes.INCREMENT });
