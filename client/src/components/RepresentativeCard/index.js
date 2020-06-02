import React from "react";
import {Card, CardText, CardBody, CardLink,CardTitle, CardSubtitle, Row, Col} from 'reactstrap';
import "./index.css";
  
  const RepresentativeCard = (props) => {
    return (
      <div className={props.visibility}>
            <Row>
              <Col sm="3">
                <Card>
                <CardBody>
                    <CardTitle>House Representative</CardTitle>
                    <CardSubtitle>{props.repName}</CardSubtitle>
                </CardBody>
                <img width="100%" src={props.repImg} alt="House Representative" />
                <CardBody>
                    <CardText>Political Party: {props.repParty}</CardText>
                    <CardLink href={props.repWebsite}>Website</CardLink>
                    <CardText >Phone:{props.repPhone}</CardText>
                </CardBody>
                </Card>
              </Col>
            </Row>
      </div>
    );
  };

export default RepresentativeCard;