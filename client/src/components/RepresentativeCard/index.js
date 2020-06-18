import React from "react";
import {Card, CardText, CardBody, CardLink, CardSubtitle, Row, Col} from 'reactstrap';
//import "./index.css";
  
  const RepresentativeCard = (props) => {
    return (
      <div className="ml-3 mt-2">
          <Row>
          <Col sm="4"></Col>
          <Col sm="4">
                <div className="card mb-3" style={{backgroundColor:"black", border: "2px solid #1d7d74"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={props.repImg} className="card-img" height="100%" alt={props.repName}></img>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.repName}</h5>
                            <p className="card-text">Party: {props.repParty}</p>
                            <a className="card-text" href={props.repWebsite}>Website: {props.repWebsite}</a>
                            <p className="card-text">Phone:{props.repPhone}</p>
                        </div>
                        </div>
                    </div>
                </div>
          </Col>
          <Col sm="4"></Col>
          </Row>
        </div>
    );
  };

export default RepresentativeCard;