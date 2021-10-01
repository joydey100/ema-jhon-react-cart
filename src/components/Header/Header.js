import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <img src={logo} alt="logo" className="w-25 mx-auto d-block my-4" />
      {/* Menu */}
      <nav className="bg-dark mt-3">
        <div className="container d-flex">
          <NavLink to="/" className="nav-items p-3 d-block nav-link text-white">
            Shop
          </NavLink>
          <NavLink
            to="/review"
            className="nav-items p-3 d-block nav-link text-white"
          >
            Order Review
          </NavLink>
          <NavLink
            to="/inventory"
            className="nav-items p-3 d-block nav-link text-white"
          >
            Manage Inventory Here
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
