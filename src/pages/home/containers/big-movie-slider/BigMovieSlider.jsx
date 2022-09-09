import React from "react";
import { StyledContainerNoRightPadding } from "../../../../styles";
import BigMovieComponent from "../../components/big-movie-component/BigMovieComponent";
import "./big-movie-slider.css";

const BigMovieSlider = ({ catagroy }) => {
  return (
    <StyledContainerNoRightPadding className="big-movie-slider-section">
      <div className="big-movie-slider__heading">
        <h3>Now in theaters</h3>
      </div>
      <div className="big-movie-component">
        <BigMovieComponent catagroy="now_playing" />
      </div>
    </StyledContainerNoRightPadding>
  );
};

export default BigMovieSlider;
