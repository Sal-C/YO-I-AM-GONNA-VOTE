import React, { Component } from "react";
//import axios from "axios";
import ElectionList from "../ElectionList";
import voterInfo from "../API_Response/voterInfo.json";

class VoterInfo extends Component {
  // Setting the component's initial state
  state = {
    voterInfo
  };


  electionSearch() {
    console.log(voterInfo)
  }

  render() {
    return (
      <div>
        <h1 onClick={this.electionSearch}>Local Polling Places, Early Voting Sites</h1>
      </div>
    );
  }
}

export default VoterInfo;