import React from "react";
import { Link } from "react-router-dom";

/* npm install --save @fortawesome/react-fontawesome */
/* npm install --save @fortawesome/free-solid-svg-icons */

import likeWhite from "../../img/Icon_Like_White.png";
import likeRed from "../../img/Icon_Like_Red.png";
import star from "../../img/Icon_Star.png";

import "../../styles/component/cover.css";

export const Cover = (props) => {
  return (
    <div
      className="movie-card col-lg-2 col-6"
      data-title={props.title}
      data-release-date={props.releaseDate}
      data-original-language={props.originalLanguage}
    >
      <div
        className="cover"
        style={{ backgroundImage: `url(${props.backdropPath})` }}
      >
        <img
          id="like-white-<?php echo $c ?>"
          src={likeWhite}
          alt=""
          height="15px"
          width="15px"
        />
        <img
          id="like-red-<?php echo $c ?>"
          className="hidden"
          src={likeRed}
          alt=""
          height="15px"
          width="15px"
        />
      </div>
      <div className="header">
        <h2>{props.title}</h2>
        <p className="date">{props.releaseDate}</p>
        <p className="rating">
          <img src={star} alt="" />
          {props.voteAverage}
          <span>({props.voteCount} votos)</span>
        </p>
      </div>
      <div className="info">
        <p>{props.overview}</p>
        <div className="lang">
          <p className="">Idioma</p>
          <div className="hr"></div>
          <span>{props.originalLanguage}</span>
        </div>
      </div>
    </div>
  );
};
