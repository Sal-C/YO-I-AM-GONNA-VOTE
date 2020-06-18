import React from "react";
import {Card, CardText, CardBody, CardLink, CardSubtitle, Row, Col} from 'reactstrap';
//import "./index.css";
  
  const RepresentativeCard = (props) => {
    return (
      <div className="row ml-3 mt-2">
                <div className="card mb-3 col-sm-6">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={props.repImg} className="card-img" alt={props.repName}></img>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.repName}</h5>
                            <p className="card-text">{props.repParty}</p>
                            <p className="card-text" href={props.repWebsite}>Website</p>
                            <p className="card-text">Phone:{props.repPhone}</p>
                        </div>
                        </div>
                    </div>
                </div>
                
        </div>
    );
  };

export default RepresentativeCard;