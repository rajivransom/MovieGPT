import React, { useRef, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  console.log("MovieList render:");
  console.log("typeof movies:", typeof movies);
  console.log("Array.isArray(movies):", Array.isArray(movies));
  console.log("movies:", movies);
  console.log("movies[0]:", movies?.[0]);
  if (!Array.isArray(movies) || movies.length === 0) {
    return <div>No movies available</div>;
  }
  // useEffect(() => {
  //   const scrollContainer = scrollRef.current;
  //   let scrollAmount = 0;
  //   const scrollStep = 0.4;
  //   let animationFrameId;

  //   const scroll = () => {
  //     if (!scrollContainer) return;

  //     scrollAmount += scrollStep;
  //     scrollContainer.scrollLeft += scrollStep;

  //     // Reset when reaching end
  //     if (
  //       scrollContainer.scrollLeft + scrollContainer.clientWidth >=
  //       scrollContainer.scrollWidth
  //     ) {
  //       scrollContainer.scrollLeft = 0;
  //       scrollAmount = 0;
  //     }

  //     animationFrameId = requestAnimationFrame(scroll);
  //   };

  //   animationFrameId = requestAnimationFrame(scroll);

  //   return () => cancelAnimationFrame(animationFrameId);
  // }, []);

  //https://media.themoviedb.org/t/p/w780_and_h660_face/
  return (
    <div className="px-6">
      <h1
        className="text-4xl py-4  text-white
      "
      >
        {title}
      </h1>
      <div className="flex overflow-x-scroll scrollbar-hide ">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
