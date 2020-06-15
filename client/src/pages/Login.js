import React, { Component } from "react";
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class LogIn extends Component {
  state = {
    username: "",
    password: "",
    address:""
  };

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

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.username}! Your address is "${this.state.address}" and password is "${this.state.password}."`);
    this.setState({
      username: "",
      password: "",
      address: ""
    });
    // send a POST request
    axios.post('/login',{
        username: this.state.username,
        password: this.state.password,
        address: this.state.address
    }).then(response => {
      console.log(response)
      if(response.data) {
        console.log("Successful Sign Up!")
      } else {
        console.log("Failed to login...")
      }
    })
  };
  render() {
    return (
      <div className="App">
        <Row>
      <Col md={8}><img src="https://images.unsplash.com/photo-1584714574679-99078d0a7b30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="login" /></Col>
      <Col md={4}>
    <Form body inverse style={{ backgroundColor: '#000032', borderColor: '#000032', color: "white", padding: "50px 50px 244px 50px"}}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input type="text" name="username" id="exampleEmail" onChange={this.handleInputChange} placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" onChange={this.handleInputChange} placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" onChange={this.handleInputChange} placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Authentication</Label>
      </FormGroup>
      <Button onClick={this.handleFormSubmit}>Sign in</Button>
    </Form>
    </Col>
    </Row>
      </div>
    );
  }
}


export default LogIn;
