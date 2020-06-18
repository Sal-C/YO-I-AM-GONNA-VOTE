import React, { Component } from "react";
import axios from "axios";
import ElectionList from "../ElectionList";

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
}

export default Elections;