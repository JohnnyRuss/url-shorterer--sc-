import { css } from "styled-components";

export const media = {
  desktop: (...args) => css`
    @media (min-width: 92.5em) {
      // 1480px
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 60em) {
      // 960px
      ${css(...args)}
    }
  `,
  mobileLg: (...args) => css`
    @media (min-width: 42.5em) {
      // 680px
      ${css(...args)}
    }
  `,
  mobile: (...args) => css`
    @media (min-width: 17.5em) {
      // 280px
      ${css(...args)}
    }
  `,
};
