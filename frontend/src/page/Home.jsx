// src/pages/Home.js
import React from 'react';
import './Home.css';
import backgroundImage from '../assets/timepass.jpg'; // Import the image

const Home = () => {
  return (
    <div className="home">
      <section
        className="hero"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Use the image
      >
        <h1 className="hero-title">My Website</h1>
      </section>
      <section className="description">
        <p>
          Welcome to my website! Here you will find all the information you need
          about our services and offerings. We are dedicated to providing the
          best experience for our users.
        </p>
      </section>
    </div>
  );
};

export default Home;
