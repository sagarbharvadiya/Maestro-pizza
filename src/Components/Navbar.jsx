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
                <li><a href="#Home">MENU</a></li>
                <li><a href="#Home">ABOUT</a></li>
                <li><a href="#Home">SHOP</a></li>
                <li><a href="#Home">NEWS</a></li>
                <li><a href="#Home">CONTACT</a></li>
            </ul>
        </div>

    </nav>
    </>
  )
};

export default Navbar;