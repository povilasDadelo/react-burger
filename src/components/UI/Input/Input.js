import React from 'react';
import classes from './Input.css';

const input = ({ elementType, elementConfig, value, ...props }) => {
  let inputElement = null;

  switch (elementType) {
    case ('input'):
      inputElement = <input
                      className={classes.InputElement}
                      {...elementConfig}
                      value={value}
                      onChange={props.changed} />;
      break;
    case ('textarea'):
      inputElement = <textarea
                      className={classes.InputElement}
                      {...elementConfig}
                      value={value}
                      onChange={props.changed} />
      break;
    case ('select'):
      inputElement = (
        <select
          className={classes.InputElement}
          {...elementConfig}
          value={value}
          onChange={props.changed}>
          {elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input
                      className={classes.InputElement}
                      {...elementConfig}
                      value={value} />
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
