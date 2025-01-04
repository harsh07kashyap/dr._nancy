// src/components/Footer.js
import React from 'react';
import '../App.css';
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Dr. Archana's Clinic</p>
      <div className="footer-links">
        <a href="#facebook">Facebook</a> | <a href="#twitter">Twitter</a> | <a href="#linkedin">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
