import React, { useState, useEffect } from "react";
import ReactDOM from 'react-router-dom';
import { Route, Link, useHistory } from 'react-router-dom';
import axios from "axios";


const App = () => {
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
          <button className='orderBtn'>I'm Hungry!</button>
        </div>
      </header>
      <Route path='/pizza'>

      </Route>
      <Route path='/order'>

      </Route>
    </div>

    </>
  );
};

export default App;
