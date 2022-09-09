import React, { useState, useEffect, useContext, useReducer } from "react";
import { StyledContainer } from "../../../styles";
import Cast from "../movie-cast/Cast";
import "./movie-details-section.css";
import { StyledButton } from "../../../styles";
import { UserContext } from "../../../data/UserContext";
import tmdb_icon from "../../../assets/images/tmdb.png";

const initialState = {
  watched: localStorage.getItem("localStorageFavourites")
    ? JSON.parse(localStorage.getItem("localStorageFavourites"))
    : [],
};
const MovieDetailsSection = ({ movieDetails, movieCredits }) => {
  const {
    id,
    poster_path,
    overview,
    title,
    release_date,
    vote_average,
    original_language,
    revenue,
    status,
    budget,
  } = movieDetails;
  const [cast, setCast] = useState(movieCredits.cast);
  const [exists, setExists] = useState();
  const [watchedMovie, setWatchedMovie] = useState();
  const x = [];
  function localData() {
    const localDat = localStorage.getItem("localStorageFavourites");
    return localDat ? JSON.parse(localDat) : [];
  }
  const { favourites, setFavourites } = useContext(UserContext);

  function handleClick(movie) {
    const exist = localData().find((x) => x.id === movie.id);
    saveToLocalStorage(movie);
    if (exist) {
      setExists(!exist);
      const newFavList = favourites.filter((x) => x.id !== movie.id);
      setFavourites(newFavList);
      saveToLocalStorage(newFavList);
    } else {
      setExists(!exist);
      const newFavList = [...favourites, movie];
      setFavourites(newFavList);
      saveToLocalStorage(newFavList);
    }

    // console.log(localData[0].runtime);

    // if (localData[0].id == id) {
    //   console.log(true);
    //   setExists(true);
    // } else {
    //   console.log(false);
    //   setExists(false);
    // }
  }

  function saveToLocalStorage(item) {
    localStorage.setItem("localStorageFavourites", JSON.stringify(item));
  }

  useEffect(() => {}, [favourites]);

  return (
    <>
      <StyledContainer className="movie-details-section">
        <aside className="movie-detailes-section__left">
          <div>
            <img
              src={`https://www.themoviedb.org/t/p/w1280/${poster_path}`}
              alt=""
              height="420px"
            />
          </div>
          <div>
            <h2>{title}</h2>
            <div className="movie-detailes-section__genres">
              <h6>{movieDetails.genres > 0 && movieDetails.genres[0].name}</h6>
              <h6>{movieDetails.genres > 0 && movieDetails.genres[1].name}</h6>
              <h6>{movieDetails.genres > 0 && movieDetails.genres[2].name}</h6>
              <h6>{release_date}</h6>
            </div>
            <div className="movie-detailes-section__overview">
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
            <div className="movie-detailes-section__vote">
              <img src={tmdb_icon} height="20px" />
              <h5>{vote_average}</h5>
              <h6>{release_date}</h6>
            </div>
            <StyledButton
              className="movie-detailes-section__btn"
              style={{
                marginTop: "20px",
                width: "auto",
                padding: "10px",
              }}
              onClick={() => handleClick(movieDetails)}
            >
              {exists ? "Remove From Favourites" : "Add to Favourites"}
            </StyledButton>
          </div>
        </aside>
        <aside className="movie-detailes-section__right">
          <div>
            <h4>Status</h4>
            <h5>{status}</h5>
          </div>
          <div>
            <h4>Original Language</h4>
            <h5>{original_language}</h5>
          </div>
          <div>
            <h4>Budget</h4>
            <h5>{budget == "0" ? "Unknown Budget" : budget}</h5>
          </div>
          <div>
            <h4>Revenue</h4>
            <h5>{revenue == "0" ? "Unknown Revenue" : revenue}</h5>
          </div>
        </aside>
      </StyledContainer>
      <Cast movieCredits={movieCredits} />
    </>
  );
};

export default MovieDetailsSection;
