'use client';
import React from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { NavProps } from "../../Types/type";
export const MobileNav = ({ showNav, closeNav }: NavProps) => {
  const navOpen = showNav ? "mobile-nav-opened" : "mobile-nav-closed";
  return (
    <div>
        <div className={`overlay ${navOpen}`} ></div>
      <div className={`nav-container ${navOpen}`}>
        <div className="navs-div">
          <ul className="nav-link-list">
            <li className="navbar-link  navsbar-link">
              <Link href="/">Home</Link>
            </li>
            <li className="navbar-link navsbar-link">
              <Link href="/about">About</Link>
            </li>
            <li className="navbar-link navsbar-link">
              <Link href="/service">Services</Link>
            </li>
            <li className="navbar-link navsbar-link">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="navbar-link navsbar-link">
              <Link href="/project">Projects</Link>
            </li>
            <li className="navbar-link navsbar-link">
              <Link href="/review">Reviews</Link>
            </li>
            <li className="navbar-link navsbar-link">
              <Link href="/blog">Blogs</Link>
            </li>
            <li className="navbar-link navsbar-link">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <CgClose onClick={closeNav} 
          className="close-btn" />
        </div>
      </div>
    </div>
  );
};