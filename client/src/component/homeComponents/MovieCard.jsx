import { Link } from "react-router"
import "../../pages/Home.css"

function MovieCard({ movie }) {

    return (
        <div className="movieCard">
            <div className="poster">
                <img src={movie.Poster} alt="movie poster" />
            </div>

            <div className="info">
                <h2>{movie.Title}</h2>
                <h3>⭐{movie.imdbRating}</h3>
                <h3>Year: {movie.Year}</h3>
                <h3>Genre: {movie.Genre}</h3>
                <h3>Language: {movie.Language}</h3>
            </div>
            <Link to={`/movie/${movie.imdbID}`}>
                View Details
            </Link>
        </div>
    )
}

export default MovieCard
