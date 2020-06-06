import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';

  
  const ElectionList = (props) => {
    return (
      <div>
            <ListGroup horizontal>
                <ListGroupItem>{props.electionName}</ListGroupItem>
                <ListGroupItem>{props.electionDay}</ListGroupItem>
            </ListGroup>
      </div>
    );
  };

export default ElectionList