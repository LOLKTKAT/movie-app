import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMovieData } from "../../../../data/fetchMovieData";
import "./big-movie-component.css";

const BigMovieComponent = ({ catagroy }) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetchMovieData(catagroy, setMovieData);
  }, []);

  return (
    <div
      className="big-movie-slider__component"
      style={{ display: "flex", gap: "2vw" }}
    >
      {movieData.length > 0 &&
        movieData.map((movie) => {
          const { id, backdrop_path, title, release_date } = movie;
          return (
            <div key={id}>
              <div>
                <Link to={`/movie/${id}}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w1066_and_h600_bestv2${backdrop_path}`}
                    alt=""
                    className="big-movie__poster"
                  />
                </Link>
              </div>
              <div className="big-movie-slider__component-heading">
                <Link to={`movie/${id}}`}>
                  <h4>{title}</h4>
                </Link>
                <h6>{release_date}</h6>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BigMovieComponent;
