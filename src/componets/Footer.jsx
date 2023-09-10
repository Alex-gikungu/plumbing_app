import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              M.solutions is a plumbing service provider that offers quality plumbing services to clients nationwide, thanks to the high level of expertise we provide.
            </p>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: kamaumaxwel4@gmail.com</p>
            <p>Phone: (+254) 799 906 613</p>
          </div>
          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <div id="facebook">
                <a href="https://www.facebook.com/Kamau Maxy" target="_blank">
                  <img src="./face.png" alt="Facebook" />
                </a>
              </div>
              <div id="whatsapp">
                <a href="https://wa.me/+254799906613" target="_blank">
                  <img src="./watsapp.png" alt="WhatsApp" />
                </a>
              </div>
              <div id="gmail">
                <a href="mailto:kamaumaxwel4@gmail.com">
                  <img src="./gmail.png" alt="Gmail" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 M.Solution Plumbing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
