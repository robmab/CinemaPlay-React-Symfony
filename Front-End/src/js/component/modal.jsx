import React, { useRef, useEffect } from "react";

import { Search } from "./search.jsx";
import "../../styles/component/modal.css";
import { useOutsideAlerter } from "../hooks/useOutsideAlerter.jsx";

export const Modal = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.setShowModal, false);

  return (
    <div ref={wrapperRef} className="modal">
      <Search setShowModal={props.setShowModal} checkModal={true} />
    </div>
  );
};
