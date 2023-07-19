import React from "react";
import { StyledBoundry } from "../../styles";
import NavBar from "../../components/nav-bar/NavBar";
import CTA from "./containers/CTA/CTA";
import SmallMovieSlider from "./containers/small-movie-slider/SmallMovieSlider";
import BigMovieSlider from "./containers/big-movie-slider/BigMovieSlider";
import Footer from "../../components/footer/Footer";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <StyledBoundry>
        <NavBar />
        <CTA />
        <SmallMovieSlider catagory="popular" heading="Popular" />
        <SmallMovieSlider catagory="upcoming" heading="Up coming" />
        <BigMovieSlider catagory="now_playing" />
        <SmallMovieSlider catagory="top_rated" heading="Top Rated" />
        <Footer />
      </StyledBoundry>
    </div>
  );
};

export default Home;
