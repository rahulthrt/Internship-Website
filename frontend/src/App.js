// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/Navbar';
import Home from './page/Home'; // Import Home component

const LabExperiment = () => <h2>Lab Experiment</h2>;
const About = () => <h2>About</h2>;

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lab-experiment" element={<LabExperiment />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
