import React from 'react';
import classes from './Order.css'

const order = (props) => {
  const ingredients = []

  for (let ingredient in props.ingredients) {
    ingredients.push({
      amount: props.ingredients[ingredient],
      name: ingredient
    })
  }

  const ingredientOutput = ingredients.map(ig => {
    return <span
            key={ig.name}
            style={{
              textTransform: 'capitalize',
              display: 'inline-block',
              margin: '0 8px'
            }}>{ig.name} ({ig.amount})</span>
  })

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
    </div>
  );
};

export default order;
