import React from 'react';
import JsonData from '../Data/data.json'

const Pizzamenuitem = () => {
    return (
        <>
            <div className="Pizzamenuitem">
                <div className='container'>
                    <div className="PizzaMenu-title">
                        <h3>Pizza Menu</h3>
                        <h1>WELCOME TO</h1>
                        <h1>MAESTRO PIZZINI</h1>
                    </div>
                    <div className='main'>
                    {
                            JsonData.Pizzamenuitem.map((d, i) => (
                                <div className='Pizza-item'>
                                <div className='pizza-item-img'>
                                    <img src={d.image} alt="pizza" />
                                    <h1>{d.title}</h1>
                                    <p>{d.details}</p>
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

export default Pizzamenuitem