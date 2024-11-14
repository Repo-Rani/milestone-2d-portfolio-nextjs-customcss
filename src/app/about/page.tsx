import SectionHeading from "@/components/SectionHeading";
import React from "react";
import { aboutInfo } from "../../../Data/data";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <section className="about-section">
      <SectionHeading>About Me</SectionHeading>
      <div className="about-container">
        <div className="about-text-content" data-aos="fade-left" data-aos-anchorPlacement="top-center">
          <h1 className=" text-bg about-title">{aboutInfo.title}</h1>
          <p className="about-description">{aboutInfo.description}</p>
          <br />
          <p className="about-highlight" data-aos="fade-right" data-aos-delay="200">
            Blending creativity and technology in every project. 💡
          </p>
          <div className="about-skills">
            <div className="about-skill-item">
              <div className="about-skill-icon">
                <FaCheck className="icon" />
              </div>
              <p className="about-skill-text">Frontend Development</p>
            </div>
            <div className="about-skill-item">
              <div className="about-skill-icon orange-bg">
                <FaCheck className="icon" />
              </div>
              <p className="about-skill-text">Backend Development</p>
            </div>
            <div className="about-skill-item">
              <div className="about-skill-icon green-bg">
                <FaCheck className="icon" />
              </div>
              <p className="about-skill-text">Full Stack Development</p>
            </div>
          </div>
        </div>
        <div className="about-stats-content" data-aos="zoom-in" data-aos-anchorPlacement="top-center" data-aos-delay="150">
          <div className="about-stat">
            <Image src="/images/customer.png" alt="image" width={80} height={80} className="stat-icon" />
            <p className="stat-value">{aboutInfo.client}</p>
            <p className="stat-label">Satisfied Customer</p>
          </div>
          <div className="about-stat">
            <Image src="/images/experience.png" alt="image" width={80} height={80} className="stat-icon" />
            <p className="stat-value">{aboutInfo.experience}</p>
            <p className="stat-label">Years Of Experience</p>
          </div>
          <div className="about-stat">
            <Image src="/images/completed.png" alt="image" width={80} height={80} className="stat-icon" />
            <p className="stat-value">{aboutInfo.project}</p>
            <p className="stat-label">Completed Project</p>
          </div>
          <div className="about-stat">
            <Image src="/images/rocket.png" alt="image" width={80} height={80} className="stat-icon" />
            <p className="stat-value">{aboutInfo.website}</p>
            <p className="stat-label">Website Launched</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
