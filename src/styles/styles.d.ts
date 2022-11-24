import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: FontSize;
    color: Color;
    weight: Weight;
    utils: Utils;
    breakPoints: BreakPoints;
  }

  interface FontSize {
    "h-1": "6rem";
    "h-2": "3.6rem";
    "h-3": "2.4rem";
    lg: "2rem";
    base: "1.6rem";
    sm: "1.4rem";
    s: "1.2rem";
  }

  interface Color {
    white: "#ffffff";
    cyan: "hsl(180, 66%, 49%)";
    darkViolet: "hsl(257, 27%, 26%)";
    red: "hsl(0, 87%, 67%)";
    gray: "hsl(0, 0%, 75%)";
    grayishViolet: "hsl(257, 7%, 63%)";
    grayishVioletLight: "hsl(257, 7%, 83%)",
    darkBlue: "hsl(255, 11%, 22%)";
    darkViolet: "hsl(260, 8%, 14%)";
  }

  interface Weight {
    base: 400;
    md: 500;
    b: 700;
  }

  interface Utils {
    "rounded-lg": "3rem";
    "rounded-md": "1.2rem";
    "rounded-sm": "0.5rem";
    "shadow-b-md": "0px 0px 15px rgba(0,0,0,0.35)";
    "shadow-b-sm": "0px 0px 5px rgba(0,0,0,0.25)";
  }

  interface BreakPoints {
    container: "1480px";
    desktop: "90em";
    tablet: "60em";
    "mobile-large": "42.5em";
    mobile: "17.5em";
  }
}
