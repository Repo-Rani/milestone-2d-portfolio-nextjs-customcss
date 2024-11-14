"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingEffect: React.FC = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          "A Fullstack Developer",
          1000,
          "A UI/UX Designer",
          1000,
          "A Creative Technologist",
          1000,
          "A Programmer",
          1000,
        ]}
        wrapper="span"
        speed={50 as any} 
        className="typeWritter-section"
        repeat={Infinity}
      />
    </>
  );
};

export default TypingEffect;
