import * as ActionType from "./constants";
import { Movie } from "./types";
import { Action } from "../../../../store/types";
import api from "../../../../utils/apiUtil";

export const actFetchListData = () => {
    return (dispatch: any) => { 
        dispatch(actListMovieRequest());
        api.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((result)=>{
                dispatch(actListMovieSuccess(result.data.content));
            })
            .catch((error) => {
                dispatch(actListMovieFailed(error));
            });
    };
};

const actListMovieRequest = ():Action => {
    return {
        type:ActionType.LIST_MOVIE_REQUEST,
    }
}

const actListMovieSuccess = (data: Movie[]):Action => {
    return {
        type: ActionType.LIST_MOVIE_SUCCESS,
        payload: data,
    }
}

const actListMovieFailed = (error: any) => {
    return {
        type: ActionType.LIST_MOVIE_FAILED,
        payload: error,
    }
}

