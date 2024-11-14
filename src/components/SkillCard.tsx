import React from "react";
import { skillProps } from "../../Types/type";
import Image from "next/image";
const SkillCard = ({ skill }: skillProps) => {
  const { image, percent, title } = skill;
  return (
    <div className="skill-card">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="skill-image"
      />
      <h1 className="skill-title">{title}</h1>
      <div className="skill-percent">{percent}</div>
    </div>
  );
};

export default SkillCard;
