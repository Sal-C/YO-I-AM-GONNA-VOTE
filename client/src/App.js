import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import WherePage from "./pages/Where";
import WhenPage from "./pages/When";
import LoginPage from "./pages/Login";
import WhoPage from "./pages/Who";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
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

function About() {
  return (
    <div>
      <WhoPage />
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