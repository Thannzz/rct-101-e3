import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <form onSubmit={handleSubmit} className="login">
      <input
        data-cy="login-email"
        name="email"
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
      />
      <input
        data-cy="login-password"
        name="current-password"
        type="current-password"
        placeholder="Enter Password"
        onChange={handleChange}
      />
      <button data-cy="login-submit">Login</button>
    </form>
  );
};

export default Login;
