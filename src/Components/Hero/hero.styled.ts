import styled from "styled-components";
import { media } from "../../styles/media.styled";

export const HeroBox = styled.section`
  padding-top: 3rem;
  padding-bottom: 5rem;
  background: ${({ theme }) => theme.color.white};

  ${media.mobileLg`
    padding-bottom: 18rem;
  `}

  .hero-container {
    width: 100%;
    max-width: ${({ theme }) => theme.breakPoints.container};
    margin: 0 auto;
    padding: 0 3rem;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${media.mobileLg`
       flex-direction: row;
       height:38vw;
    `}
  }

  .hero-details {
    flex: 1;
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.mobileLg`
       order:1;
       align-items:flex-start;
    `}
  }

  .hero-heading {
    font-size: ${({ theme }) => theme.fontSize["h-2"]};

    ${({ theme }) => media.tablet`
      font-size:${theme.fontSize["h-1"]};
    `}
  }

  .hero-description {
    color: ${({ theme }) => theme.color.grayishVioletLight};
  }

  .hero-heading,
  .hero-description {
    width: min(45rem, 100%);
    text-align: center;

    ${({ theme }) => media.mobileLg`
      text-align:start;
    `}
  }

  [data-btn-re] {
    margin-top: 3rem;
  }

  .hero-fig {
    flex: 1;
    order: 1;

    ${media.mobileLg`
       order:2;
    `}

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
