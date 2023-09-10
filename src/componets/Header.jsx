import React from 'react';
import { FaHome, FaInfo, FaCogs, FaProjectDiagram } from 'react-icons/fa'; // Import FontAwesome icons

const Header = () => {
  return (
    <div className="heading">
      <img src="/m.solutions logo.png" alt="logo" />
      <h2>M. Plumbing Solutions</h2>
      <ul>
        <li><a href="/"><FaHome /> Home</a></li>
        <li><a href="/about"><FaInfo /> About Us</a></li>
        <li><a href="/services"><FaCogs /> Services</a></li>
        <li><a href="/projects"><FaProjectDiagram /> Projects</a></li>
      </ul>
      <div className="cnt">
        <img src="/call.png" alt="call" />
        <p>Call us on<br />(+254) 799 906 613</p>
        <img src="/email logo.png" alt="email" />
        <p>Email us on<br />kamaumaxwel4@gmail.com</p>
      </div>
    </div>
  );
};

export default Header;
