"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@/app/styles/header.css";
import Image from "next/image";
import { usePathname } from "next/navigation"; // 1. Import usePathname

const Header: React.FC = () => {
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
      <Link href={"/"} className="logo-ctn">
        <Image
          src={"/personal.png"}
          className="logo"
          alt="logo"
          width={34}
          height={34}
        />
      </Link>

      <ul className="menu">
        <li className="menu-child">
          <Link href={"/now"}>Now</Link>
        </li>
        <li className="menu-child">
          <Link href={"/projects"}>Project</Link>
        </li>
        <li className="menu-child">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
