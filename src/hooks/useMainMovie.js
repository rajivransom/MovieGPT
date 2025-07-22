import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMainMovie = (id) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const res = await data.json();
    const trailer = res.results;

    const x = trailer.filter((ele) => ele.type === "Trailer");
    const filterData = x.length ? x[0] : trailer[0];
    dispatch(addTrailerVideo(filterData));
    console.log(filterData.key);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};
export default useMainMovie;
