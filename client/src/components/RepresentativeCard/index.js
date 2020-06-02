import React from "react";
import {Card, CardText, CardBody, CardLink,CardTitle, CardSubtitle, Row, Col} from 'reactstrap';
  
  const RepresentativeCard = (props) => {
    return (
      <div>
            <Row>
              <Col sm="4"></Col>
              <Col sm="3">
                <Card>
                <CardBody>
                    <CardTitle>Title</CardTitle>
                    <CardSubtitle>Name</CardSubtitle>
                </CardBody>
                <img width="100%" src="https://images.dog.ceo/breeds/pyrenees/n02111500_9015.jpg" alt="Card image cap" />
                <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Website</CardLink>
                    <CardLink href="#">Email</CardLink>
                </CardBody>
                </Card>
              </Col>
            </Row>
      </div>
    );
  };

export default RepresentativeCard;