import React from 'react';
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
          {props.electionName}
          </ToastHeader>
          <ToastBody>
          This election will take place on: {props.electionDay}.
          </ToastBody>
          <Button outline color="primary" id={props.electionID} onClick={props.simplifiedFunction}>Find Polling Locations</Button>
        </Toast>
      </div>
    </div>
  );
};

export default Example;