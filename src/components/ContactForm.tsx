'use client';
import React from 'react';
const ContactForm: React.FC = () => {
  return (
    <div className="contact-form-container">
      <h1 className=" text-bg contact-form-heading">
        Let's Work Together
      </h1>
      <p className="contact-form-subheading">
        Have a project in mind or need assistance? Let's connect! I am here to listen, collaborate, and bring your ideas to life. Reach out, and together, we can create something impactful!
      </p>
      <form className="form-sec">
        <div className="input-group input-group-md">
          <input
            type="text"
            placeholder="First name"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Last name"
            className="input-field"
          />
        </div>

        <div className="input-group input-group-md">
          <input
            type="email"
            placeholder="Email address"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input-field"
          />
        </div>
        <div>
          <select className="select-field">
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">FullStack Development</option>
          </select>
        </div>
        <textarea
          className="textarea-field"
          rows={9}
          placeholder="Message"
        ></textarea>
        <div className="btn-div">
          <button className="button-send-message">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
