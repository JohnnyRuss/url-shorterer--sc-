import styled, { keyframes } from "styled-components";
import { media } from "../../styles/media.styled";

export const ShortererBox = styled.section`
  .shorterer-container {
    width: 100%;
    max-width: ${({ theme }) => theme.breakPoints.container};
    margin: 0 auto;
    padding: 0 1rem;
    color: ${({ theme }) => theme.color.darkBlue};
    display: flex;
    flex-direction: column;

    ${media.mobileLg`
      padding:0 3rem;
    `}
  }

  .expand-btn {
    margin: 0 auto;
    margin-top: 3rem;
    font-weight: ${({ theme }) => theme.weight.b};
    text-transform: capitalize;
  }
`;

export const ShorterCreatorBox = styled.div`
  padding: 2rem 1.5rem;
  transform: translateY(-50%);
  border-radius: ${({ theme }) => theme.utils["rounded-md"]};
  color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.utils["shadow-b-md"]};
  background: url("/assets/bg-shorten-desktop.svg")
    ${({ theme }) => theme.color.darkBlue};
  background-repeat: no-repeat;
  background-size: 100%;

  ${({ theme }) => media.mobileLg`
    padding: 5rem 8rem;
    border-radius: ${theme.utils["rounded-lg"]};
  `};

  .field-box {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${media.mobileLg`
      flex-direction:row;
      align-items:center;
      gap:4rem;
    `}

    input {
      width: 100%;
      padding: 2rem 1rem;
      border-radius: ${({ theme }) => theme.utils["rounded-md"]};
      border: none;
    }

    [data-btn-re] {
      min-width: max-content;
      padding: 2rem 4rem;
    }
  }

  .creator-msg {
    margin-top: 1rem;
    color: ${({ theme }) => theme.color.red};
  }

  .creator-msg::first-letter {
    text-transform: capitalize;
  }
`;

export const ShorteredListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .shortered-list--item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background: ${({ theme }) => theme.color.white};
    padding: 1.25rem 1.75rem;
    border-radius: ${({ theme }) => theme.utils["rounded-sm"]};
    box-shadow: ${({ theme }) => theme.utils["shadow-b-sm"]};
    font-weight: ${({ theme }) => theme.weight.b};

    ${media.mobileLg`
      flex-direction:row;
      gap:3rem;
    `}

    &__links {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.5rem;

      ${media.mobileLg`
        flex-direction:row;
        align-items:center;
        gap:5;
      `}

      span:last-child {
        color: ${({ theme }) => theme.color.cyan};
        border-top: 1px solid ${({ theme }) => theme.color.darkBlue};
        padding-top: 0.5rem;

        ${media.mobileLg`
          border-top:none;
          padding-top:0;
        `}
      }
    }

    [data-btn-re] {
      width: 100%;

      ${media.mobileLg`
        width:auto;
      `}
    }
  }
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

export const Spinner = styled.span`
  align-self: center;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border: 4px solid ${({ theme }) => theme.color.red};
  border-top: 4px solid transparent;
  margin-top: -3rem;
  margin-bottom: 2rem;
  animation: ${spin} 1s ease infinite;
`;
