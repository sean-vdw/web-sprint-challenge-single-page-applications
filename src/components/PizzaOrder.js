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
      <p>Optional toppings:</p>
      <p>{details.topping1}</p>
      <p>{details.topping2}</p>
      <p>{details.topping3}</p>
      <p>{details.topping4}</p>
      <p>{details.topping5}</p>
      <p>{details.topping6}</p>
      <p>Special instructions: {details.special}</p>
    </div>
  )
}