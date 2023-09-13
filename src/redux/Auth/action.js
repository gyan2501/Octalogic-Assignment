import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const loginAction = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      localStorage.setItem("token",res.data.token)
    })
    .catch(() => {
      dispatch({ type: LOGIN_FAILURE });
    });
};