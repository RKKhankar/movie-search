import MovieCard from "./MovieCard";

function MovieList({movies}){
    return(
        <div>
            {movies.length === 0 ? (
                <p>No movies found.</p>

            ):(
                <div style={{display:"flex", flexWrap:"wrap", gap:"1rem"}}>
                    {movies.map((movie)=>(
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );

}

export default MovieList;