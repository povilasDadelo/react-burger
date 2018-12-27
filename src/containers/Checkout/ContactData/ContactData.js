import React, { Component } from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render() {
    return (
      <div>
        <form className={classes.ContactData}>
          <h4>Enter your contact data</h4>
          <input className={classes.Input} type="text" name="name" placeholder="Your name" id="" />
          <input className={classes.Input} type="text" name="email" placeholder="Your email" id="" />
          <input className={classes.Input} type="text" name="street" placeholder="Your street" id="" />
          <input className={classes.Input} type="text" name="postal" placeholder="Your postal code" id="" />
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
