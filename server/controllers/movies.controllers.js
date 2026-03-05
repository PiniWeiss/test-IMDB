import moviesData from '../data/movies.json' with {type: 'json'}
import seatsData from '../data/seats.json' with {type: 'json'}


export const getMovies = (req, res) => {
    try {
        const updatedMoviesData = moviesData.map(movie => {
            return { ...movie, seats: seatsData[movie.imdbID] }
        })
        
        res.json({ updatedMoviesData })
    } catch (error) {
        console.log("Error in getMovies controllers", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}