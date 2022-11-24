import styled from "styled-components";
import { media } from "../../styles/media.styled";

export const StatisticsBox = styled.section`
  padding-top: 7rem;

  ${media.mobileLg`
    padding-top:10rem;
  `}

  [data-heading-sec] {
    text-align: center;
  }

  .statistics-description {
    text-align: center;
    max-width: 45rem;
    margin: 0 auto;
    margin-bottom: 8rem;
  }

  .statistics-container {
    width: 100%;
    max-width: ${({ theme }) => theme.breakPoints.container};
    margin: 0 auto;
    padding: 0 3rem;
    color: ${({ theme }) => theme.color.darkBlue};
  }

  .statistics-list {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 7rem;

    ${media.mobileLg`
      flex-direction:row;
      gap:3rem;
    `}
  }

  .statistics-list:after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 0%;
    transform: translateX(-50%);
    height: 100%;
    width: 1rem;
    background: ${({ theme }) => theme.color.cyan};

    ${media.mobileLg`
      top: 50%;
      left: 0;
      transform: translateY(50%);
      width: 100%;
      height: 1rem;
    `}
  }
`;

export const StatisticsItem = styled.div<{ i: number }>`
  height: max-content;
  padding: 1.5rem;
  padding-top: 0rem;
  border-radius: ${({ theme }) => theme.utils["rounded-md"]};
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.utils["shadow-b-md"]};

  ${media.mobileLg`
    padding:3rem;
  `}

  .statistics-list--item__fig {
    position: relative;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7rem;
    aspect-ratio: 1/1;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.color.darkBlue};

    ${media.mobileLg`
       left:0;
       margin-left:1rem;
       transform: translate(0, -50%);
       top:-3rem;
    `}
  }

  .statistics-list--item__description {
    margin-top: 1rem;
    color: ${({ theme }) => theme.color.grayishViolet};

    ${media.mobileLg`
      margin-top:2rem;
    `}
  }
`;
