import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log("POSTER PATH", posterPath);
  return (
    <div className="w-48  ">
      <img
        alt="movie"
        className="rounded-2xl px-2"
        src={IMG_CDN + posterPath}
      />
    </div>
  );
};

export default MovieCard;
