"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();
  // Lấy logic của theme hiện tại
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  },[])

  if(!mounted) {
    return;
  }


  return (
      <div className="switch" onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}>
        <Image
          src={theme === "dark" ? "/off-bulb.png" : "/light-bulb.png"}
          alt="logo"
          width={40}
          height={40}
        />
      </div>
  );
};

export default ThemeSwitcher;
