import React from "react";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import '../App.css';

const Contacts = () => {
  return (
    <div id="contact" className="contacts-container">
      {/* Contact Details */}
      <h2>CONTACTS</h2>
      <div className="contact-details">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <span className="text">7488776711</span>
        </div>
        <div className="contact-item">
          <FaInstagram className="icon" />
          <span className="text">
            <a href="https://www.instagram.com/drnancykashyap/">https://www.instagram.com/drnancykashyap/</a>
          </span>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28870.499122176017!2d86.93218069999999!3d25.243243200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f04b7912ae1ebd%3A0x6804e2da017088c4!2sGANGA%20HOMEO%20HALL!5e0!3m2!1sen!2sin!4v1735917728798!5m2!1sen!2sin"
          width="600"
          height="450"
          className="map-iframe"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
