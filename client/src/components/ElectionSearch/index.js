import React, { Component } from "react";
import axios from "axios";
import { Input, Button } from 'reactstrap';
import ElectionList from "../ElectionList";
import electionsJSON from "../API_Response/elections.json";

class Elections extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      electionsJSON: [],
      voterInfoJSON: [],
      electionNum: "",
      address: ""
    };
  }

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
    this.electionSearch()
  };

  electionSearch() {
    axios.get('https://www.googleapis.com/civicinfo/v2/elections?key=')
    .then(response => {
      this.setState({ 
        isLoaded: true,
        electionsJSON: response.data 
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  componentDidMount() {
    axios.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + this.state.address + 'levels=administrativeArea2&key=')
    .then(response => {
      console.log(response.data);
      this.setState({ 
        isLoaded: true,
        RepresentativeJSON: response.data 
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  simplifiedFunction = event => {
    // Getting the value and name of the input which triggered the change
    const { id } = event.target;

    // Updating the input's state
    this.setState({
      electionNum: id
    });
    console.log(this.state.electionNum)
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>
        <h1>Upcoming Elections</h1>
        <p>A list of approaching voting events across the US.</p>
        <p>Please Enter Your Address</p>
        <form className="form">
          <Input
            name="address"
            onChange={this.handleInputChange}
            type="text"
            placeholder="1234 Example Ave"
          />
          <Button onClick={this.handleFormSubmit}>Submit</Button>
        </form>
      </div>;
    } else {
      return (
        <div>
          <h1>Upcoming Elections</h1>
          <p onClick={this.electionSearch}>A list of approaching voting events across the US.</p>
          <p>Please Enter Your Address</p>
          <form className="form">
            <Input
              name="address"
              onChange={this.handleInputChange}
              type="text"
              placeholder="1234 Example Ave"
            />
            <Button onClick={this.handleFormSubmit}>Submit</Button>
          </form>
          {this.state.electionsJSON.elections.map(election => (
         <ElectionList
           electionName={election.name}
           electionDay={election.electionDay}
           electionID={election.id}
           simplifiedFunction = {this.simplifiedFunction}
         />
       ))}
      </div>
      );
    }
  }
}

export default Elections;