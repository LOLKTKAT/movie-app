import React, { useEffect, useState, useContext } from "react";
import { StyledContainerNoRightPadding } from "../../../../styles";
import SmallMovieComponent from "../../components/small-movie-component/SmallMovieComponent";
import "./small-movie-slider.css";

const SmallMovieSlider = ({ catagory, heading }) => {
  return (
    <StyledContainerNoRightPadding className="small-slider__container">
      <div className="small-slider__heading">
        <h3>{heading}</h3>
      </div>
      <div className="small-slider__list">
        <SmallMovieComponent catagory={catagory} />
      </div>
    </StyledContainerNoRightPadding>
  );
};

export default SmallMovieSlider;
