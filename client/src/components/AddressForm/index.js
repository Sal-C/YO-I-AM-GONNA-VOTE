//import React from "react";
import React, { Component } from "react";
import "./index.css";

class AddressForm extends Component {
    render() {
      return (
        <form>
          <h1>Representative Search</h1>
          <p>Enter your Address please:</p>
          <input
            type="text"
          />
          <button type="button">Search</button>
        </form>
      );
    }
  }

export default AddressForm;