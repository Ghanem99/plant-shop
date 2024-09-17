import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Background image and styling

const LandingPage = () => (
  <div className="landing">
    <h1>Welcome to Plant Shop</h1>
    <p>Your one-stop shop for beautiful houseplants</p>
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;
