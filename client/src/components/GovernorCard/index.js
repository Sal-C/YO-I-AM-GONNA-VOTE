import React from "react";
import {Card, CardText, CardBody, CardLink,CardTitle, CardSubtitle, Row, Col} from 'reactstrap';
import "./index.css";
  
  const GovernorCard = (props) => {
    return (
      <div className={props.visibility}>
            <Row>
              <Col sm="3">
                <Card>
                <CardBody>
                    <CardTitle>Governor</CardTitle>
                    <CardSubtitle>{props.govName}</CardSubtitle>
                </CardBody>
                <img width="100%" src={props.govImg} alt="House Representative" />
                <CardBody>
                    <CardText>Political Party: {props.govParty}</CardText>
                    <CardLink href={props.govWebsite}>Website</CardLink>
                    <CardText >Phone:{props.govPhone}</CardText>
                </CardBody>
                </Card>
              </Col>
            </Row>
      </div>
    );
  };

export default GovernorCard;