import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Where from "./components/pages/Where";
import When from "./components/pages/When";
import Login from "./components/pages/Login";



function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/where" component={Where} />
        <Route exact path="/When" component={When} />
        <Route path="/Login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
