import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//include images into your bundle
import { Contact } from "../component/contact.jsx";

//create your first component

export const Home = () => {
  const { store } = useContext(Context);

  const [contacts, setContacts] = useState(store.contactList);

  return (
    <div className="wrapper-home">
      <Link className="btn btn-success" to="add-contact">
        Add new contact
      </Link>
      <ul>
        {/* ALERT MESSAGE */}
        {!store.charged ? (
          <li className="loading">
            <p>...Loading data, please wait....</p>
          </li>
        ) : null}
        
        {contacts.map((x, y) => (
          <Contact
            setContacts={setContacts}
            key={y}
            id={y}
            idAPI={x.id}
            full_name={x.full_name}
            email={x.email}
            phone={x.phone}
            address={x.address}
            gender={x.gender}
            img={x.img}
          />
        ))}
      </ul>
    </div>
  );
};
