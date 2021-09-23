import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <img src={logo} alt="logo" className="w-25 mx-auto d-block my-4" />
      {/* Menu */}
      <nav className="bg-dark mt-3">
        <div className="container d-flex">
          <a href="/shop" className="nav-items p-3 d-block nav-link text-white">
            Shop
          </a>
          <a
            href="/review"
            className="nav-items p-3 d-block nav-link text-white"
          >
            Order Review
          </a>
          <a
            href="/inventory"
            className="nav-items p-3 d-block nav-link text-white"
          >
            Manage Inventory Here
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
