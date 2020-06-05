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


  electionSearch() {
    axios.get('https://www.googleapis.com/civicinfo/v2/elections?key=')
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
        <h1>Upcoming Elections</h1>
        <RepresentativeButtons />
        <p>A list of approaching voting events across the US.</p>
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