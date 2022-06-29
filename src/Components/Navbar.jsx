import React from 'react'
import logo from '../images/logo.png'
import { useState } from 'react';

const Navbar = () => {

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-text">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <ul className={showMediaIcons ? "navbar-ul navbar-mobile" : 'navbar-ul'}>
              <li><a href="#Home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#menu">MENU</a></li>
              <li><a href="#shop">SHOP</a></li>
              <li><a href="#news">NEWS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
             <div className='hamburger-menu' onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <i className="fa-solid fa-bars"></i>
              </div>
          </div>
        </div>

      </nav>
    </>
  )
};

export default Navbar;