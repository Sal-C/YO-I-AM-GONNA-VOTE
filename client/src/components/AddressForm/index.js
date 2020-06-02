//import React from "react";
import React, { Component } from "react";
import axios from "axios";
import "./index.css";

class AddressForm extends Component {
  // Setting the component's initial state
  state = {
    address: "",
    repName: "",
    repParty: "",
    repImg: "",
    repWebsite: "",
    repPhone: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Your address is: ${this.state.address}`);
    this.setState({
      address: ""
    });
    this.repSearch()
  };


  repSearch() {
    axios.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + this.state.address + 'levels=administrativeArea2&key=')
    .then(response => {
      console.log(response.data);
      //console.log(response.data.officials[4]);
      
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h1>Representative Search</h1>
        <p>Please Enter Your Address</p>
        <form className="form">
          <input
            value={this.state.address}
            name="address"
            onChange={this.handleInputChange}
            type="text"
            placeholder="1234 Example Ave"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddressForm;