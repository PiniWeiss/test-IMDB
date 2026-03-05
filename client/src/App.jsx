import {  Route, Routes } from "react-router";
import './App.css'
import Home from "./pages/Home";

import Seats from "./pages/Seats";
import MovieDetails from "./pages/MovieDetails";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/seats/:id" element={<Seats />} />
      </Routes>
    </>
  )
}

export default App
