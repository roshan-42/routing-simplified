import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <h3>Logo</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">contact</Link>
      </nav>
    </header>
  );
}
export default Navbar;
