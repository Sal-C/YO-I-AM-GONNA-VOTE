import React, { Component } from "react";
//import axios from "axios";
import ElectionList from "../ElectionList";
import electionsJSON from "../API_Response/elections.json";

class Elections extends Component {
  // Setting the component's initial state
  state = {
    electionName: "",
    electionDay:""
  };


  electionSearch() {
    console.log(electionsJSON)
  }

  render() {
    return (
      <div>
        <h1>Upcoming Elections</h1>
        <p>A list of approaching voting events across the US.</p>
        <ElectionList />
        {/* <RepresentativeCard 
        repName={this.state.repName} 
        repParty={this.state.repParty}
        repImg={this.state.repImg}
        repPhone={this.state.repPhone}
        repWebsite={this.state.repWebsite}
        visibility={this.state.visibility}
        /> */}
      </div>
    );
  }
}

export default Elections;