export interface ITheme {
  foreground: string;
  background: string;
}

const root = document.documentElement;
console.log(getComputedStyle(root).getPropertyValue("--dark-foreground"));

export const Themes: Record<string, ITheme> = {
  light: {
    foreground: getComputedStyle(root).getPropertyValue("--light-foreground"),
    background: getComputedStyle(root).getPropertyValue("--light-background"),
  },
  dark: {
    foreground: getComputedStyle(root).getPropertyValue("--dark-foreground"),
    background: getComputedStyle(root).getPropertyValue("--dark-background"),
  },
};
export const DefaultTheme = {
  foreground: getComputedStyle(root).getPropertyValue("--light-foreground"),
  background: getComputedStyle(root).getPropertyValue("--light-background"),
};

export interface IAction {
  type: string;
  // payload: string | null | undefined;
}

export enum ACTION_TYPE {
  TOGGLE_THEME = "TOGGLE_THEME",
}
