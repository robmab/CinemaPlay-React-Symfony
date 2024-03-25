import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/component/search.css";

import search from "../../img/Icon_Search-Black.png";

export const Search = () => {
  const { store, actions } = useContext(Context);
  const [langList, setLangList] = useState([]);

  /* CHECK FOR LANG SELECT IN STORE */
  useEffect(() => {
    if (langList.length > 0) return;

    let languages = [];
    store.films.map((value) => {
      languages.push(value.originalLanguage.toUpperCase());
    });
    languages = Array.from(new Set(languages));
    setLangList(languages);
  }, [store.films]);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [lang, setLang] = useState("");

  const handleClickFilter = () => {
    actions.filter(name, date, lang);
  };

  const handleInputDate = (e) => {
    /* AUTO WRITTE/DELETE "-" */
    console.log(e);
    if (e.target.value.length === 4) setDate(e.target.value + "-");
    else if (e.target.value.length === 5) setDate(e.target.value.slice(0, -1));
    else setDate(e.target.value);
    actions.filter(name, e.target.value, lang);
  };

  /* FOR CONTROL CHARACTERS ALLOWED ON INPUT */
  const preventCharactersInput = (e) => {
    const value = e.target.value;
    if (value.length === 5 && e.key === "Backspace") {
      setDate(date + " ");
    }
    if (value.length === 4 && e.key !== "Backspace") {
      setDate(date + "-");
    }

    if (e.key === "Backspace") return;
    const re = /[0-9]+/g;

    if (!re.test(e.key) || value.length === 9) {
      e.preventDefault();
    }
  };

  return (
    <div className="input-group">
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          actions.filter(e.target.value, date, lang);
        }}
        id="title"
        placeholder="Buscar película por nombre"
        type="text"
        className="form-control"
        aria-label="Text input with dropdown button"
        maxLength="9"
      />

      <div className="hr" style={{ width: "0.1em}" }}></div>
      <div className="input-group-append">
        <p>Fecha</p>
        <input
          value={date}
          onChange={handleInputDate}
          id="release-date"
          className="date"
          type="text"
          placeholder="Año1-Año2"
          onKeyDown={preventCharactersInput}
        />
      </div>
      <div className="hr"></div>
      <div className="input-group-append">
        <p>Idioma</p>
        <select
          value={lang}
          onChange={(e) => {
            setLang(e.target.value);
            actions.filter(name, date, e.target.value);
          }}
          id="original-language"
        >
          <option defaultValue="" disabled hidden>
            Elegir idioma
          </option>
          <option value="">Ninguno</option>
          {langList.map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="icon-search" onClick={handleClickFilter}>
        <img src={search} alt="" width="21px" />
      </div>
    </div>
  );
};
