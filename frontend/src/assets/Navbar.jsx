// src/assets/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming Navbar.css is in the same folder

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/lab-experiment">Lab Experiment</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
