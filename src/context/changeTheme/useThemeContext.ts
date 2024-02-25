import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { ACTION_TYPE } from "./Enums";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme must be used within a ThemeContextProvider");
  const [state, dispatch] = context;

  const toggleTheme = () =>
    dispatch({
      type: ACTION_TYPE.TOGGLE_THEME,
    });
  // const toggleTheme = () => {
  //   const nextTheme = activeTheme === "light" ? "dark" : "light";
  //   setTheme(themes[nextTheme]);
  //   setActiveTheme(nextTheme);
  // };

  return {
    state,
    dispatch,
    toggleTheme,
  };
};
