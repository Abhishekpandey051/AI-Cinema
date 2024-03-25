import { useEffect } from "react";
import { API_Option } from "./constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "./movieSlice";

const useVideoTrailer = (moviesId) => {
  const dispatch = useDispatch();
  const fetchMovieTrailer = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          moviesId +
          "/videos?language=en-US",
        API_Option
      );
      const response = await data.json();

      const filterData = response.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : response.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.log("Not found");
    }
  };
  useEffect(() => {
    fetchMovieTrailer();
  }, []);
};

export default useVideoTrailer;
