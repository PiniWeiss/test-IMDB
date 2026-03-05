import { Link, useParams } from "react-router"
import { useMovieStore } from "../stor/useMovieStor"


function MovieDetails() {
  const { id } = useParams()
  const { movies } = useMovieStore()
  const movie = movies["updatedMoviesData"].find(movie => String(movie.imdbID) === id)

  if(!movie) return <p>movie not found</p>

  return (
    <div>
      <div >
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
      <Link to={`/seats/${id}`}>
        <button>
          ChooseSeats</button></Link>
    </div>
    </div>
  )
}

export default MovieDetails
