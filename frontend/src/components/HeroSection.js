// src/components/HeroSection.js
import React from 'react';
import '../App.css';
import intro_image from "../assets/images/intro_image.jpg"


const HeroSection = () => {
  return (
    <section className="hero">
      <div className='hero_intro_img'><img src={intro_image} alt="Dr. Nancy" /></div>
      <h1>Dr. Nancy</h1>
      <p>BHMS, DNHE (Homeopathy)</p>
    </section>
  );
};

export default HeroSection;
