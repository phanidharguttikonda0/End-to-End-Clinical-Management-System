import React, { useEffect, useState } from 'react';
import './kannaya.css'; // Import the CSS file for styles

const KannayaClinics = () => {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection % 3) + 1); // Rotate between 1, 2, and 3
    }, 10000); // Change section every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container">
      <div className={`section ${currentSection === 1 ? 'active' : ''}`}>
        <h2>Welcome to Kannaya Clinics</h2>
        <p>At Kannaya Clinics, we are committed to providing exceptional healthcare services across multiple branches throughout India. Our network of hospitals is designed to meet the diverse medical needs of our community with a focus on quality, accessibility, and patient satisfaction.</p>
      </div>
      <div className={`section ${currentSection === 2 ? 'active' : ''}`}>
        <h2>Our Features</h2>
        <ul>
          <li><strong>Comprehensive Medical Services:</strong> From general medicine to specialized treatments, we offer a wide range of healthcare services including cardiology, neurology, orthopedics, pediatrics, gynecology, and more.</li>
          <li><strong>State-of-the-Art Facilities:</strong> Our clinics are equipped with the latest medical technology and advanced diagnostic tools to ensure accurate and timely care.</li>
          <li><strong>Expert Medical Professionals:</strong> Our team comprises highly qualified and experienced doctors, nurses, and support staff dedicated to delivering the best possible care.</li>
          <li><strong>Patient-Centered Approach:</strong> We prioritize patient comfort and well-being, providing personalized care plans tailored to individual needs.</li>
          <li><strong>Convenient Locations:</strong> With multiple branches across India, we ensure that quality healthcare is accessible to you, no matter where you are.</li>
          <li><strong>Affordable Care:</strong> We offer competitive pricing and various payment options to make healthcare affordable for all.</li>
        </ul>
      </div>
      <div className={`section ${currentSection === 3 ? 'active' : ''}`}>
        <h2>Our Conditions</h2>
        <ul>
          <li><strong>Quality Assurance:</strong> We adhere to stringent quality standards and regularly update our practices to meet international healthcare benchmarks.</li>
          <li><strong>Hygiene and Safety:</strong> We maintain rigorous hygiene protocols and a safe environment in all our facilities to ensure the well-being of our patients and staff.</li>
          <li><strong>Patient Confidentiality:</strong> We uphold the highest standards of privacy and confidentiality in handling patient information.</li>
          <li><strong>24/7 Emergency Services:</strong> Our emergency departments are operational round-the-clock to handle urgent medical situations promptly and efficiently.</li>
        </ul>
      </div>
    </div>
  );
};

export default KannayaClinics;
