import React from "react";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  // get the pathname
  const location = useLocation();
  const pathname = location.pathname; // always string
  const isActive = (path) =>
    pathname === path || pathname?.startsWith(path + "/")
      ? "text-black "
      : "text-gray-500 ";
  return (
    <div className="w-full h-full flex items-center justify-between p-28">
      {/* Logo */}
      <div className="text-[32px]">
        <span className="font-bold">Ching</span>
        <span className="font-bold">.</span>
        <span className="bg-black text-white p-2 rounded-md">Dev</span>
      </div>
      {/* Navbar */}
      <div className="flex gap-10 text-[24px]">
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="/portfolio" className={isActive("/portfolio")}>
          Portfolio
        </Link>
        <Link to="/experiences" className={isActive("/experiences")}>
          Experiences
        </Link>
        <Link to="/design" className={isActive("/design")}>
          Design
        </Link>
        <Link to="/about" className={isActive("/about")}>
          About
        </Link>
        <Link to="/contact" className={isActive("/contact")}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
