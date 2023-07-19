import React, { useState, useEffect, useContext, useReducer } from "react";
import "./favourites.css";
import NavBar from "../../components/nav-bar/NavBar";
import { StyledBoundry, StyledContainer, StyledButton } from "../../styles";
import { UserContext } from "../../data/UserContext";
import altImage from "../../assets/images/altImage.jpg";
import tmdb_icon from "../../assets/images/tmdb.png";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function reducer(state, action) {
  switch (action.type) {
    case "delete":
      return { favourites: [] };
      throw new Error();
  }
}

const Favourites = () => {
  const { favourites } = useContext(UserContext);
  const [movies, setMovies] = useState([]);
  const [getLocalFavs, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem("localStorageFavourites");
    return localData ? JSON.parse(localData) : [];
  });

  const handleDelete = () => {
    localStorage.setItem("localStorageFavourites", []);
    dispatch({ type: "delete" });
  };

  return (
    <>
      <StyledBoundry>
        <NavBar />
        <StyledContainer className="favourites__container">
          {getLocalFavs.length == undefined ? (
            <>no movies</>
          ) : (
            getLocalFavs.map((film) => {
              const { id, title, vote_average, overview, poster_path } = film;
              return (
                <section key={id} className="favourites__component">
                  <div>
                    <Link to={`/movie/${id}`}>
                      <img
                        className="poster favourites-movie__poster "
                        src={
                          poster_path
                            ? `https://www.themoviedb.org/t/p/w1280${poster_path}`
                            : altImage
                        }
                        alt={title}
                        width="200px"
                        height="284px"
                      />
                    </Link>
                  </div>
                  <div className="favourites__info">
                    <Link to={`/movie/${id}`}>
                      <h4>{title ? title : "Title was not found"}</h4>
                    </Link>
                    <h6>{overview}</h6>
                    <div className="favourites__vote">
                      <img src={tmdb_icon} alt="tmdb-icon" height="20px" />
                      <h5>{vote_average}</h5>
                    </div>
                  </div>
                </section>
              );
            })
          )}
        </StyledContainer>
        <StyledButton onClick={handleDelete}>Delete All</StyledButton>
        <Footer />
      </StyledBoundry>
    </>
  );
};

export default Favourites;
