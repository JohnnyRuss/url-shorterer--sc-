import React, { useState } from "react";

import { Logo, Button } from "../Layouts";
import { Nav } from "./navigation.styled";
import Burger from "./Burger";

const Navigation: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <Nav navIsOpen={navIsOpen}>
      <nav className="nav-container">
        <Logo />
        <div className="nav-inner-wrapper">
          <ul className="nav-list">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <button className="log-in--btn">Log In</button>
          <Button value="sign up" />
        </div>
        <Burger
          navIsOpen={navIsOpen}
          handleNav={() => setNavIsOpen((prev) => !prev)}
        />
      </nav>
    </Nav>
  );
};

export default Navigation;
