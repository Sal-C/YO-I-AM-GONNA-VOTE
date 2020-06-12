import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import VerificationPage from "./pages/Verify";
import VoterInfo from "./pages/VoterInfo";
import RepSearch from "./pages/RepSearch";
import ElectionsSearch from "./pages/Elections";
import ContestsPage from "./pages/Contests";
//import LoginPage from "./pages/Login";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" exact render={() => <HomePage />}></Route>
          <Route exact path="/register" exact render={() => <RegisterPage />}></Route>
          <Route exact path="/verification" exact render={() => <VerificationPage />}></Route>
          <Route exact path="/representatives" exact render={() => <RepSearch />}></Route>
          <Route exact path="/elections" exact render={() => <ElectionsSearch />}></Route>
          <Route exact path="/voter-information" exact render={() => <VoterInfo />}></Route>
          <Route exact path="/contests" exact render={() => <ContestsPage />}></Route>
        </Switch>
      </div>
    </Router>
  );
}