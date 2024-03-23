import React, { Component } from "react";

import "../../styles/component/footer.css";
import globe from '../../img/Icon_Globe.png';
import facebook from '../../img/Icon_Facebook.png';
import linkedin from '../../img/Icon_Linkedin.png';
import twitter from '../../img/Icon_Twitter.png';

export const Footer = () => (
  <footer>
    <div className="footer">
      <div className="content">
        <div className="select">
          <img src={globe} alt="" width="18px" height="18px" />
          <select className="form-select" aria-label="Default select example">
            <option defaultValue="Español">
              Español
            </option>
            <option value="Ingles">Ingles</option>
          </select>
        </div>
        <div>
          <h1>Navegación</h1>
          <p>Top películas</p>
          <p>Próximos estrenos</p>
        </div>
        <div>
          <h1>Legal</h1>
          <p>Aviso Legal</p>
          <p>Política de Privacidad</p>
          <p>Política de Cookies</p>
        </div>
        <div>
          <h1>Nosotros</h1>
          <p>info@dominio.com</p>
          <p>641 02 22 31</p>
        </div>
        <div className="social">
          <h1>Síguenos</h1>
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={linkedin} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>

      <div className="end">
        <p>@ 2022 Prueba desarrollador Lagahe</p>
      </div>
    </div>
  </footer>
);
