"use client";
import React, { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import SectionHeading from "@/components/SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="contact-section">
      <SectionHeading>For Contact</SectionHeading>
      <div className="contact-grid ">
        <div
          className="contact-left"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <ContactForm />
        </div>
        <div
          className="contact-right"
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
