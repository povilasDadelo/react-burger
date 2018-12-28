import React, { Component } from 'react';
import Button from "../../../components/UI/Button/Button";
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from "./ContactData.css";
import axios from "../../../axios-orders";


class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
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
    let form = (
      <form className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <input className={classes.Input} type="text" name="name" placeholder="Your name" id="" />
        <input className={classes.Input} type="text" name="email" placeholder="Your email" id="" />
        <input className={classes.Input} type="text" name="street" placeholder="Your street" id="" />
        <input className={classes.Input} type="text" name="postal" placeholder="Your postal code" id="" />
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
