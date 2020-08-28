import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Tricalorie/Navbar";
import Form from "./components/Tricalorie/Form";
import List from "./components/Tricalorie/List";

const App = () => (
  <Fragment>
    <Navbar />
    <div className="container">
      <Form />
      <List />
    </div>
  </Fragment>
);

export default App;
