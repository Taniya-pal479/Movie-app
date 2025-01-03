import React from 'react'
import "../css/MovieCard.css"
import { useMovieContext } from '../contexts/MovieContext'

function MovieCard({movie}) {
  const {isFavorites,addToFavorites,removeFromFavorites}=useMovieContext()
  const favorite=isFavorites(movie.imdbID)

    function onFavoriteClick(e)
    {
        alert("Movie is succesfully added to favorites ❤︎") 
        e.preventDefault() 
        if(favorite) removeFromFavorites(movie.imdbID)
        else addToFavorites(movie)
    }
  return (
    <div  className="movie-card"> 
    <div className="movie-poster">
         <img
         src={movie?.Poster}
         alt='image'
         >
         </img>
        <div className="movie-overlay">
            <button className={`favorite-btn ${favorite ? "active" : ""}`}  onClick={onFavoriteClick}>❤︎ </button>
        </div>
    </div>
    <div className="movie-info">
          <h3>
            {movie?.Title}
          </h3>
          <p>{movie?.Year}
            </p>
    </div>

    </div>
  );
}

export default MovieCard