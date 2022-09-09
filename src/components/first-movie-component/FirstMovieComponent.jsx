import React from "react";
import { Link } from "react-router-dom";
import "./first-movie-component.css";
import tmdb from "../../assets/images/tmdb.png";
import { StyledContainer } from "../../styles";

const FirstMovieComponent = ({ state }) => {
  return (
    <>
      {state.results?.map((item) => {
        const { id, poster_path, release_date, title, vote_average } = item;
        return (
          <div className="first-movie-component__container" key={id}>
            <div className="first-movie-component__poster-div">
              <Link to={`/movie/${id}}`}>
                <img
                  src={`https://www.themoviedb.org/t/p/w1280/${poster_path}`}
                  alt={title}
                  width="150px"
                  className="first-movie-component__poster"
                />
              </Link>
            </div>
            <div className="__info">
              <Link to={`movie/${id}}`}>
                <h4 className="first-movie-component__info__heading">
                  {title}
                </h4>
              </Link>
              <div className="first-movie-component__info__discription">
                <img height="16px" src={tmdb} alt="tmdb logo" />
                <h4>{vote_average}</h4>
                <h6>{release_date}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FirstMovieComponent;
