import { RootState } from "./index";

const MOVIE_DETAILS_KEY = "movieDetails";

export const saveMovieDetailsToLocalStorage = (movieDetails: any) => {
  try {
    localStorage.setItem(MOVIE_DETAILS_KEY, JSON.stringify(movieDetails));
  } catch (error) {
    console.error("Could not save movie details to localStorage", error);
  }
};

export const loadMovieDetailsFromLocalStorage = () => {
  try {
    const serializedData = localStorage.getItem(MOVIE_DETAILS_KEY);
    if (serializedData === null) return undefined;
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Could not load movie details from localStorage", error);
    return undefined;
  }
};

export const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  
  if (action.type === "@movieDetailsReducer/SUCCESS") {
    const state: RootState = store.getState();
    saveMovieDetailsToLocalStorage(state.movieDetailsReducer.data);
  }
  
  return result;
};