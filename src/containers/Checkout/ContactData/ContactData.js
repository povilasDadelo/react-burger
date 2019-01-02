import React, { Component } from 'react';
import Button from "../../../components/UI/Button/Button";
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from "./ContactData.css";
import axios from "../../../axios-orders";


class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: ''
      }
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Max',
        address: 'Test street 1',
        zipCode: '123123',
        country: 'GE'
      },
      email: 'test@test.com',
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      })
  }

  render() {
    const formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {formElements.map(formElement => (
          <Input
            key={formElement.id}
            {...formElement.config}/>
        ))}
        <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div>
        {form}
      </div>
    );
  }
}

export default ContactData;
