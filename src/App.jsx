import React, { useState } from "react";
import { DEFAULT_GENRES } from "./data/DefaultGenres";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Search from "./pages/search/Search";
import Favourites from "./pages/favourites/Favourites";
import { UserContext } from "./data/UserContext";
import Movies from "./pages/movies/Movies";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSubmit, setSearchSubmit] = useState(true);
  const [favourites, setFavourites] = useState([]);

  return (
    <div className="App">
      <div className="blurred-circle-1"></div>
      <div className="blurred-circle-2"></div>
      <div className="blurred-circle-3"></div>
      <div className="blurred-circle-4"></div>
      <UserContext.Provider
        value={{
          searchQuery,
          setSearchQuery,
          searchSubmit,
          setSearchSubmit,
          favourites,
          setFavourites,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:movieId" exact element={<Details />} />
          <Route
            path="/search/:searchValue"
            element={
              <Search search={searchQuery} setSearchQuery={setSearchQuery} />
            }
          />
          <Route path="/favourites" exact element={<Favourites />} />
          <Route
            path="/movies"
            exact
            element={
              <Movies catagory="movie" DEFAULT_GENRES={DEFAULT_GENRES.movies} />
            }
          />
          <Route
            path="/tv"
            exact
            element={
              <Movies catagory="tv" DEFAULT_GENRES={DEFAULT_GENRES.tv} />
            }
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
export default App;
