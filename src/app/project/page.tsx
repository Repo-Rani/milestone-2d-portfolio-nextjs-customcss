import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { projectData } from "../../../Data/data";
import Link from "next/link";
import Image from "next/image";
const Project = () => {
  return (
    <section className="project-section">
      <SectionHeading>My Projects</SectionHeading>
      <div className="project-grid">
        {projectData.map((project, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-anchorPlacement="top-center"
              data-aos-delay={`${i * 150}`}
              key={project.id}
              className="project-card"
            >
              <Link href={project.url} target="_blank" passHref>
                <div className="project-image-wrapper">
                  <Image
                    src={project.image}
                    alt="project"
                    layout="fill"
                    className="project-image"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
