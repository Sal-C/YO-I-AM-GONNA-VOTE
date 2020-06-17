import React from 'react';
import { Link } from 'react-router-dom';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';

const Learn = (props) => {
  return (
    <div>
      <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader>
            Are You Able To Vote?
          </ToastHeader>
          <ToastBody>
            Want to know if you are already a registered voter? Click <Link to="/verify">HERE</Link>
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
            Need to Register?
          </ToastHeader>
          <ToastBody>
            So you are not a registered voter and need to do so?  If you have 2 min you can get it done <Link to="/register">HERE</Link>
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            When is the next elections?
          </ToastHeader>
          <ToastBody>
            Ready to vote, now what?  Find out when the next election events are taking place <Link to="/elections">HERE</Link>
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader>
            Who do you vote for?
          </ToastHeader>
          <ToastBody>
            Find more information about those who currently represent you <Link to="/representatives">HERE</Link>
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
            Yo! Go out and vote!!
          </ToastHeader>
          <ToastBody>
            Now all thats left to do is find out where you can vote and it's right <Link to="/voter-information">HERE</Link>
          </ToastBody>
        </Toast>
      </div>
    
    </div>
  );
};

export default Learn;
