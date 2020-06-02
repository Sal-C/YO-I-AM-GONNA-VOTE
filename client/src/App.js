import React, { Component } from "react";
//import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./css/App.css";
import AddressForm from "./components/AddressForm/index";
import RepresentativeCard from "./components/RepresentativeCard";


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddressForm />
        <RepresentativeCard />
      </div>
    );
  }
}


export default App;
