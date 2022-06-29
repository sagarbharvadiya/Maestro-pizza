import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <div className='container'>
                    <div className='Footer-about'>
                        <div className='Footer-text'>
                            <h2>About us</h2>
                            <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Eodem modo typi, qui nunc nobis videotex. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Investigationes demonstraverunt lectores.</p>
                            <span><b>Monday to Saturday :</b> 9.00 am to 9.00 pm</span><br />
                            <span><b>Sunday :</b> 10.00 am to 6.00 pm</span>
                        </div>
                        <div className='link'>
                            <h1>Quick Links</h1>
                            <ul>
                                <li><a href="#Home">Need help ? Contact us</a></li>
                                <li><a href="#Home">Our latest news</a></li>
                                <li><a href="#Home">About us page</a></li>
                                <li><a href="#Home">Table booking</a></li>
                                <li><a href="#Home">Fast delivery</a></li>
                            </ul>
                        </div>
                        <div className='link'>
                            <h1>Recopies</h1>
                            <ul>
                                <li><a href="#Home">Pizza Biscuit Bake</a></li>
                                <li><a href="#Home">Pizza Margeritta</a></li>
                                <li><a href="#Home">Pizza Prosciutto</a></li>
                                <li><a href="#Home">Pizza Low Carb</a></li>
                                <li><a href="#Home">Pizza Del Sole</a></li>
                            </ul>
                        </div>
                        <div className='link last-link'>
                            <h1>Contact us</h1>
                            <ul>
                                <li><a href="#Home"><i className="fa-solid fa-phone"></i>(+40) 74 0920 2288</a></li>
                                <li><a href="#Home"><i className="fa-solid fa-envelope"></i> office@example.com</a></li>
                                <li><a href="#Home"><i className="fa-solid fa-location-dot"></i> New York 11673</a></li>
                            </ul>
                            <div className='social-icon'>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-google-plus"></i>
                            <i class="fa-brands fa-instagram"></i>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
            <div className='copy-right'>
                <div className='container'>
                    <div className='text'>
                     Copyright by ModelTheme. All Rights Reserved.
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer