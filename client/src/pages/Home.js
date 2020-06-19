
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col  } from 'reactstrap';

const Learn = (props) => {
  return (
    <div>
      <div style={{marginBottom: "100px", marginTop:"50px"}}>
      <h1 style={{fontSize:"50px"}}className="text-center">YO I'M 'ONNA VOTE!</h1>
      <p className="text-center">A tool for civic participation.</p>
      </div>

      <div style={{marginBottom: "50px"}}>
      <h2 className="text-center"> ARE YOU REGISTERED?</h2>
      <Row>
        <Col sm="4"></Col>
        <Col sm="2">
          <p>Check if and where you are currently registered to vote. The process takes thirty seconds and will determine if you have an active voter registration anywhere in the 50 U.S. states, the District of Columbia, and Puerto Rico. Click <Link to="/verification">HERE</Link> to verify.</p>
        </Col>
        <Col sm="2">
        <img src="https://images.unsplash.com/photo-1522875850847-f1965f2bb288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="img-fluid rounded" alt="login" />
        </Col>
        <Col sm="4"></Col>
      </Row>
      </div>

      <div style={{marginBottom: "50px"}}>
      <h2 className="text-center"> NOT REGISTERED? SIGN UP HERE!</h2>
      <Row>
        <Col sm="4"></Col>
        <Col sm="2">
          <p>With this tool, you can easily register to vote in less than two minutes. As long as you have a current postal address in any of the 50 U.S. states, the District of Columbia, or Puerto Rico and over the age of 18, this online application will register you safely and securely. Click <Link to="/register">HERE</Link> to register.</p>
        </Col>
        <Col sm="2">
        <img src="https://images.unsplash.com/photo-1540908390241-82158ab62887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="img-fluid rounded" alt="login" />
        </Col>
        <Col sm="4"></Col>
      </Row>
      </div>

      <div style={{marginBottom: "50px"}}>
      <h2 className="text-center"> VOTE-BY-MAIL</h2>
      <Row>
        <Col sm="4"></Col>
        <Col sm="2">
          <p>As a result of the Covid-19 Pandemic, ensuring that you can vote in a manner that does not jeopardize your health and the health of those around you is a paramount concern. While not universal, many states and localities offer the option of voting absentee or by mail. By inserting your current address, quickly determined if you qualify to vote by mail. Click <Link to="/absentee-ballot">HERE</Link> to check.</p>
        </Col>
        <Col sm="2">
        <img src="https://images.unsplash.com/photo-1582974006777-1117ffbdd7d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="img-fluid rounded" alt="login" />
        </Col>
        <Col sm="4"></Col>
      </Row>
      </div>

      <div style={{marginBottom: "50px"}}>
      <h2 className="text-center">WHEN TO VOTE</h2>
      <Row>
        <Col sm="4"></Col>
        <Col sm="2">
          <p>So you've successfully registered to vote, now what? Which state, county, and municpality you live in can determine which elections are on the upcoming ballot and which date polling day will be held for primary and general elections. By inserting your current address, you can determine when the next election will be held and which offices and ballot initiatives will be contested. Click <Link to="/elections">HERE</Link> to discover upcoming elections.</p>
        </Col>
        <Col sm="2">
        <img src="https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" class="img-fluid rounded" alt="login" />
        </Col>
        <Col sm="4"></Col>
      </Row>
      </div>

      <div className="react-text-block">
      <h2 className="text-center">YOUR REPRESENTATIVES</h2>
      <Row>
        <Col sm="4"></Col>
        <Col sm="2">
          <p>You've determined you're registered to vote and you know when the next election will be held. All that's left is figuring out whose on the ballot. Using  your current address, find out information about your elected representatives and officials at the federal, state, county, and local levels. Click <Link to="/representatives">HERE</Link> to find your representatives.</p>
        </Col>
        <Col sm="2">
        <img src="https://images.unsplash.com/photo-1520452112805-c6692c840af0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80" class="img-fluid rounded" alt="login" />
        </Col>
        <Col sm="4"></Col>
      </Row>
      </div>


    </div>
  );
};

export default Learn;