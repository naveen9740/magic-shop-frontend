import { publicRequest } from "../requestMethods";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logOutSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    console.log(res);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const logOut = async (dispatch) => {
  dispatch(logOutSuccess());
};
