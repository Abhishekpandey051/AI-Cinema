import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h3 className="py-6 text-lg w-1/4">{overview}</h3>
      <div>
        <button className="text-white bg-gray-500 p-4 px-12 text-xl bg-opacity-50 rounded-lg ">
          ▶ Play
        </button>
        <button className="mx-2 text-white bg-gray-500 p-4 px-12 text-xl bg-opacity-50 rounded-lg ">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
