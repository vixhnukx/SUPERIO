import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"><Link to="/" >SUPERIO</Link></div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={isOpen ? 'toggle-line open' : 'toggle-line'}></div>
          <div className={isOpen ? 'toggle-line open' : 'toggle-line'}></div>
          <div className={isOpen ? 'toggle-line open' : 'toggle-line'}></div>
        </div>
        <ul className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to='/about' className="navbar-link" onClick={closeMenu}>About</Link>
          </li>
          
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
