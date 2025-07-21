import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const Movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!Movies) return null;

  const mainMovie = Movies[18];
  const { original_title, overview, id } = mainMovie;
  console.log(mainMovie);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
