import express from "express";
import cors from "cors"
import moviesRoures from "./routes/movies.routes.js";


const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json())


app.use("/api/movies", moviesRoures)
 



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});