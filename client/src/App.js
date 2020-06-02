import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./css/App.css";
import AddressForm from "./components/AddressForm/index";


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddressForm />
      </div>
    );
  }
}


export default App;
