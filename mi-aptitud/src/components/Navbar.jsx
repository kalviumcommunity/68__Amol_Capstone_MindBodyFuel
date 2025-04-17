import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Create this file in the styles folder

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Mind Body Fuel</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
