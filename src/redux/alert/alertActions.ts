import { generateId } from '../../utils/generateId';
import { DispatchAlertActionType } from '../types/types';
import { SET_ALERT, REMOVE_ALERT } from './alertTypes';

  export const setAlert = (msg: string, alertType: "error" | "success" | "warning" | "info", timeout: number = 3000) => (dispatch: DispatchAlertActionType) => {
    try {
      const id = generateId();
      dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
      });
      setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    } catch (err) {
      console.log(err);
    }
};
  export const removeAlert = (id: string) => (dispatch: DispatchAlertActionType) => {
  try {
    dispatch({ type: REMOVE_ALERT, payload: id })
  } catch (err) {
    console.log(err);
  }
};