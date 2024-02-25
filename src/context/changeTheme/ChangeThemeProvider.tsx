import React, { useMemo, useState } from "react";
import {
  ContextDefaultValue,
  ThemeContext,
  defaultTheme,
} from "./ThemeContext";
interface ThemeContextProps {
  children: React.ReactNode;
}
export const ChangeThemeProvider: React.FC<ThemeContextProps> = ({
  children,
}: ThemeContextProps) => {
  const [theme, setTheme] = useState(defaultTheme);
  const value: ContextDefaultValue = useMemo(() => [theme, setTheme], [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
