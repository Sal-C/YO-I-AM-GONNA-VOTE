//import React from "react";
import React, { Component } from "react";
import axios from "axios";
import "./index.css";
import RepresentativeCard from "../RepresentativeCard";
import RepresentativeButtons from "../RepDropdown";
import RepresentativeJSON from "../API_Response/representatives.json";

class AddressForm extends Component {
  // Setting the component's initial state
  state = {
    RepresentativeJSON
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.repSearch()
  };


  repSearch() {
    console.log(RepresentativeJSON)
  }

  render() {
    return (
      <div>
        <h1>Representative Search</h1>
        <RepresentativeButtons />
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
        {this.state.RepresentativeJSON.officials.map(rep => (
         <RepresentativeCard
         repName={rep.name} 
         repParty={rep.party}
         repImg={rep.photoUrl}
         repPhone={rep.phones[0]}
         repWebsite={rep.urls[0]}
         />
       ))}
      </div>
    );
  }
}

export default AddressForm;