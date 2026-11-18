import { useContext } from "react";
import { ThemeContext } from "./theme-core";
import type { ThemeContextType } from "./theme-core";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
