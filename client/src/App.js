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
//import WherePage from "./pages/Where";
import RepSearch from "./pages/RepSearch";
import ElectionsSearch from "./pages/Elections";
//import LoginPage from "./pages/Login";

export default function BasicExample() {
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
        </Switch>
      </div>
    </Router>
  );
}