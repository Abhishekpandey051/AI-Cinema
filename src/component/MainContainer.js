import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground';
const MainContainer = () => {
    const movies = useSelector(store=>store.movies.nowPlayingMovies)
   if(!movies) return
    const mainMovie = movies[0];
    console.log("From our store",mainMovie);
    const {original_title,overview , id} = mainMovie;
    return (
        <div>
            <h1>Main Container</h1>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground moviesId={id}/>
        </div>
    );
}

export default MainContainer;
