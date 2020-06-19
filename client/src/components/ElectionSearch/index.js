import React, { Component } from "react";
import axios from "axios";
import ElectionList from "../ElectionList";
import { Row, Col  } from 'reactstrap';

class Elections extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      electionsJSON: []
    };
  }

  componentDidMount() {
    axios.get('https://www.googleapis.com/civicinfo/v2/elections?key=')
    .then(response => {
      this.setState({ 
        electionsJSON: response.data ,
        isLoaded: true
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const { error, isLoaded, electionsJSON } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1 className="text-center">UPCOMING ELECTIONS</h1>
          <p className="text-center">A list of approaching elections across the country.</p>
          <Row>
          <Col sm="4"></Col>
          <Col sm="4">
          {this.state.electionsJSON.elections.map(election => (
            <ElectionList
              electionName={election.name}
              electionDay={election.electionDay}
            />
          ))}
          </Col>
          <Col sm="4"></Col>
          </Row>
      </div>
      );
    }
  }
}

export default Elections;