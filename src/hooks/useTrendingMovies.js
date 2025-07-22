import React, { useEffect } from "react";

import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addTrendingMovies,
} from "../utils/moviesSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addTrendingMovies(res.results));
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};
export default usePopularMovies;
