import React from "react";
import { Link } from "react-router-dom";
import altImage from "../../../assets/images/altImage.jpg";
import tmdb_icon from "../../../assets/images/tmdb.png";

import "../search.css";

const SearchMovieComponent = ({ searchData }) => {
  return (
    <>
      <section className="search__movies-section">
        {searchData.total_results == 0 ? (
          <h1>No results are found</h1>
        ) : (
          searchData.results?.map((query) => {
            const {
              id,
              poster_path,
              title,
              overview,
              release_date,
              vote_average,
            } = query;

            return (
              <div className="search__movie-section" key={id}>
                <div className="search__poster-wrapper">
                  <Link to={`/movie/${id}`}>
                    <img
                      className="poster search-movie__poster"
                      src={
                        poster_path
                          ? `https://www.themoviedb.org/t/p/w1280${poster_path}`
                          : altImage
                      }
                      alt={title}
                    />
                  </Link>
                </div>
                <div className="search__info-wrapper">
                  <Link to={`/movie/${id}`}>
                    <h4>{title ? title : "Title was not found"}</h4>
                  </Link>
                  <h6>{overview}</h6>
                  <div className="search__vote">
                    <img src={tmdb_icon} height="20px" />
                    <h5>{vote_average}</h5>
                  </div>
                  <h6>{release_date}</h6>
                </div>
              </div>
            );
          })
        )}
      </section>
    </>
  );
};

export default SearchMovieComponent;
