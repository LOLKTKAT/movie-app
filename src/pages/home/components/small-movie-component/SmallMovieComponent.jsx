import React, { useState, useEffect, useContext } from "react";
import "./small-movie-component.css";
import { fetchMovieData } from "../../../../data/fetchMovieData";
import { useNavigate } from "react-router-dom";
import { MovieIdContext } from "../../../../App";
import { Link } from "react-router-dom";
import tmdb_icon from "../../../../assets/images/tmdb.png";

const SmallMovieComponent = ({ catagory }) => {
  const [movieData, setMovieData] = useState({});
  const [details, setDetails] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    fetchMovieData(catagory, setMovieData);
  }, []);

  function handleClick(index, title) {
    <Link to={`/${index}`}></Link>;
  }

  return (
    <div className="small-movie__wrapper">
      {movieData.length > 0 &&
        movieData?.map((movie) => {
          const { id, poster_path, release_date, title, vote_average } = movie;
          return (
            <div className="small-movie__component" key={id}>
              <div className="small-movie__poster-div">
                <Link to={`movie/${id}}`}>
                  <img
                    src={`https://www.themoviedb.org/t/p/w1280/${poster_path}`}
                    alt={title}
                    className="small-movie__poster"
                  />
                </Link>
              </div>
              <div className="small-movie__info">
                <Link to={`/movie/${id}}`}>
                  <h4 className="small-movie__info__heading">{title}</h4>
                </Link>
                <div className="small-movie__info__discription">
                  <img
                    src={tmdb_icon}
                    height="15px"
                    style={{ marginRight: "-35px" }}
                  />
                  <h4>{vote_average}</h4>
                  <h6>{release_date}</h6>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SmallMovieComponent;
