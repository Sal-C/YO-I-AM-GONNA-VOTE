import React from "react";
import Iframe from 'react-iframe';
import { Row, Col  } from 'reactstrap';

function Verify() {
  return (
    <div>
      <h1 className="text-center">Voter Verification</h1>
        <p className="text-center">Confirm your voter registration status.</p>
   <Row>
        <Col sm="4"></Col>
        <Col sm="4">
          <Iframe url="https://verify.vote.org/?partner=111111&campaign=free-tools"
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

export default Verify;