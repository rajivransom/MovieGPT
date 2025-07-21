import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import store from "..//utils/store";
import useMainMovie from "../hooks/useMainMovie";

const VideoBackground = ({ id }) => {
  const TrailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMainMovie(id);
  return (
    <div className="w-screen -top-6 bg-gradient-to-r from-black">
      <iframe
        className="w-screen aspect-video"
        // src={`https://www.youtube.com/embed/${TrailerVideo?.key}`}
        src={`https://www.youtube.com/embed/${TrailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
