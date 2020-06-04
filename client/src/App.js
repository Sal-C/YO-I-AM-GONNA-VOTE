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
import WherePage from "./pages/Where";
//import WhenPage from "./pages/When";
//import LoginPage from "./pages/Login";
//import WhoPage from "./pages/Who";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/verify">
            <Verify />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

function Register() {
  return (
    <div>
      <RegisterPage />
    </div>
  );
}

function Verify() {
  return (
    <div>
      <VerificationPage />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <WherePage />
    </div>
  );
}