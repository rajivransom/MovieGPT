import React, { useEffect } from "react";

import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addPopularMovies(res.results));
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};
export default usePopularMovies;
