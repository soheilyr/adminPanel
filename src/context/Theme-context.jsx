import { createContext, useState } from "react";
const initialState = {
  theme: "",
  toggleTheme: () => {},
};
export const themeContext = createContext(initialState);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");
  const toggleTheme = () => {
    setTheme(theme === "Dark" ? "Light" : "Dark");
  };
  const value = { theme, toggleTheme };
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;
