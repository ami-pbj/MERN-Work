import React from "react";
import logo from "../assets/images/assignment_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/Dashboard" style={{ textDecoration: "none" }}>
        <div className="header_btn">Home</div>
      </Link>
      <Link to="/employees" style={{ textDecoration: "none" }}>
        <div className="header_btn">Employee List</div>
      </Link>
    </div>
  );
};

export default Header;
