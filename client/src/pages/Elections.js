import React, { Component } from "react";
import axios from "axios";

class Elections extends Component {
  // Setting the component's initial state
  state = {
    electionName: "",
    electionDay:""
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


  electionSearch() {
    axios.get('')
    .then(response => {
      //console.log(response.data);
    //   this.setState({ repName: response.data.officials[4].name });
    //   this.setState({ repParty: response.data.officials[4].party });
    //   this.setState({ repImg: response.data.officials[4].photoUrl });
    //   this.setState({ repWebsite: response.data.officials[4].urls[0] });
    //   this.setState({ repPhone: response.data.officials[4].phones[0] });
    //   this.setState({ visibility: "show" });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h1>Representative Search</h1>
        <RepresentativeButtons />
        <p>Important Upcoming Elections Across the US.</p>
        <RepresentativeCard 
        // repName={this.state.repName} 
        // repParty={this.state.repParty}
        // repImg={this.state.repImg}
        // repPhone={this.state.repPhone}
        // repWebsite={this.state.repWebsite}
        // visibility={this.state.visibility}
        />
      </div>
    );
  }
}

export default Elections;