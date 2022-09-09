import React, { useState, useEffect, useContext } from "react";
import "./nav-bar.css";
import { StyledInput, StyledContainer, StyledBoundry } from "../../styles";
import {
  NavLink,
  Link,
  useNavigate,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { useSearchInput } from "../../data/useSearchInput";
import Search from "../../pages/search/Search";
import { render } from "@testing-library/react";
import { UserContext } from "../../data/UserContext";
import Hamburger from "../../assets/images/Hamburger_MD.svg";
import Search_Glass from "../../assets/images/Search_Magnifying_Glass.svg";

const NabBar = () => {
  const { searchQuery, setSearchQuery, searchSubmit, setSearchSubmit } =
    useContext(UserContext);
  const { searchValue } = useParams();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const [showSearch, setShowSearch] = useState(true);

  function handleToggle() {
    setToggle(!toggle);
  }
  function showSearchInput() {
    setShowSearch(!showSearch);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchSubmit(!searchSubmit);
    console.log(searchQuery);
    navigate(`/search/${searchQuery}`);
  }
  return (
    <StyledContainer
      className={
        toggle ? "navbar-container" : "navbar-container show-navbar-container "
      }
    >
      <div className="navbar__logo">
        <Link to="/">
          <h3>MovieApp</h3>
        </Link>
      </div>
      <div
        className={
          toggle ? "navbar__links hide" : "navbar__links show-navbar__links"
        }
      >
        <NavLink to="/">
          <h5>Home</h5>
        </NavLink>

        <NavLink to="/movies">
          <h5>Movies</h5>
        </NavLink>

        <NavLink to="/favourites">
          <h5>Favorites</h5>
        </NavLink>
      </div>
      <img
        src={Hamburger}
        alt="menu"
        className="hamburger"
        onClick={handleToggle}
      />
      <img
        onClick={showSearchInput}
        src={Search_Glass}
        alt="search"
        className="search-glass"
      />
      <div
        className={showSearch ? "navbar__searchbox" : "show-navbar__searchbox"}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <StyledInput
            onChange={(e) => setSearchQuery(e.target.value)}
            onSubmit={(e) => handleSubmit(e)}
            placeholder="search..."
            value={searchQuery}
          />
        </form>
      </div>
    </StyledContainer>
  );
};

export default NabBar;
