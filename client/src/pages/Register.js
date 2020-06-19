import React from "react";
import Iframe from 'react-iframe';
import { Row, Col  } from 'reactstrap';

function Register() {
  return (
    <div>
      <h1 className="text-center">REGISTER TO VOTE</h1>
      <p className="text-center">Take 2-minutes out of your day to become a voice in our democracy.</p>
      <Row>
        <Col sm="4"></Col>
        <Col sm="4">
          <Iframe url="https://register.vote.org/?partner=111111&campaign=free-tools"
          width="450px"
          height="2000px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>
        </Col>
        <Col sm="4"></Col>
      </Row>
    </div>
  );
}

export default Register;
