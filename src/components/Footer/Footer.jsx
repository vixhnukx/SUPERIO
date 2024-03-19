import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          
        </div>
        <div className="footer-box">
            <h4 className="footer-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li>
                <Link to='/About' >About Us</Link>
              </li>

              <li>
                <Link to='/Contact' >Contact</Link>
              </li>

            </ul>
          </div>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
