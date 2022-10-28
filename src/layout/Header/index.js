import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <Link to="/dashboard">
        <p className="navbar__title">COVID-19 TRACKER</p>
      </Link>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/information">Information</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;