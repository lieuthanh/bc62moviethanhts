import { act } from "react";
import { Action } from "../../../../store/types";
import api from "../../../../utils/apiUtil";
import * as ActionType from "./../duck/constants";

export const actFetchMovieDetails = (id: string) => {
  return (dispatch: any) => {
    dispatch(actMovieDetailRequest);
    //call api
    api
      .get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((response) =>
        dispatch(actMovieDetailSuccess(response.data.content))
      )
      .catch((error: any) => dispatch(actMovieDetailFailed(error)));
  };
};

const actMovieDetailRequest = (): Action => {
  return {
    type: ActionType.MOVIE_DETAIL_REQUEST,
  };
};
const actMovieDetailSuccess = (data: any) => {
  return {
    type: ActionType.MOVIE_DETAIL_SUCCESS,
    payload: data,
  };
};
const actMovieDetailFailed = (error: any) => {
  return {
    type: ActionType.MOVIE_DETAIL_FAILED,
    payload: error,
  };
};

//Action show times

// export const actFetchMovieShowTimesById = (id: string) => {
//   return (dispatch: any) => {
//     dispatch(actMovieShowTimesRequest);
//     //call api
//     api
//       .get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
//       .then((response) =>
//         dispatch(actMovieShowTimesSuccess(response.data.content))
//       )
//       .catch((error: any) => dispatch(actMovieShowTimesFailed(error)));
//   };
// };

// const actMovieShowTimesRequest = (): Action => {
//   return {
//     type: ActionType.MOVIE_SHOW_TIMES_REQUEST,
//   };
// };
// const actMovieShowTimesSuccess = (data: any) => {
//   return {
//     type: ActionType.MOVIE_SHOW_TIMES_SUCCESS,
//     payload: data,
//   };
// };
// const actMovieShowTimesFailed = (error: any) => {
//   return {
//     type: ActionType.MOVIE_SHOW_TIMES_FAILED,
//     payload: error,
//   };
// };
