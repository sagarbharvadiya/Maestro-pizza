import './App.css';
// import { useState, useEffect } from "react";
import Header from './Components/Header';
import About from './Components/About';
import Shop from './Components/Shop';
import Menu from './Components/Menu';
import Clients from './Components/Client';
import Delivery from './Components/Delivery';
import Pizzamenu from './Components/Pizzamenu';
import Pizzamenuitem from './Components/Pizzamenuitem';



function App() {
    return (
      <>
      <Header/>
      <About/>
      <Shop/>
      <Menu/>
      <Clients/>
      <Delivery/>
      <Pizzamenu/>
     <Pizzamenuitem/>
      </>
      
    )
  };
  

export default App;
