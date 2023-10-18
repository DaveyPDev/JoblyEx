import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Homepage";
import Companies from "./components/Companies";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/companies" component={Companies} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
