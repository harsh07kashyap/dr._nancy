// AboutSection.js
import React from 'react';
import '../App.css';
import profileImage from '../assets/images/didi-ai-brush-removebg-ubm70ngx.png'; // Update with your image path

function AboutSection() {
  return (
    <section id="about" className="about-section">
  <div className="about-container">
    <div className="about-image">
      <img src={profileImage} alt="Dr. Nancy" />
    </div>
    <div className="about-text">
      <h1 className="about-title">ABOUT</h1>
      <p className="about-description">
        Dr. Nancy is a homoeopath enthusiast who has started to treat all types of acute and chronic diseases.
      </p>
      
      <h2>BHMS</h2>
      <p>R.B.T.S Govt. Hom. Med. College & Hospital, Muzaffarpur (Govt. of India)</p>
      <h3>My Approach</h3>
      <p>
        I believe that healthy diet and good mental health are the foundations of inner healing. With additional
        training in nutrition and health, I take a comprehensive approach to address acute and chronic conditions.
      </p>
      <h3>My Services</h3>
      <ul>
        <li>Homeopathic consultations for acute and chronic conditions</li>
        <li>Personalized nutrition and wellness plans</li>
        <li>Mind-body therapies for stress management and emotional balance</li>
      </ul>
    </div>
  </div>
</section>

  );
}

export default AboutSection;
