"use client";

import { useTheme } from "next-themes";
const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "dark" : "light"}
    </button>
  );
};

export default ThemeSwitcher;
