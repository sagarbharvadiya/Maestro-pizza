import React from 'react'
import img from '../images/pizzamenu-bg.jpg';

const Menu = () => {
    return (
        <>
            <div className='menu' id='menu'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-6">
                            <div className="menu-img">
                                <img src={img} alt="menubg" />
                            </div>
                        </div>
                        <div className="col-6 p-25">
                            <h3>The Pizza Menu</h3>
                            <h1>CHICAGO
                                THIN CRUST</h1>
                            <p>
                                Investigational demonstraverunt lectores legere me lius
                                quod ii legunt saepius. Claritas est etiam processus dynaus,
                                quise sequitur mutationem consuetudium lectorum.
                            </p>
                            <div className='about-btn'>
                                <a href="" className='btn btn-smart'>VIEW MORE</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Menu