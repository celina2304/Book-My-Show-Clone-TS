import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// HOC
// import DefaultHOC from "./HOC/Default.HOC";
// import MovieHOC from "./HOC/Movie.HOC";

// Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/Default.layout";
import MovieLayout from "./layouts/Movie.layout";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "5223faed61bb5a1941fefe944d91efa8";
// "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjIzZmFlZDYxYmI1YTE5NDFmZWZlOTQ0ZDkxZWZhOCIsIm5iZiI6MTczMjgzOTQ4MC42NzUxNjc4LCJzdWIiOiI2MTU3OTkxN2M4YTJkNDAwMmFiOTBkYTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fK7HuSTqKfztNy5z8zJLsHLcLbElWXzjM8f1lws2Tq4";
// axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <MovieLayout>
              <Movie />
            </MovieLayout>
          }
        />
        <Route
          path="/plays"
          element={
            <DefaultLayout>
              <Plays />
            </DefaultLayout>
          }
        />
        {/* <Route path="/" element={<DefaultHOC element={<HomePage />} />} />
        <Route path="/movie/:id" element={<MovieHOC element={<Movie />} />} />
        <Route path="/plays" element={<DefaultHOC element={<Plays />} />} /> */}
      </Routes>
    </>
  );
}

export default App;
