import React, { useMemo, useReducer } from "react";
import { ContextDefaultValue, ThemeContext } from "./ThemeContext";
import { ACTION_TYPE, DefaultTheme, IAction, ITheme, Themes } from "./Enums";

interface ThemeContextProps {
  children: React.ReactNode;
}

export const ThemeReducer = (state: ITheme, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPE.TOGGLE_THEME: {
      return state.background === Themes.light.background
        ? Themes.dark
        : Themes.light;
    }
    default:
      return state;
  }
};

export const ThemeContextProvider: React.FC<ThemeContextProps> = ({
  children,
}: ThemeContextProps) => {
  //   const [theme, setTheme] = useState(defaultTheme);
  const [state, dispatch] = useReducer(ThemeReducer, DefaultTheme);
  //   const value:ContextDefaultValue  = useMemo(() => [theme, setTheme] , [theme]);
  const value: ContextDefaultValue = useMemo(() => [state, dispatch], [state]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
