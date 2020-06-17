import React from "react";
import Auth from './utils/Auth';
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
      <Route exact path="/" component={Books} />
        <Route exact path="/home" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <PrivateRoute exact path="/protected" component={Users} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
