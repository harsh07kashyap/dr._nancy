// TreatmentSection.js
import React from 'react';
import '../App.css';

const treatments = [
  { title: 'Cholesterol', description: 'Cholesterol is a waxy, fat-like substance that is present in all cells of the body' },
  { title: 'PCOD', description: 'PCOD (Polycystic Ovarian Disease) is a hormonal disorder that affects women of reproductive age.' },
  { title: 'Epilepsy', description: 'Epilepsy is a chronic brain disorder that causes seizures, which are brief episodes of involuntary brain activity:' },
  { title: 'Fibroadenoma', description: 'A fibroadenoma is a non-cancerous, solid, and firm breast tumor that is made up of glandular and connective tissue' },
  { title: 'Piles', description: 'Lumps inside and around your bottom (anus)' },
//   { title: 'IBS', description: 'Symptoms include cramping, abdominal pain, bloating, gas, and diarrhea or constipation, or both' },
];

function TreatmentSection() {
  return (
    <section  id ="treatments" className="treatment-section">
      <h2>SUCCESSFULLY TREATED</h2>
      <div className="treatment-grid">
        {treatments.map((treatment, index) => (
          <div key={index} className="treatment-card">
            <h3>{treatment.title}</h3>
            <p>{treatment.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TreatmentSection;
