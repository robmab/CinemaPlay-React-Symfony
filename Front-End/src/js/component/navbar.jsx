import React from "react";
import { Link } from "react-router-dom";

import "../../styles/component/navbar.css";
import logo from '../../img/Logo.png';
import shop from '../../img/Icon_Icon_Shopping_Cart_white.png';
import user from '../../img/Usser.png';
import search from '../../img/Icon_Search-Black.png';

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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
          <div className="input-group">
            <input
              // onkeydown="filterCards()"
              id="title"
              placeholder="Buscar película por nombre"
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
            />

            <div className="hr" style={{width:"0.1em}"}}></div>
            <div className="input-group-append">
              <p>Fecha</p>
              <input
                id="release-date"
                className="date"
                type="text"
                placeholder="Año1-Año2"
              />
            </div>
            <div className="hr"></div>
            <div className="input-group-append">
              <p>Idioma</p>
              <select id="original-language">
                <option defaultValue="" disabled hidden>
                  Elegir idioma
                </option>
                <option value="">Ninguno</option>

                <option value="">Hello</option>
              </select>
            </div>
            <div className="icon-search" //onClick="filterCards()"
            >
              <img src={search} alt="" width="21px" />
            </div>
          </div>
        </div>

        {/* RIGHT  */}
        <div className="rigth-icons">
          <img
            src={shop}
            alt=""
            height="30px"
            width="30px"
          />
          <img src={user} alt="" height="60px" width="60px" />
        </div>
      </nav>
    </>
  );
};