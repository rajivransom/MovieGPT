import React, { useEffect } from "react";

import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addNowPlayingMovies(res.results));
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};
export default useNowPlayingMovies;
