import React, { useEffect, useState } from "react";
import "./cast.css";
import altImage from "../../../assets/images/altImage.jpg";
import { StyledBoundry, StyledContainer } from "../../../styles";
const Cast = ({ movieCredits }) => {
  const [cast, setCast] = useState({});
  useEffect(() => {}, []);
  return (
    <StyledContainer className="cast-section">
      <div>Cast</div>
      <div className="cast-section__cast">
        {movieCredits.cast?.map((member) => {
          return (
            <div key={member.id}>
              <img
                src={
                  member.profile_path
                    ? `https://image.tmdb.org/t/p/w1280${member.profile_path}`
                    : altImage
                }
                alt=""
                height="200px"
              />
              <h5>{member.name}</h5>
              <h6>{member.character}</h6>
            </div>
          );
        })}
      </div>
    </StyledContainer>
  );
};

export default Cast;
