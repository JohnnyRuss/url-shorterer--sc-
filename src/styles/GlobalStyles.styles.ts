import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before{
      margin:0;
      padding:0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      background:${({ theme }) => theme.color.gray} ;
      color: ${({ theme }) => theme.color.darkBlue};
      font-family: 'Poppins', sans-serif;
      font-size:${({ theme }) => theme.fontSize.base};
      font-weight: ${({ theme }) => theme.weight.base};
    }

    button {
      cursor:pointer;
      border:none;
      outline:none;
      color:inherit;
      text-transform:inherit;
      font-size: inherit;
      background:none;
    }

    ul {
      list-style:none;
    }

    ::-webkit-scrollbar{
      width:1rem;
    }
    
    ::-webkit-scrollbar-track{
      border-radius:1rem;
      background:${({ theme }) => theme.color.gray}
    }

    ::-webkit-scrollbar-thumb{
      border-radius:1rem;
      background:${({ theme }) => theme.color.darkBlue}
    }
`;
