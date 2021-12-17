import React, { useState, useEffect } from "react";
import ReactDOM from 'react-router-dom';
import { Route, Link, useHistory } from 'react-router-dom';
import axios from "axios";



const initialOrder = {
  name: '',
  size: '',
  sauce: '',
  toppings: '',
  special: '',
}

const App = () => {
  const [orders, setOrders] = useState([initialOrder]);

  return (
    <>

    <div className='lambdaEats'>
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order Pizza</Link>
          <Link to='/order'>My Order</Link>
        </nav>
        <div className='hero'>
          <h1>Pizza Delivery for Coders &#127829;</h1>
          <Link to='/pizza'>
            <button className='order-pizza'>Order Now</button>
          </Link>
        </div>
      </header>
      <div className='cta'>
          <h2>Pizza delivery to you in <span>60 seconds.</span></h2>
          <p>Because coding is better when you're not hungry.</p>
          <Link to='/pizza'>
            <button className='order-pizza'>Order Now</button>
          </Link>
      </div>
      <Route path='/pizza'>

      </Route>
      <Route path='/order'>

      </Route>
    </div>

    </>
  );
};

export default App;
