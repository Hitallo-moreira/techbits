import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className='container content'>
      <div className="about">
        <h1>Plantify</h1>
        <p>At Plantify, we bring the beauty of nature to your doorstep. Our mission is to help you create a greener, healthier, and more vibrant living space with a curated selection of high-quality plants, pots, and gardening essentials. Whether you're a seasoned plant parent or just starting your journey, Plantify offers everything you need to nurture your love for greenery. Let’s grow together! 🌿</p>
          <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  )
}
