import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { BaseTheme } from "./styles/Theme.styles";
import { GlobalStyles } from "./styles/GlobalStyles.styles";

interface ThemeProviderType {
  children: React.ReactNode;
}

interface ThemeContextType {}

const ThemeContext = createContext<ThemeContextType>({});

const Theme: React.FC<ThemeProviderType> = ({ children }) => {
  return (
    <ThemeProvider theme={BaseTheme}>
      <GlobalStyles />
      <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
