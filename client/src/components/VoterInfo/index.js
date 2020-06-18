import React, { Component, useState } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Col, Button, Input  } from 'reactstrap';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import Geocode from "react-geocode";
//import voterInfo from "../API_Response/voterInfo.json";

Geocode.setApiKey("");

const MapWithAMarker = withScriptjs(withGoogleMap(props =>{
  console.log(props)
  
  return (
  <GoogleMap
  defaultZoom={8}
  defaultCenter={{ lat: 34.052235, lng: -118.243683 }}
  >
    <Marker
      position={{ lat: props.pollingLocations.lat, lng: props.pollingLocations.lng }}
    />
  </GoogleMap>)
}))

class VoterInfo extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      location: '',
      pollingLocation: [],
      pollingLocations: [],
      address: ""
    };
  }

  getPollPlace() {
    axios.get('https://www.googleapis.com/civicinfo/v2/voterinfo?address='+ this.state.address+'&electionId=2000&key=')
    .then(response => {
      this.setState({ 
        pollingLocation: response.data.pollingLocations[0],
        pollingLocations: response.data.pollingLocations
      });
      console.log(this.state.pollingLocations)
      this.componentDidMount()
    })
    .catch(error => {
      console.log(error);
    });
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
    this.getPollPlace()
  };



  componentDidMount(){
    const newPolling = this.state.pollingLocations.map(location => {
      Geocode.fromAddress(location.address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          this.setState({
          location:{
            lat:lat,
            lng:lng
          },
          isLoaded: true
        })
          console.log("success")
        },
        error => {
          console.error(error);
        }
      );
    })   
    
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>
        <h1 className="text-center">Find Your Nearest Polling Place</h1>
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
          <h1 className="text-center">Find Your Nearest Polling Place</h1>
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
          <Row style={{marginTop:"30px", marginBottom:"20px"}}>
          <Col sm="4">
            <ListGroup>
              <ListGroupItem style={{backgroundColor:"black", border: "2px solid #1d7d74", marginLeft:"10px", marginRight:"10px"}}>
              <ListGroupItemHeading>{this.state.pollingLocation.address.locationName}</ListGroupItemHeading>
                <ListGroupItemText>{this.state.pollingLocation.address.line1}</ListGroupItemText>
                <ListGroupItemText>{this.state.pollingLocation.notes}</ListGroupItemText>
                <ListGroupItemText>{this.state.pollingLocation.pollingHours}</ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
        </Col>
        <Col sm="7">
        <MapWithAMarker
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          pollingLocations={this.state.location}
        />
          
        </Col>
        </Row>
      </div>
      );
    }
  }
}

export default VoterInfo;