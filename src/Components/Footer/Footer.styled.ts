import styled from "styled-components";
import { media } from "../../styles/media.styled";

export const FooterBox = styled.footer`
  padding: 0 3rem;
  background: ${({ theme }) => theme.color.darkBlue};

  .footer-container {
    width: max-content(${({ theme }) => theme.breakPoints.container}, 100%);
    margin: 0 auto;
    color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction:column;
    gap:2rem;
    align-items: center;
    justify-content: space-between;
    padding: 6rem 0;

    ${media.mobileLg`
      flex-direction:row;
      align-items:flex-start;
      gap:0;
    `}
  }
`;

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction:column;
  gap: 2rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.grayishVioletLight};

  ${media.mobileLg`
    flex-direction:row;
    gap:8rem;
  `}

  .nav-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
      color: ${({ theme }) => theme.color.white};
      font-weight: ${({ theme }) => theme.weight.md};
      text-align:center;

      ${media.mobileLg`
        text-align:start;
      `}
    }

    &__list {
      display: flex;
      flex-direction: column;
      align-items:center;
      gap: 0.75rem;
      font-size: ${({ theme }) => theme.fontSize.sm};

      ${media.mobileLg`
        align-items:flex-start;
      `}

      li {
        cursor: pointer;
        transition: all 0.2s;

        :hover {
          color: ${({ theme }) => theme.color.cyan};
        }
      }
    }
  }
`;
