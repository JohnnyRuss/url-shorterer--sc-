import styled, { keyframes } from "styled-components";
import { media } from "../../styles/media.styled";

const move_up = keyframes`
    0%{
        transform:translate(-50%,1rem)
    }
    100%{
        transform:translate(-50%,0)
    }
`;

export const Nav = styled.div<{ navIsOpen: boolean }>`
  background: ${({ theme }) => theme.color.white};
  position:sticky;
  top:0;
  z-index:999;

  .nav-container {
    display: flex;
    align-items: center;
    gap: 3rem;
    max-width: ${({ theme }) => theme.breakPoints.container};
    margin: 0 auto;
    height: 8rem;
    padding: 0 3rem;
  }

  .burger {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.mobileLg`
      display: none;
    `}
  }

  .nav-inner-wrapper {
    display: ${({ navIsOpen }) => (navIsOpen ? "flex" : "none")};
    position: fixed;
    z-index: 999;
    top: 9rem;
    left: 50%;
    transform: translateX(-50%);
    width: 27rem;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background: ${({ theme }) => theme.color.darkBlue};
    color: ${({ theme }) => theme.color.white};
    border-radius: ${({ theme }) => theme.utils["rounded-md"]};
    animation: ${move_up} 0.2s ease;

    ${({ theme }) => media.mobileLg`
      animation:none;
      position:unset;
      transform:translateX(0);
      width:100%;
      display: flex;
      flex-direction:row;
      gap:3rem;
      padding:0;
      background:none;
      color:${theme.color.grayishViolet};
    `};
  }

  .nav-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.grayishVioletLight};
    padding-bottom: 1rem;

    ${media.mobileLg`
      flex-direction:row;
      border-bottom:none;
      width:auto;
      padding-bottom:0;
    `}

    li {
      font-weight: ${({ theme }) => theme.weight.md};
      cursor: pointer;
      transition: all 0.2s;

      :hover {
        color: ${({ theme }) => theme.color.cyan};
      }
    }
  }

  .log-in--btn {
    text-transform: capitalize;
    font-weight: ${({ theme }) => theme.weight.md};

    ${media.mobileLg`
        margin-left:auto;
    `}
  }

  [data-btn-re] {
    width: 100%;

    ${media.mobileLg`
      width:auto;
    `}
  }
`;
