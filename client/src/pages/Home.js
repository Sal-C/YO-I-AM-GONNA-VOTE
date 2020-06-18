import React from 'react';
import { Link } from 'react-router-dom';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Learn = (props) => {
  return (
    <div>
      <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader>
            Are you registered to vote?
          </ToastHeader>
          <ToastBody>
            Check if and where you are currently registered to vote. The process takes thirty seconds and will determine if you have an active voter registration anywhere in the 50 U.S. states, the District of Columbia, and Puerto Rico. 
            Click <Link to="/verify">HERE</Link>!!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
            Not Registered? Sign up here!
          </ToastHeader>
          <ToastBody>
            Through vote.org, you can easily register to vote in less than two minutes. As long as you have a current postal address in any of the 50 U.S. states, the District of Columbia, or Puerto Rico and over the age of 18, this online application will register you safely and securely. Click <Link to="/register">HERE</Link> to register.
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader>
            Can I vote by mail?
          </ToastHeader>
          <ToastBody>
            As a result of the Covid-19 Pandemic, ensuring that you can vote in a manner that does not jeopardize your health and the health of those around you is a paramount concern. While not universal, many states and localities offer the option of voting absentee or by mail. By inserting your current address, quickly determined if you qualify to vote by mail. 
            Click <Link to="/register">HERE</Link>
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            How can I find information about upcoming elections?
          </ToastHeader>
          <ToastBody>
            So you've successfully registered to vote, now what? Which state, county, and municpality you live in can determine which elections are on the upcoming ballot and which date polling day will be held for primary and general elections. By inserting your current address and selected your state/territory of residence, you can determine the next election will be held and which offices and ballot initiatives will be contested.
            Click <Link to="/elections">HERE</Link>
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader>
            Who are my representatives?
          </ToastHeader>
          <ToastBody>
            You've determined you're registered to vote and you know when the next election will be held. All that's left is figuring out whose on the ballot. Using a current address, find out information about your elected representatives and officials at the federal, state, county, and local levels. 
            Learn more <Link to="/representatives">HERE</Link>
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
            Yo! Go out and vote!!
          </ToastHeader>
          <ToastBody>
            Finally, here is a tool to search for the closest polling locations available in the next upcoming election. In addition to providing a name and address of the facility hosting a polling location, the location will be marked on a map so you can determine which site provides easist accessibilty from home or work. 
            Find out <Link to="/voter-information">HERE</Link>
          </ToastBody>
        </Toast>
      </div>
    
    </div>
  );
};

export default Learn;
