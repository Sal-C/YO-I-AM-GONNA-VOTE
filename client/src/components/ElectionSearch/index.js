import React, { Component } from "react";
//import axios from "axios";
import ElectionList from "../ElectionList";
import electionsJSON from "../API_Response/elections.json";

class Elections extends Component {
  // Setting the component's initial state
  state = {
    electionsJSON
  };


  electionSearch() {
    console.log(electionsJSON.elections)
  }

  render() {
    return (
      <div>
        <h1>Upcoming Elections</h1>
        <p onClick={this.electionSearch}>A list of approaching voting events across the US.</p>
        {this.state.electionsJSON.elections.map(election => (
         <ElectionList
           electionName={election.name}
           electionDay={election.electionDay}
         />
       ))}
      </div>
    );
  }
}

export default Elections;