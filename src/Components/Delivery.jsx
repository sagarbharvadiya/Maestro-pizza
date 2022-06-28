import React from 'react'

const Delivery = () => {
    return (
        <>
            <div className="delivery">
                <div className='container'>
                    <div className='delivery-form'>
                        <div className='form-title'>
                            <h3>
                                Quick Delivery</h3>
                            <h1>ORDER A
                                PIZZA NOW</h1>
                            <p>Investigationes demonstraverunt lectores legere me lius
                                quod ii legunt saepius. Claritas est etiam processus.</p>
                        </div>
                        <form action="">
                            <div className=' d-flex'>
                            <input type="text" placeholder='First Name' />
                            <input type="text" placeholder='Last Name' />
                            </div>
                            <input className='address' type="text" placeholder='Enter Street Address' />
                            <div className=' d-flex'>
                            <input type="text" placeholder='Apartment / Room' />
                            <input type="number" placeholder='Phone Number' />
                            </div>
                            <select name="PizzaType" id="">
                                <option value="PizzaType" defaultChecked>PizzaType</option>
                                <option value="Pizza Biscuit Bake">Pizza Biscuit Bake</option>
                                <option value="Pizza Margeritta">Pizza Margeritta</option>
                                <option value="Pizza Prosciutto">Pizza Prosciutto</option>
                                <option value="Pizza Low Carb">Pizza Low Carb</option>
                                <option value="Pizza Del Sole">Pizza Del Sole</option>
                            </select>
                            <div className=' d-flex'>
                            <input type="number" placeholder='Enter Number' />
                            <select name="Size" id="">
                                <option value="Size" defaultChecked>Size</option>
                                <option value="Small - 10 / 25 cm">Small - 10 / 25 cm</option>
                                <option value="Medium - 12 / 30 cm">Medium - 12 / 30 cm</option>
                                <option value="Large - 14 / 35 cm">Large - 14 / 35 cm</option>
                                <option value="X-Large - 16 / 40 cm">X-Large - 16 / 40 cm</option>
                            </select>
                            </div>
                            <div className="form-btn">
                                <a href="" className=' btn btn-smart'>QUICK DELIVERY</a>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Delivery