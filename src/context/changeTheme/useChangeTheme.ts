import { useContext, useState } from "react";
import { ThemeContext, themes } from "./ThemeContext";

export const useChangeTheme = () => {
  const [activeTheme, setActiveTheme] = useState("light");

  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme must be used within a ThemeContextProvider");
  const [theme, setTheme] = context;

  const toggleTheme = () => {
    const nextTheme = activeTheme === "light" ? "dark" : "light";
    setTheme(themes[nextTheme]);
    setActiveTheme(nextTheme);
  };
  return {
    theme,
    setTheme,
    toggleTheme,
  };
};
