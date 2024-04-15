import React from "react";
import logo from "../assets/images/assignment_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="logo" className="navbar_logo" />
      </div>

      <div className="signup">
        <Link to="/create">
          <button className="signup_btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
