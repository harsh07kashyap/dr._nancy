// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from "../assets/images/logo.jpg"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo"><img src={logo} alt="Dr. Nancy" /></div>
      <nav className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#treatments">Treatments</a>
        <a href="#contact">Contacts</a>
      </nav>
      <div className="navbar-contact">
        <a href="tel:7488776711">Mob: 74887 76711</a>
        {/* <a href="#login">Log In</a> */}
      </div>
      <p></p>
    </header>
  );
};

export default Navbar;
