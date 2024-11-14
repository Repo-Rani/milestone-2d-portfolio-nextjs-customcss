"use client";
import { ServiceProps } from "../../Types/type";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <Tilt className="service-card">
      <Image
        src={service.icon}
        alt={service.title}
        width={50}
        height={50}
        className="service-image"
      />
      <h1 className="service-title">{service.title}</h1>
      <p className="service-description">{service.description}</p>
    </Tilt>
  );
};

export default ServiceCard;
