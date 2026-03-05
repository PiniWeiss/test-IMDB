import express from "express";
// import protectedRoute from "../middleweare/protectedRoute.js";
import { getMovies } from "../controllers/movies.controllers.js";

const router = express.Router();

router.get("/",  getMovies);

export default router;