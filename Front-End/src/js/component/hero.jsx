import React from "react";
import { Link } from "react-router-dom";

import "../../styles/component/hero.css"
import banner from "../../img/Banner_Desktop.jpg";

export const Hero = () => {
  return (
  <header>
    <div className="hero" style={{backgroundImage:`url(${banner})`}}>
      <div className="content">
        <h1>¡Listas las palomitas!</h1>
        <p>Encuentra la mejor selección de películas, estrenos y taquilleras a nivel mundial. Dale play</p>
      </div>
    </div>
  </header>
  );
};
