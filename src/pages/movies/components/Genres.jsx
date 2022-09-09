import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { StyledContainer } from "../../../styles";
import { Link } from "react-router-dom";
import altImage from "../../../assets/images/altImage.jpg";
import FirstMovieComponent from "../../../components/first-movie-component/FirstMovieComponent";
import "../movies.css";
// create genre component
// store the genres in an array
// store the data in a state
// map through each element

const Genres = ({ DEFUALT_GENRES, selectedGenres, url, filterBtn }) => {
  const [genreId, setGenreId] = useState(selectedGenres);

  const { state, loading, error } = useFetch(url, filterBtn);

  if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);

  return (
    <StyledContainer className="genre__movies-section">
      <FirstMovieComponent state={state} />
    </StyledContainer>
  );
};

export default Genres;
