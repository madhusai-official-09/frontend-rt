// components/Home/Navbar/Nav.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { FiCamera } from "react-icons/fi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Button } from "@/components/ui/button";

type Props = {
  openNav: () => void;
};

const Nav: React.FC<Props> = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        navBg ? "bg-[#0f142ed9] shadow-md" : "bg-transparent"
      }`}
      style={{ height: "12vh" }}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/ai logo.png" alt="AI Logo" width={40} height={40} />
          </div>
          <h1 className="text-xl hidden sm:block md:text-1xl text-white font-bold">
            Detection.AI
          </h1>
        </div>

        {/* NavLinks (desktop) */}
        <nav className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            const href = (link as any).url ?? (link as any).href ?? "/";
            const label = (link as any).Label ?? (link as any).label ?? "Link";
            return (
              <Link
                key={(link as any).id ?? label}
                href={href}
                className="group relative px-4 py-2 rounded-lg
    text-gray-500 md:text-base
    transition-all duration-300

    hover:text-red-600
    hover:bg-gradient-to-r
    hover:from-red-400/20
    hover:via-red-500/20
    hover:to-red-600/20
    hover:shadow-[0px_0px_12px_rgba(255,0,0,0.25)]"
              >
                {label}

                  {/* animated underline */}
  <span
    className="
      absolute left-1/2 -bottom-1 w-0 h-2px
      bg-red-600 rounded-full
      transition-all duration-300
      transform -translate-x-1/2
      group-hover:w-8
    "
  />
              </Link>
            );
          })}
        </nav>

        {/* actions */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => (window.location.href = "http://localhost:3000/detection")}
            className="px-6 py-2.5 text-sm rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-300 text-black flex items-center space-x-2"
          >
            {/* use size prop for icons to avoid typing issues */}
            <FiCamera size={16} />
            <span>Start Detection</span>
          </Button>

          {/* Burger for mobile: wrap icon in a button instead of adding onClick to icon props */}
          <button
            onClick={openNav}
            aria-label="Open menu"
            className="w-9 h-9 rounded-md flex items-center justify-center lg:hidden text-white"
          >
            <HiBars3BottomRight size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
