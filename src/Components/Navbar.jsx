import React, { useState } from 'react';
import './App.css'; 
import { Link } from 'react-router-dom';

function Navbar({ size }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img 
          style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
          src='https://r2.erweima.ai/imgcompressed/compressed_5a4efd71cf6a157f219826b341e45f7d.webp' 
          alt="Logo" 
        />
        <h2>𝕬𝖓𝖎𝖒𝖊</h2>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-link ${isOpen ? 'mobile-menu open-menu' : 'mobile-menu'}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/addcard" onClick={toggleMenu}>Comicslist</Link>
        </li>
        <li>
          <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
        </li>
        <li>
          <Link to="/cartitem" onClick={toggleMenu}>
            🛒 Cart ({size})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
