import React from 'react';
import img from '../images/aboutus-bg-1.jpg';

const About = () => {
    return (
        <>
            <div className="about" id='about'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-6 p-25">
                            <h3>About Us</h3>
                            <h1>WELCOME TO
                                MAESTRO FIZZING</h1>
                            <p>
                                investigation's demonstraverunt lectores legere me lius
                                quod ii legunt saepius. Clarions est ethan processus dyaus,
                                quise sequitur mutationem consuetudium lectorum.
                            </p>
                            <div className='about-btn'>
                                <a href="" className='btn btn-smart'>READ MORE</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="about-img">
                                <img src={img} alt="aboutbg" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default About;