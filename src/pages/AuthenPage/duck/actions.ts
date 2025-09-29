import { act } from "react";

import * as ActionType from "./../duck/constants";
import api from "../../../utils/apiUtil";
import { Action } from "../../../store/types";

export const actFetchUserLogin = (user: {
  taikhoan: string;
  matkhau: string;
}) => {
  return (dispatch: any) => {
    dispatch(actUserLoginRequest);
    //call api
    api
      .post("/QuanLyNguoiDung/DangNhap", user)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.content));
        dispatch(actUserLoginSuccess(response.data.content));
      })
      .catch((error: any) => dispatch(actUserLoginFailed(error)));
  };
};

const actUserLoginRequest = (): Action => {
  return {
    type: ActionType.USER_LOGIN_REQUEST,
  };
};
const actUserLoginSuccess = (data: any) => {
  return {
    type: ActionType.USER_LOGIN_SUCCESS,
    payload: data,
  };
};
const actUserLoginFailed = (error: any) => {
  return {
    type: ActionType.USER_LOGIN_FAILED,
    payload: error,
  };
};
