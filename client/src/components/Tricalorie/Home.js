import React, { Fragment, useContext, useEffect } from "react";
import Form from "../Tricalorie/Form";
import List from "../Tricalorie/List";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Form />
      <List />
    </Fragment>
  );
};

export default Home;
