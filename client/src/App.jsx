import { Navigate, Route, Routes } from "react-router";
import './App.css'
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Seats from "./pages/Seats";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/seats" element={<Seats/>} />
      </Routes>
    </>
  )
}

export default App
