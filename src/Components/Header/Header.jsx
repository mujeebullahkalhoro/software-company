import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className='navbar'>
        <div className='Logo-Section'>
          <Link to="/">
            <img className="logo-pic" src=".\src\assets\Logo.jpeg" alt="Logo" />
          </Link>
          <div className='company-name'>
            <h3>GlintTech</h3>
            <h2 className='tech-innovative'>Tech-Innovation</h2>
          </div>
        </div>

        <div className={`Nav-Items ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'} onClick={toggleMenu}>Contact Us</NavLink>
          <NavLink to="/choose" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'} onClick={toggleMenu}>Why Choose Us</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'} onClick={toggleMenu}>Services</NavLink>
          <NavLink to="/vacancy" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'} onClick={toggleMenu}>Hiring Vacancy</NavLink>
        </div>

        <div className='Search-Section'>
             <input type="text" className='search-input' placeholder="Search here" />
            <button className='search-button'>
                    <i className="fa-solid fa-magnifying-glass"></i>
            </button>
       </div>


        {/* Hamburger Icon */}
        <div className='hamburger' onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        </div>

      </nav>
    </header>
  );
}

export default Header;
