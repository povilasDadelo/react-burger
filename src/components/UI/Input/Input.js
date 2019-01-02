import React from 'react';
import classes from './Input.css';

const input = ({ elementType, elementConfig, value, ...props }) => {
  let inputElement = null;

  switch (elementType) {
    case ('input'):
      inputElement = <input
                      className={classes.InputElement}
                      {...elementConfig}
                      value={value} />;
      break;
    case ('textarea'):
      inputElement = <textarea
                      className={classes.InputElement}
                      {...elementConfig}
                      value={value} />
      break;
    default:
      inputElement = <input
                      className={classes.InputElement}
                      {...elementConfig}
                      value={value} />
  }

  return (
    <div className={classes.Input} {...props}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
