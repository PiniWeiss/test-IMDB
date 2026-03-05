import { useMovieStore } from "../../stor/useMovieStor"

function Navbar() {
    const {movies} = useMovieStore()
    
  return (
    <header>
        <h1>Movie Night</h1>
        <p>Search a movie and pick your seats</p>
    <nav>
        <input type="text" placeholder='Search movie by title' />
        <hr />
        <p>showing result: {movies.length}</p>
    </nav>
    </header>
  )
}

export default Navbar
