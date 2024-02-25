import { Dispatch, createContext } from "react";
import { IAction, DefaultTheme, ITheme } from "./Enums";

//when setState the [theme,setTheme] setTheme = setState(theme)
// export type ContextDefaultValue = [ITheme, React.Dispatch<React.SetStateAction<ITheme>>];
//when use useReducer setTheme is dispatch action
export type ContextDefaultValue = [ITheme, Dispatch<IAction>];
export const ThemeContext = createContext<ContextDefaultValue>([
  DefaultTheme,
  () => {},
]);
