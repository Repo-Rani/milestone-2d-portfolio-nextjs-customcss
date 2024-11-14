import React from "react";
import { BaseInfo } from "../../Data/data";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import TypingEffect from "./TypingEffect";
const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="contentContainer">
        <div className="textContent">
          <div className="main-div">
            <h1 data-aos="fade-left" className="subHeading">
              Hey I am <span>{BaseInfo.name}</span>
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="mainTitle text-bg"
            >
              {BaseInfo.position}
            </h1>
            <TypingEffect data-aos="fade-right" data-aos-delay="100" />
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="description"
            >
              Hello, I am <span className="boldText">Rani</span> !
              {BaseInfo.description}
            </p>
            <br />
            <p data-aos="fade-right" data-aos-delay="100" className="boldTexts">
              Bringing ideas to life with each line of code. 💻
            </p>
            <a
              href="/assets/Rani_Resume.pdf"
              download="Rani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="a-btn"
            >
              <button
                data-aos="zoom-in"
                data-aos-delay="300"
                className="buttonContainer"
              >
                <span>Download CV</span>
                <FaDownload />
              </button>
            </a>
          </div>
          <div className="main-image-section">
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="imageContainer"
            >
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={400}
                height={400}
                className="images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
