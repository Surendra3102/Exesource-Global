import { useEffect, useState } from "react";
import "./Navbar.css";

import logo from "../assets/logo.png";

function Navbar({ openMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      {/* Logo */}
      <div className="logo">
        <img
          src={logo}
          alt="Exesource Global"
        />
      </div>

      {/* Find Button */}
      <button
        className="find-btn"
        onClick={openMenu}
      >
        <span>FIND</span>

        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </header>
  );
}

export default Navbar;