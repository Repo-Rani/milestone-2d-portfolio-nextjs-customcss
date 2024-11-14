import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-left-side">
          <div>
            <div className="footer-logo-wrapper">
              <span className="footer-logo">Rani</span>
              <span className="footer-logos">Creations</span>
            </div>
            <h1 className="footer-des">
              Thank you for visiting! I build responsive websites that elevate your online presence. Explore my work and reach out to create something extraordinary together!
            </h1>
            <p className="footer-email ">
              <FaEnvelope className="footer-envelop-emails" /> ranimiss968@gmail.com
            </p>
          </div>
          <div className="footer-links-wrapper">
            <h1 className="footer-heading">
              <i>Quick Links</i>
            </h1>
            <ul className="footer-links ">
              <li><Link className="footer-link" href='/'>Home</Link></li>
              <li><Link className="footer-link" href='/about'>About</Link></li>
              <li><Link className="footer-link" href='/service'>Services</Link></li>
              <li><Link className="footer-link" href='/skills'>Skills</Link></li>
              <li><Link className="footer-link" href='/project'>Projects</Link></li>
              <li><Link className="footer-link" href='/review'>Reviews</Link></li>
              <li><Link className="footer-link" href='/blog'>Blogs</Link></li>
              <li><Link className="footer-link" href='/contact'>Contact</Link></li>
            </ul>
          </div>
          <div className="footer-right-side">
            <h1 className="footer-map-icons">
              <i>Address</i>
            </h1>
            <div className="footer-right-content">
              <MapIcon className="footer-map-icon" />
              <p className="footer-address">North, Karachi Pakistan</p>
            </div>
            <div className="footer-envelop-section">
              <EnvelopeIcon className="footer-envelop-icon" />
              <p className="footer-envelop-email">ranimiss968@gmail.com</p>
            </div>
            <div className="footer-phoneIcon-section">
              <PhoneIcon className="footer-phone-icon" />
              <p className="footer-number">0302-2886058</p>
            </div>
            <div className="footer-social-links">
              <a href="https://github.com/Repo-Rani" target="_blank" rel="noopener noreferrer" title="Github">
                <FaGithub className="footer-social-icon" />
              </a>
              <a href="https://www.instagram.com/starry__rani/?hl=en" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FaInstagram className="footer-social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/rani-miss-4baa712ba/" target="_blank" rel="noopener noreferrer" title="Linkedin">
                <FaLinkedin className="footer-social-icon" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100089698213012" target="_blank" rel="noopener noreferrer" title="Facebook">
                <FaFacebook className="footer-social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} RaniCreations | All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
