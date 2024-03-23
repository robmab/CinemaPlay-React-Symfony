import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//include images into your bundle
// import { Contact } from "../component/contact.jsx";

//create your first component

export const Home = () => {
  const { store } = useContext(Context);

  const [films, setFilms] = useState(store.films);
  console.log(store.films)

  return (
    <div className="wrapper-home">
      <Link className="btn btn-success" to="add-contact">
        Add new contact
      </Link>
      
    </div>
  );
};
