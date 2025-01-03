 import "../css/Favorites.css"
 import { useMovieContext } from "../contexts/MovieContext";
 import MovieCard from "../components/MovieCard";
 import { useNavigate } from "react-router-dom";
 
 function Favorites()
 {
    const { favorites } = useMovieContext();
    const navigate = useNavigate();




    return (
       
        <div className="favorites-empty">
            {favorites.length === 0 ? (
        <div className="favorites-empty">
          <h2>No Favorites movie added yet</h2>
          <p>Start adding movies to your favorites, and they will appear here.</p>
          <button onClick={() => navigate("/")}>+</button>
        </div>
      ) : (
        <div>
          <h2>Your Favorite Movies</h2>
          <div className="favorites-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        </div>
      )}
        </div>
    );
 }

 export default Favorites;