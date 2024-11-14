import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { skillsData } from "../../../Data/data";
import SkillCard from "@/components/SkillCard";

const Skill = () => {
  return (
    <section className="skill-section">
      <SectionHeading>My Skills</SectionHeading>
      <div className="skill-grid">
        {skillsData.map((skill, i) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-anchorPlacement="top-center"
              data-aos-delay={`${i * 150}`}
              key={skill.id}
            >
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
