import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App(){
  const [movies, setMovies] = useState([]);

  const searchMovies = async(query) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`);
    const data = await response.json();
    if (data.Search){
      setMovies(data.Search);
    }else{
      setMovies([]);
    }
  };

  return(
    <div style={{padding: "2rem"}}>
      <h1>Movie Search App</h1>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;