import {  useSelector } from "react-redux";
import useVideoTrailer from "../utils/useVideoTrailer";

const VideoBackground = ({ moviesId }) => {
    const trailerVideos = useSelector(store=>store.movies.trailerVideo);

 useVideoTrailer(moviesId);

  return (
    <div>
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideos?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div> 
  );
};

export default VideoBackground;
