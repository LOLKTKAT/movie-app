import React, { useState } from "react";
import "./movies.css";
import Genres from "./components/Genres.jsx";
import SearchMovieComponent from "../search/components/SearchMovieComponent";
import { StyledBoundry, StyledContainer } from "../../styles";
import Navbar from "../../components/nav-bar/NavBar";
import GenreNames from "./components/GenreNames";

const Movies = ({ DEFAULT_GENRES, catagory }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [url, setUrl] = useState();
  const [filterBtn, setFilterBtn] = useState(0);

  function handleFiltering() {
    setFilterBtn(filterBtn + 1);
    console.log(filterBtn);
  }

  function handleClick(id, e) {
    if (!e.target.checked) {
      selectedGenres.pop(id);
    } else {
      selectedGenres.push(id);
    }
    setUrl(
      `https://api.themoviedb.org/3/discover/${catagory}?api_key=3c65adb624ef91ce3af91112d2e89ecc&with_genres=${selectedGenres.join(
        ","
      )}`
    );
  }
  return (
    <StyledBoundry>
      <StyledContainer className="movie-page">
        <Navbar />
        <section className="movies-page__continer">
          <GenreNames
            DEFAULT_GENRES={DEFAULT_GENRES}
            selectedGenres={selectedGenres}
            handleClick={handleClick}
            setSelectedGenres={setSelectedGenres}
            url={url}
            setUrl={setUrl}
            setFilterBtn={setFilterBtn}
            handleFiltering={handleFiltering}
          />
          <Genres
            DEFAULT_GENRES={DEFAULT_GENRES}
            selectedGenres={selectedGenres}
            url={url}
            setUrl={setUrl}
            filterBtn={filterBtn}
          />
        </section>
      </StyledContainer>
      {/* <SearchMovieComponent searchData={} /> */}
    </StyledBoundry>
  );
};

export default Movies;
