import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.css";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  let [count, setCount] = useState(0);
  return (
    <div className="nav" data-cy="navbar">
      <Link to="" data-cy="navbar-home-link">
        Home
      </Link>
      <Link to="products">Products</Link>
      <span data-cy="navbar-cart-items-count">Cart : {count}</span>
      <button data-cy="navbar-login-logout-button">Logout</button>
    </div>
  );
};

export default Navbar;
