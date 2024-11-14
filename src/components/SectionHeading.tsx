import React from 'react';
import { aboutProps } from '../../Types/type';
const SectionHeading = ({ children }: aboutProps) => {
  return (
    <h1 className="section-heading">{children}</h1>
  );
};

export default SectionHeading;
