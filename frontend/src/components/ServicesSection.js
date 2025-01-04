// src/components/ServicesSection.js
import React from 'react';
import '../App.css';
const ServicesSection = () => {
  const services = [
    { title: 'Consultation', description: 'Personalized health consultations.' },
    { title: 'Therapy', description: 'Specialized therapy services.' },
    { title: 'Treatment', description: 'Effective treatment options.' },
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
