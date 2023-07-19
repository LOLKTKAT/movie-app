import React from "react";
import "./cta.css";
import { StyledButton, StyledContainer } from "../../../../styles";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <StyledContainer className="cta-container">
      <div className="cta__info__container">
        <div className="cta__heading">
          <h1>Look Up Your Favourite Movies and TV Shows</h1>
        </div>
        <div className="cta__discription">
          <h5>Cast • Ratings • Dates • Trending • Search</h5>
        </div>
        <div className="cta__button">
          <Link to="/movies">
            <StyledButton>Look Up</StyledButton>
          </Link>
        </div>
      </div>
    </StyledContainer>
  );
};

export default CTA;
