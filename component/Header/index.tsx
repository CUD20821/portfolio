'use client'
import React from "react";
import Link from "next/link";
import "@/app/styles/header.css";
import Image from "next/image";
import { usePathname } from "next/navigation"; // 1. Import usePathname

const Header: React.FC = () => {
  const pathname = usePathname(); // 2. Get current path
  console.log("pathname ", pathname)
  return (
    <div className="header">
      <Link href={"/"} className="logo-ctn">
        <Image src={"/personal.png"} className="logo" alt="logo" width={34} height={34} />
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
