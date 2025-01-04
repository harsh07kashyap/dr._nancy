// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import AboutSection from './components/About';
import TreatmentSection from './components/TreatmentSection';
import Contacts from './components/Contacts';
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutSection/>
            <TreatmentSection/>
            <Contacts/>
          </>
        } />
        {/* Additional Routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
