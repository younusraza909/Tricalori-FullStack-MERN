import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Tricalorie/Navbar";
import Home from "./components/Tricalorie/Home";
import Login from "./components/authTricalori/Login";
import Register from "./components/authTricalori/Register";
import PrivateRoute from "./components/route/PrivateRoue";
import Alerts from "./components/Tricalorie/Alerts";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import AppState from "./context/app/AppState";

import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => (
  <AuthState>
    <AppState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Alerts />
              <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <PrivateRoute path="/" exact component={Home} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </AppState>
  </AuthState>
);

export default App;
