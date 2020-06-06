import React, { Component } from "react";
//import axios from "axios";
import { ListGroup, ListGroupItem } from 'reactstrap';
import voterInfo from "../API_Response/voterInfo.json";

class VoterInfo extends Component {
  // Setting the component's initial state
  state = {
    voterInfo
  };


  electionSearch() {
    //console.log(voterInfo)
    //Polling Location Info for Google Maps
    //console.log(voterInfo.pollingLocations)
  }

  render() {
    return (
      <div>
        <h1 onClick={this.electionSearch}>Local Polling Places, Early Voting Sites</h1>
        <ListGroup>
            <ListGroupItem>Location: {voterInfo.pollingLocations[0].address.locationName}</ListGroupItem>
            <ListGroupItem>Address: {voterInfo.pollingLocations[0].address.line1}, {voterInfo.pollingLocations[0].address.city}, {voterInfo.pollingLocations[0].address.state} {voterInfo.pollingLocations[0].address.zip}</ListGroupItem>
            <ListGroupItem>Notes: {voterInfo.pollingLocations[0].notes}</ListGroupItem>
            <ListGroupItem>Polling Hours: {voterInfo.pollingLocations[0].pollingHours}</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default VoterInfo;