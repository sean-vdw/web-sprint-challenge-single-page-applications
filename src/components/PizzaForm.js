import React from 'react';

export default function PizzaForm(props) {
  const { values, update, submit, disabled, errors } = props;

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    update(name, valueToUse);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <>
      <div className='order-header'>
        <h2>Order a Pie!</h2>
      </div>
      <form id='pizza-form' onSubmit={onSubmit}>
        <div className='form-group'>
          <h3>Order Form</h3>
          <div className='errors'>
            <div>{errors.name}</div>
            <div>{errors.size}</div>
          </div>
          <label>Name<br/>
            <input
              id='name-input' 
              name='name'
              type='text'
              placeholder='Enter order name'
              value={values.name}
              onChange={onChange}
            />
          </label>
          <label>Size<br/>
            <select value={values.size} name='size' id='size-dropdown' onChange={onChange}>
              <option value=''> - Select a Size - </option>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
              <option value='xl'>X-Large</option>
            </select>
          </label>
          <label>Sauce<br/>
            <select value={values.sauce} name='sauce' onChange={onChange}>
              <option value=''> - Select a sauce - </option>
              <option value='marinara'>Marinara</option>
              <option value='garlic'>Garlic</option>
              <option value='white'>White</option>
              <option value='squidInk'>Squid Ink</option>
            </select>
          </label>
          <p>Choose your toppings:</p>
          <div className='sauce-container'>
            <label>Sausage
              <input 
                value={values.topping1}
                onChange={onChange}
                name='Sausage'
                type='checkbox'
              />
            </label>
            <label>Mushrooms
              <input 
                value={values.topping2}
                onChange={onChange}
                name='Mushrooms'
                type='checkbox'
              />
            </label>
            <label>Peppers
              <input 
                value={values.topping3}
                onChange={onChange}
                name='Peppers'
                type='checkbox'
              />
            </label>
            <label>Salami
              <input 
                value={values.topping4}
                onChange={onChange}
                name='Salami'
                type='checkbox'
              />
            </label>
            <label>Jalapenos
              <input 
                value={values.topping5}
                onChange={onChange}
                name='Jalapenos'
                type='checkbox'
              />
            </label>
            <label>Pineapple
              <input 
                value={values.topping6}
                onChange={onChange}
                name='Pineapple'
                type='checkbox'
              />
            </label>
          </div>
          <label>Special Instructions:
            <input
              id='special-text' 
              name='special'
              type='text'
              placeholder='Enter any special instructions'
              value={values.special}
              onChange={onChange}
            />
          </label>
          <button id='order-button' disabled={disabled}>Add to Order</button>
        </div>
      </form>
    </>
  )

}