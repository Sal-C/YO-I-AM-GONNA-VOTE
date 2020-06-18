import React from "react";
import Auth from './utils/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import VerificationPage from "./pages/Verify";
import VoterInfo from "./pages/VoterInfo";
import RepSearch from "./pages/RepSearch";
import ElectionsSearch from "./pages/Elections";
import ContestsPage from "./pages/Contests";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/NavBar";
import Login from "./pages/Login/index";
import Logout from "./components/Logout";
import SignUp from "./pages/SignUp";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/verification" component={VerificationPage} />
        <PrivateRoute exact path="/representatives" component={RepSearch} />
        <PrivateRoute exact path="/elections" component={ElectionsSearch} />
        <PrivateRoute exact path="/voter-information" component={VoterInfo} />
        <PrivateRoute exact path="/contests" component={ContestsPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
