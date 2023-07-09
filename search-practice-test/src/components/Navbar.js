import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isNavOpenRef = useRef(isNavOpen);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    isNavOpenRef.current = isNavOpen;
  }, [isNavOpen]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeNav();
      }
    };

    const handleOutsideClick = (event) => {
      if (isNavOpenRef.current && !event.target.closest('.overlay-content')) {
        closeNav();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div id="myNav" className={`overlay ${isNavOpen ? 'open' : ''}`}>
        <button className="closebtn" onClick={closeNav}>&times;</button>
        <div className="overlay-content">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/about">Contact Us</Link>
        </div>
      </div> 
      <span className="open-button" onClick={openNav}>&#9776;</span>
    </>
  );
};

export default Navbar;
