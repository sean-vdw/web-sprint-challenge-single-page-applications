import React, { useState, useEffect } from "react";
import ReactDOM from 'react-router-dom';
import { Route, Link, useHistory } from 'react-router-dom';
import axios from "axios";

//Import Components
import PizzaForm from "./components/PizzaForm";
import PizzaOrder from "./components/PizzaOrder";
import schema from "./components/FormSchema";

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  topping6: false,
  special: '',
}

const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const history = useHistory();

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    });
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['Sausage', 'Mushrooms', 'Peppers', 'Salami', 'Jalapenos', 'Pineapple'].filter(topping => !!formValues[topping]),
      special: formValues.special.trim()
    }
    setOrders(orders.concat(newOrder));
    setFormValues(initialFormValues);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues]);

  return (
    <>

    <div className='lambdaEats'>
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order Pizza</Link>
        </nav>
        <div className='hero'>
          <h1>Pizza Delivery for Coders &#127829;</h1>
          <Link to='/pizza'>
            <button className='order-pizza'>Order Now</button>
          </Link>
        </div>
      </header>
      <Route path='/pizza'>
        <PizzaForm 
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
      </Route>
      <h2>My Order:</h2>
      {
        orders.map((order, idx) => {
          return (
            <div className='ordered-container'>
              <PizzaOrder key={order.idx} details={order}/>
            </div>
          )
        })
      }
    </div>

    </>
  );
};

export default App;
