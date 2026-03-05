import { useEffect } from "react"
import { useMovieStore } from "../../stor/useMovieStor"
import MovieCard from "./MovieCard"
import "../../pages/Home.css"

function MoviesArea() {

    const { movies, error, isLoading, fetchMovies } = useMovieStore()
    useEffect(() => {
        fetchMovies()
    }, [])

    if (isLoading) return <div>loading movies..</div>
    if ((error)) return <div>Error: {error}</div>
    
    return (
        <div className="movies-area">
            {
                movies && movies.updatedMoviesData && movies.updatedMoviesData.map(movie => {
                    return <MovieCard key={movie.imdbID} movie={movie} />
                })
            }
        </div>
    )
}

export default MoviesArea
