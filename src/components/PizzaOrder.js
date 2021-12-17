import React from 'react';

export default function PizzaOrder(props) {
  const { details } = props

  if(!details) {
    return <h3>Fetching your order details...</h3>
  }

  return (
    <div className='order-container'>
      <p>Order name: {details.name}</p>
      <p>Pizza size: {details.size}</p>
      <p>Sauce: {details.sauce}</p>
      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Added Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
      <p>Special instructions: {details.special}</p>
    </div>
  )
}