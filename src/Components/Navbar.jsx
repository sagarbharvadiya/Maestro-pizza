import React from 'react'
import  logo from '../images/logo.png'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-text">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className='navbar-ul'>
                <li><a href="#Home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#menu">MENU</a></li>
                <li><a href="#shop">SHOP</a></li>
                <li><a href="#news">NEWS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>

    </nav>
    </>
  )
};

export default Navbar;