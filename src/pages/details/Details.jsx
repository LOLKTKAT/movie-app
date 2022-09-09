import React, { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../data/fetchMovieDetails";
import { fetchMovieCredits } from "../../data/fetchMovieCredits";
import { useParams } from "react-router-dom";
import NavBar from "../../components/nav-bar/NavBar";
import MovieDetailsSection from "./movieDetailsSection/MovieDetailsSection";
import "./details.css";
import Footer from "../../components/footer/Footer";
import { StyledBoundry } from "../../styles";

const Details = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCredits, setMovieCredits] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId, setMovieDetails);
    fetchMovieCredits(movieId, setMovieCredits);
  }, []);
  return (
    <div className="details">
      <StyledBoundry>
        <NavBar />
        <MovieDetailsSection
          movieDetails={movieDetails}
          movieCredits={movieCredits}
        />
        <Footer />
      </StyledBoundry>
    </div>
  );
};

export default Details;
