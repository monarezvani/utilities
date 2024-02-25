import { Dispatch, SetStateAction, createContext } from "react";

interface ITheme {
  foreground: string;
  background: string;
}

export const themes: Record<string, ITheme> = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
export const defaultTheme = {
  foreground: "#000000",
  background: "#eeeeee",
};
export type ContextDefaultValue = [ITheme, Dispatch<SetStateAction<ITheme>>];

export const ThemeContext = createContext<ContextDefaultValue>([
  defaultTheme,
  () => {},
]);
