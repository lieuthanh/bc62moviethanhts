import { useState, useEffect } from 'react';
import api from '../utils/apiUtil';
import { MovieDetails } from '../pages/HomeTemplate/DetailMovie/duck/types';

const MOVIE_DETAILS_KEY = 'movieDetails';

export const useMovieDetails = (id: string) => {
  const [data, setData] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const saveToLocalStorage = (movieData: MovieDetails) => {
    const saved = localStorage.getItem(MOVIE_DETAILS_KEY);
    const allMovies = saved ? JSON.parse(saved) : {};
    allMovies[id] = movieData;
    localStorage.setItem(MOVIE_DETAILS_KEY, JSON.stringify(allMovies));
  };

  const loadFromLocalStorage = (): MovieDetails | null => {
    const saved = localStorage.getItem(MOVIE_DETAILS_KEY);
    if (!saved) return null;
    const allMovies = JSON.parse(saved);
    return allMovies[id] || null;
  };

  const clearMovieDetails = () => {
    localStorage.removeItem(MOVIE_DETAILS_KEY);
  };



  useEffect(() => {
    if (!id) return;

    const savedData = loadFromLocalStorage();
    if (savedData) {
      setData(savedData);
      return;
    }

    setLoading(true);
    api.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((response) => {
        const movieData = response.data.content;
        setData(movieData);
        saveToLocalStorage(movieData);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading, error, clearMovieDetails };
};