import React from "react";
import "./cta.css";
import { StyledButton, StyledContainer } from "../../../../styles";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <StyledContainer className="cta-container">
      <div className="cta__info__container">
        <div className="cta__heading">
          <h1>Browse Your Favourite Movies and TV Shows</h1>
        </div>
        <div className="cta__discription">
          <h5>Ratings Dates Tv Shows Treading Search</h5>
        </div>
        <div className="cta__button">
          <Link to="/movies">
            <StyledButton>Browse</StyledButton>
          </Link>
        </div>
      </div>
      {/* <div className="cta__image__container">
        <img
          src="https://www.themoviedb.org/t/p/w1280/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg"
          alt=""
          width="200px"
          height="244px"
          className="cta__image cta__image1 "
        />
        <img
          src="https://www.themoviedb.org/t/p/w1280/gPMh5rsVrDDAYMDbTcz6Up1DQ4z.jpg"
          alt=""
          width="200px"
          height="244px"
          className="cta__image cta__image2"
        />
        <img
          src="https://www.themoviedb.org/t/p/w1280/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg"
          alt=""
          width="200px"
          height="244px"
          className="cta__image cta__image3"
        />
        <img
          src="https://www.themoviedb.org/t/p/w1280/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg"
          alt=""
          width="200px"
          height="244px"
          className="cta__image cta__image4"
        />
      </div> */}
    </StyledContainer>
  );
};

export default CTA;
