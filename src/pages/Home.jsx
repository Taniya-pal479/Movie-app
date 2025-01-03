import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
 

import { useState } from "react";
import "../css/Home.css";
import { useMovieContext } from "../contexts/MovieContext";

function Home() {
  const [movieAllDate, setMovieAllDate] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("movie");
  const [loading,setLoading] =useState(false);
  const [error,setError]=useState(null);
  const [debouncedQuery,setDebouncedQuery]=useState("");
  const {favorites} =useMovieContext();

  //Debounce uses
  useEffect(()=>{
    const handler =setTimeout(()=>{
      setDebouncedQuery(searchQuery);
    },300);

    return ()=>{
      clearTimeout(handler); 
    };
  },[searchQuery]);

  //feching movie when debounce changes

  

  const getMovieDate = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=da33d8b6&s=${searchKeyword}`
      );
      setMovieAllDate(response?.data?.Search || []);
    } catch (error) {
      setError("Error fetching movie data:" );
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieDate();
  }, [searchKeyword]);

   

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchKeyword(searchQuery);
  };

  const handleSearchanbtn = () => {
    setSearchKeyword(searchQuery);
  };

 

  return (
    <div className="home">
      Home
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search Movie......"
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button
          type="submit"
          className="search-btn"
           
        >
          Search
        </button>
      </form>
      <div className="movies-grid">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
          
        {movieAllDate
          .filter((movie) =>
            movie?.Title?.toLowerCase().startsWith(searchQuery.toLowerCase())
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
      </div>


      
    </div>
  );
}

export default Home;
