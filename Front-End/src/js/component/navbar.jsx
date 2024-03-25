import React from "react";

import { Search } from "./search.jsx";
import "../../styles/component/navbar.css";
import logo from "../../img/Logo.png";
import shop from "../../img/Icon_Icon_Shopping_Cart_white.png";
import user from "../../img/Usser.png";


export const Navbar = () => {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* LEFT */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="150" height="65" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Top películas<span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Proximos estrenos<span className="sr-only"></span>
            </a>
          </li>
        </ul>

        {/* SEARCH */}
        <Search/>

        {/* RIGHT  */}
        <div className="rigth-icons">
          <img src={shop} alt="" height="30px" width="30px" />
          <img src={user} alt="" height="60px" width="60px" />
        </div>
      </nav>
    </>
  );
};
