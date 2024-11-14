import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { servicesData } from '../../../Data/data';
import ServiceCard from '@/components/ServiceCard';
const Service = () => {
  return (
    <section className='service-section'>
      <SectionHeading>Services</SectionHeading>

      <div className='text-center-container'>
        <h1 data-aos='fade-right' data-aos-delay="200" className='comprehensive-title'>
          Comprehensive Web Solutions
        </h1>
        <br />
        <p data-aos='fade-left' data-aos-delay="200" className='description-text'>
          Designed to Elevate Your Online Presence. I create custom web solutions tailored to your brand, ensuring modern, responsive websites that exceed expectations and drive results. ⋆｡°✩
        </p>
      </div>
      <div className='service-grid'>
        {servicesData.map((service, i) => (
          <div
            key={service.id}
            data-aos='fade-left'
            data-aos-anchorPlacement='top-center'
            data-aos-delay={`${i * 150}`}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
