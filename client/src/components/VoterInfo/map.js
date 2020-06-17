  
// Import from react-google-maps and react-geocode
import React, {useState} from 'react';
import './map.css';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import Geocode from "react-geocode";
import {pollingLocations} from './API_Response/voterInfo.json'

// Pass in Google API key
Geocode.setApiKey("GOOGLE_API_KEY");

// Creates Google Map and geocoded marker(s)
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

//Extends react component and geocodes polling location addresses
class Map extends React.Component {

  state = {
    pollingLocations: pollingLocations,
    location: ''
  }

  componentDidMount(){
    const newPolling = this.state.pollingLocations.map(location => {
      Geocode.fromAddress(location.address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          this.setState({
          location:{
            lat:lat,
            lng:lng
          }})
        },
        error => {
          console.error(error);
        }
      );
    })   
    
  }
// Renders map on the webpage
  render() {
    return (

    <div>
      <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key={GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      pollingLocations={this.state.location}
      />

    </div>
    )
}};

export default Map;