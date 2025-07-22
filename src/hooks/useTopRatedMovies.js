import React, { useEffect } from "react";

import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
} from "../utils/moviesSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addTopRatedMovies(res.results));
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};
export default usePopularMovies;
