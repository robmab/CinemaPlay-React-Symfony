import React from "react";
import { Link } from "react-router-dom";
import { useDimensions } from "../hooks/useDimensions.jsx";

import "../../styles/component/hero.css";
import banner from "../../img/Banner_Desktop.jpg";
import bannerMobile from "../../img/Banner_Mobile.jpg";

export const Hero = () => {
  const dimensions = useDimensions();

  return (
    <header>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${
            dimensions.width < 1000 ? bannerMobile : banner
          })`,
        }}
      >
        <div className="content">
          <h1>¡Listas las palomitas!</h1>
          <p>
            Encuentra la mejor selección de películas, estrenos y taquilleras a
            nivel mundial. Dale play
          </p>
        </div>
      </div>
    </header>
  );
};
