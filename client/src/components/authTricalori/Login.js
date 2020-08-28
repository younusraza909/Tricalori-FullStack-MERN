import React, { useState, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
      //in order to redirect we have to do this
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      console.log("login Called");
      login({
        email: email,
        password: password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1 style={{ marginLeft: "20%", fontWeight: "lighter" }}>
        Account Login
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Login" className="btn blue btn-block" />
      </form>
    </div>
  );
};

export default Login;
