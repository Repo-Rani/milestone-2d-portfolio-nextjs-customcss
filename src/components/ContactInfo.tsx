'use client'
import React from 'react';
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa';
import { contactData } from '../../Data/data';
const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info-container">
      <div className="contact-info-item">
        <div className="icon-container">
          <FaPhone />
        </div>
        <div className="contact-info-text">
          <h1>Phone</h1>
          <p>{contactData.phone}</p>
        </div>
      </div>
      <div className="contact-info-item">
        <div className="icon-container">
          <FaEnvelope />
        </div>
        <div className="contact-info-text">
          <h1>Email Address</h1>
          <p>{contactData.email}</p>
        </div>
      </div>
      <div className="contact-info-item">
        <div className="icon-container">
          <FaMap />
        </div>
        <div className="contact-info-text">
          <h1>Address</h1>
          <p>{contactData.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
