import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

//Import Components
import PizzaForm from "./components/PizzaForm";
import PizzaOrder from "./components/PizzaOrder";
import schema from "./validate/FormSchema";

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  Sausage: false,
  Mushrooms: false,
  Peppers: false,
  Salami: false,
  Jalapenos: false,
  Pineapple: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
}

const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([ res.data, ...orders ])
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['Sausage', 'Mushrooms', 'Peppers', 'Salami', 'Jalapenos', 'Pineapple'].filter(topping => !!formValues[topping]),
      special: formValues.special.trim()
    }
    postNewOrder(newOrder);
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue);
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    });
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues]);

  return (
    <>

    <div className='lambdaEats'>
      <header>
        <nav>
          <p>Lambda Eats</p>
          <div className='link-wrapper'>
            <Link to='/'>Home</Link>
            <Link to='/pizza'>Order Pizza</Link>
          </div>
        </nav>
        <div className='hero'>
          <h1>Pizza Delivery for Coders &#127829;</h1>
          <Link to='/pizza'>
            <button id='order-pizza'>Order Now</button>
          </Link>
        </div>
      </header>
      <Route path='/pizza'>
        <PizzaForm 
          values={formValues}
          update={updateForm}
          submit={submitForm}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
      {
        orders.map((order, idx) => {
          return (
            <div className='ordered-container'>
              <PizzaOrder key={idx} details={order}/>
            </div>
          )
        })
      }
    </div>

    </>
  );
};

export default App;
