import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="w-screen aspect-video pt-[16%] px-12 absolute bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold w-1/2 py-4 text-white">{title}</h1>
        <p className="text-white w-1/3">{overview}</p>
        <div className="flex gap-4 mt-4">
          <button className="bg-white text-black px-6 py-2 rounded-md font-bold hover:bg-gray-200 transition duration-200 flex items-center gap-2">
            ▶ Play
          </button>
          <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded-md font-bold hover:bg-opacity-90 transition duration-200 flex items-center gap-2">
            ℹ More Info
          </button>
          <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded-md font-bold hover:bg-opacity-90 transition duration-200 flex items-center gap-2">
            ℹ AI Search
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
