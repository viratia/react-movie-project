import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Navbar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🎬 Movie App</Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/favorites" className="nav-link" onClick={() => setIsMenuOpen(false)}>Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
