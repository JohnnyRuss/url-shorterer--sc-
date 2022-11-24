import React from "react";
import styled from "styled-components";
import { HeadingSecondary, Button } from "../Layouts";
import { media } from "../../styles/media.styled";

const BoostBox = styled.section`
  margin-top: 8rem;
  padding: 0 3rem;
  background: url("/assets/bg-boost-desktop.svg")
    ${({ theme }) => theme.color.darkViolet};

  ${media.mobileLg`
      margin-top: 14rem;
  `}

  .boost-container {
    width: 100%;
    max-width: ${({ theme }) => theme.breakPoints.container};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 4rem 0;
  }

  [data-heading-sec] {
    color: ${({ theme }) => theme.color.white};
  }
`;

const Boost: React.FC = () => {
  return (
    <BoostBox>
      <div className="boost-container">
        <HeadingSecondary value="Boost your links today" />
        <Button value="get started" />
      </div>
    </BoostBox>
  );
};

export default Boost;
