// ResponsiveNav.tsx
"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  const startDetection = () => {
    // place your detection starter logic here (open modal, navigate, open camera).
    console.log("Start detection clicked");
  };

  return (
    <>
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} onStart={startDetection} />
    </>
  );
};

export default ResponsiveNav;
