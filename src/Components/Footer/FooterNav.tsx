import React from "react";
import { FooterNavContainer } from "./Footer.styled";

const FooterNav: React.FC = () => {
  return (
    <FooterNavContainer>
      <div className="nav-section">
        <p>features</p>
        <ul className="nav-section__list">
          <li>link shortening</li>
          <li>branded links</li>
          <li>analytics</li>
        </ul>
      </div>
      <div className="nav-section">
        <p>resources</p>
        <ul className="nav-section__list">
          <li>blog</li>
          <li>developers</li>
          <li>support</li>
        </ul>
      </div>
      <div className="nav-section">
        <p>company</p>
        <ul className="nav-section__list">
          <li>about</li>
          <li>our team</li>
          <li>careers</li>
          <li>contact</li>
        </ul>
      </div>
    </FooterNavContainer>
  );
};

export default FooterNav;
