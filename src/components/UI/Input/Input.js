import React from 'react';
import classes from './Input.css';

const input = ({ elementType, elementConfig, value, ...props }) => {
  let inputElement = null;
  let inputClasses = [classes.InputElement]

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid)
  }

  switch (elementType) {
    case ('input'):
      inputElement = <input
                      className={inputClasses.join(' ')}
                      {...elementConfig}
                      value={value}
                      onChange={props.changed} />;
      break;
    case ('textarea'):
      inputElement = <textarea
                      className={inputClasses.join(' ')}
                      {...elementConfig}
                      value={value}
                      onChange={props.changed} />
      break;
    case ('select'):
      inputElement = (
        <select
          className={inputClasses.join(' ')}
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
                      className={inputClasses.join(' ')}
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
