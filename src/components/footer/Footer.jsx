import React from "react";
import { StyledContainer } from "../../styles";
import "./footer.css";

const Footer = () => {
  return (
    <StyledContainer className="footer">
      <div>
        <div className="logo"></div>
      </div>
      <div>
        <div className="footer__sitemap"></div>
      </div>
    </StyledContainer>
  );
};

export default Footer;
