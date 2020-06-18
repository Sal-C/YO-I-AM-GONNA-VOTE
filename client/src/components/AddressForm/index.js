import React, { Component } from "react";
import axios from "axios";
import { Input, Col, Row } from 'reactstrap';
import RepresentativeCard from "../RepresentativeCard";
//import RepresentativeButtons from "../RepDropdown";

class AddressForm extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      RepresentativeJSON: [],
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
    this.componentDidMount()
  };


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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>
        <h1 className="text-center">Representative Search</h1>
        <p className="text-center">Please Enter Your Address</p>
        <Row>
        <Col sm="4"></Col>
        <Col sm="4">
        <form className="form">
          <div className="input-group">
          <Input
            name="address"
            onChange={this.handleInputChange}
            type="text"
            placeholder="1234 Example Ave"
          />
          <div className="input-group-append">
          <button class="btn waves-effect waves-light react-button" onClick={this.handleFormSubmit}>Submit</button>
          </div>
          </div>
        </form>
        </Col>
        <Col sm="4"></Col>
        </Row>
      </div>;
    } else {
      return (
        <div>
        <h1 className="text-center">Representative Search</h1>
        <p className="text-center">Please Enter Your Address</p>
        <Row>
        <Col sm="4"></Col>
        <Col sm="4">
        <form className="form">
          <div className="input-group">
          <Input
            name="address"
            onChange={this.handleInputChange}
            type="text"
            placeholder="1234 Example Ave"
          />
          <div className="input-group-append">
          <button class="btn waves-effect waves-light react-button" onClick={this.handleFormSubmit}>Submit</button>
          </div>
          </div>
        </form>
        </Col>
        <Col sm="4"></Col>
        </Row>
        {this.state.RepresentativeJSON.officials.map(rep => (
         <RepresentativeCard
         repName={rep.name} 
         repParty={rep.party}
         repImg={rep.photoUrl}
         />
       ))}
      </div>
      );
    }
  }
}

export default AddressForm;