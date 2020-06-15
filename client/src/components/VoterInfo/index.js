import React, { Component } from "react";
//import axios from "axios";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Col, Button  } from 'reactstrap';
import voterInfo from "../API_Response/voterInfo.json";

class VoterInfo extends Component {
  // Setting the component's initial state
  state = {
    voterInfo
  };


  electionSearch() {
    console.log(voterInfo)
    //Polling Location Info for Google Maps
    //console.log(voterInfo.pollingLocations)
  }

  render() {
    return (
      <div>
        <h1 onClick={this.electionSearch}>Local Polling Places, Early Voting Sites</h1>
        <Row>
          <Col sm="4">
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>{voterInfo.pollingLocations[0].address.locationName}</ListGroupItemHeading>
                <ListGroupItemText>{voterInfo.pollingLocations[0].address.line1}</ListGroupItemText>
                <ListGroupItemText>{voterInfo.pollingLocations[0].notes}</ListGroupItemText>
                <ListGroupItemText>{voterInfo.pollingLocations[0].pollingHours}</ListGroupItemText>
                <Button color="primary" size="lg" href="/contests" block>Contests</Button>
              </ListGroupItem>
            </ListGroup>
        </Col>
        </Row>
      </div>
    );
  }
}

export default VoterInfo;