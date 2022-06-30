import React from 'react'
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
    <div className="Banner">
        <Navbar/>
        <div className="banner-content">
            <div className='container'>
                <div className="banner-text">
                <h3>Pizza Delivery</h3>
                <h1>MAESTRO PIZINNI</h1>
                <p>Lorem ipsum, dolor sit amen consectetur adipisicing elit. Blanditiis amet quas ea itaque odio inventore a,</p>
               <div className="banner-btn">
                <a href="#DELIVERY NOW" className='btn btn-smart '>
                    DELIVERY NOW</a>
               </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default Header;