import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaHome, FaInfo, FaCogs, FaProjectDiagram } from 'react-icons/fa'; // Import FontAwesome icons

const Header = () => {
  return (
    <div className="heading">
      <img src="/m.solutions logo.png" alt="logo" />
      <h2>MAXIE PLUMBING SERVICES</h2>
      <ul>
        {/* Use Link components for navigation */}
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/about"><FaInfo /> About Us</Link></li>
        <li><Link to="/services"><FaCogs /> Services</Link></li>
        <li><Link to="/projects"><FaProjectDiagram /> Projects</Link></li>
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
