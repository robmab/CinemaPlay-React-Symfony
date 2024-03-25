import React, { useState } from "react";

import { Search } from "./search.jsx";
import { Modal } from "./modal.jsx";
import "../../styles/component/navbar.css";
import logo from "../../img/Logo.png";
import shop from "../../img/Icon_Icon_Shopping_Cart_white.png";
import user from "../../img/Usser.png";
import search from "../../img/Icon_Search-White.png";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand ">
        {/* LEFT */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="150" height="65" />
        </a>

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
        <Search checkModal={false} />

        {/* MODAL */}
        {showModal && <Modal setShowModal={setShowModal} />}

        {/* RIGHT  */}
        <div className="rigth-icons ms-auto">
          <img
            onClick={() => {
              setShowModal(!showModal);
            }}
            style={{ display: "none" }}
            className="zero"
            src={search}
            alt=""
            width="21px"
          />

          <img id="first" src={shop} alt="" height="30px" width="30px" />
          <img id="second" src={user} alt="" height="60px" width="60px" />
        </div>
      </nav>
    </>
  );
};
