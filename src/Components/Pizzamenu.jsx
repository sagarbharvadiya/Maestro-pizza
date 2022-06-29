import React from 'react'
import JsonData from '../Data/data.json'

const Pizzamenu = () => {
    return (
        <>
            <div className="PizzaMenu">
                <div className=" container">
                    <div className="PizzaMenu-title">
                        <h3>Pizza Menu</h3>
                        <h1>WELCOME TO</h1>
                        <h1>MAESTRO PIZZINI</h1>
                    </div>
                    <div>
                        {
                            JsonData.PizzaMenu.map((d, i) => (
                                <div className='PizzaMenu-item'>
                                    <div className='Pizza-img'>
                                        <img src={d.image} alt="pizza" />
                                    </div>
                                    <div className='Pizza-details'>
                                        <h1>{d.title}</h1>
                                        <p>{d.details}</p>
                                    </div>
                                    <div className='Pizza-price'>
                                        <h3>{d.price}</h3>
                                    </div>
                                </div>
                            )
                            )
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Pizzamenu