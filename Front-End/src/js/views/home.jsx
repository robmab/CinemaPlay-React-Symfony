import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { Hero } from "../component/hero.jsx";
import { Cover } from "../component/cover.jsx";
import "../../styles/views/home.css";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <>
      <Hero />
      <div className="body container-fluid">
        <h1>
          {store.films.length === 0 ? "No hay películas" : "Top películas"}{" "}
        </h1>
        <div className="movies row">
          {store.films.map((value) => (
            <Cover
              key={value.id}
              id={value.id}
              title={value.title}
              releaseDate={value.releaseDate}
              originalLanguage={value.originalLanguage}
              backdropPath={value.backdropPath}
              voteAverage={value.voteAverage}
              voteCount={value.voteCount}
              overview={value.overview}
            />
          ))}
        </div>
      </div>
    </>
  );
};
