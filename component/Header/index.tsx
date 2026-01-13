"use client";
import React, { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import "./header.css";
import Image from "next/image";
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
      className="header"
      style={{
        transform: isVisible
          ? "translateY(0) translateX(-50%)"
          : "translateY(-140%) translateX(-50%)",
      }}
    >
      <div className="styles_ctnLeftHeader">
        <Link href={"/"} className="logo-ctn">
          {/* <Image
            src={"/me.jpeg"}
            className="logo"
            alt="logo"
            width={40}
            height={40}
          /> */}
          <span>Lê Trung Đức</span>
        </Link>
      </div>

      <nav className="styles_nav">
        <ul className="styles_menu">
          {dataMenu.map((item) => (
            <li
              key={item.id}
              className={`menu-child ${
                pathname.includes(item.path) ? "menu-child-active" : ""
              }`}
            >
              <Link href={item.path}>
                {locale === "vi" ? item.nameVN : item.nameJP}
              </Link>
              <span
                className={`${
                  pathname.includes(item.path) ? "line-active" : ""
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="styles_ctnRightHeader">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
export default Header;
