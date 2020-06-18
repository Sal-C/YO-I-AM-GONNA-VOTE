import React from "react";
import { Jumbotron, Row, Col } from 'reactstrap';

const NoMatch = () =>
  <div>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </div>;

export default NoMatch;
