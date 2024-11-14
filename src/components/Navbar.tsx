"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Props } from "../../Types/type";
const Navbar = ({ openNav }: Props) => {
  const [navBg, setnavBg] = useState(true);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setnavBg(true);
      }
      if (window.scrollY < 90) {
        setnavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <header
      className={`navbar ${
        navBg ? "navbar-bg-scrolled" : "navbar-bg-transparent"
      }`}
    >
      <nav className="navbar-container">
        <div className="logo">
          <h1 className="navbar-logo">
            Rani
            <span className="navbar-logo-highlight">Creations</span>
          </h1>
        </div>
        <div className="navbar-links ">
          <ul className="navbar-link-list">
            <li className="navbar-link  navbars-link">
              <Link href="/">Home</Link>
            </li>
            <li className="navbar-link navbars-link">
              <Link href="/about">About</Link>
            </li>
            <li className="navbar-link navbars-link">
              <Link href="/service">Services</Link>
            </li>
            <li className="navbar-link navbars-link">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="navbar-link navbars-link">
              <Link href="/project">Projects</Link>
            </li>
            <li className="navbar-link navbars-link">
              <Link href="/review">Reviews</Link>
            </li>
            <li className="navbar-link navbars-link">
              <Link href="/blog">Blogs</Link>
            </li>
            <li className="navbar-link navbars-link">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-actions">
          <Link href="/contact">
            <button className="hire-button">Hire Me</button>
          </Link>
          <HiBars3BottomRight onClick={openNav} className="burger-menu" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
