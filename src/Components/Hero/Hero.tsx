import React from "react";
import { Button } from "../Layouts";
import { HeroBox } from "./hero.styled";

const Hero: React.FC = () => {
  return (
    <HeroBox>
      <article className="hero-container">
        <div className="hero-details">
          <h1 className="hero-heading">More than just shorter links</h1>
          <p className="hero-description">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button value="get started" />
        </div>
        <figure className="hero-fig">
          <img src="/assets/illustration-working.svg" alt="shorten" />
        </figure>
      </article>
    </HeroBox>
  );
};

export default Hero;
