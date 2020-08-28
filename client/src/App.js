import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Tricalorie/Navbar";
import Home from "./components/Tricalorie/Home";
import Login from "./components/authTricalori/Login";
import Register from "./components/authTricalori/Register";
import PrivateRoute from "./components/route/PrivateRoue";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <PrivateRoute path="/" exact component={Home} />
        </Switch>
      </div>
    </Fragment>
  </Router>
);

export default App;
