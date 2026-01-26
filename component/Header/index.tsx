"use client";
import React, { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";
import { useParams } from "next/navigation";
import { dataMenu } from "@/constants";

const Header: React.FC = () => {
  const { locale } = useParams();

  const pathname = usePathname(); // 2. Get current path

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Scroll down

        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scroll up

        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl p-5 transition-transform duration-350 flex justify-between items-end bg-(-bg-color) h-20 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center gap-2 h-10">
        <Link href={"/"} className="logo-ctn">
          <span>Lê Trung Đức</span>
        </Link>
      </div>

      <nav className="w-fit h-10 absolute left-[50%] transform -translate-x-[50%]">
        <ul className="flex justify-center items-center h-full py-0 px-3 border-border-base rounded-[100px] w-auto bg-bg-sub">
          {dataMenu.map((item) => (
            <li
              key={item.id}
              className={`${pathname.includes(item.path) ? "text-main" : ""}`}
            >
              <Link href={item.path}>
                {locale === "vi" ? item.nameVN : item.nameJP}
              </Link>
              <span
                className={`${
                  pathname.includes(item.path)
                    ? "absolute w-[60%] h-px bg-main bottom-[-0.5px] left-1/2 transform -translate-x-1/2 rounded-full duration-300"
                    : ""
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-2 h-10">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
export default Header;
