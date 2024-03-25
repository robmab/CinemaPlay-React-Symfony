import React, { useRef, useEffect } from "react";

import { Search } from "./search.jsx";
import "../../styles/component/modal.css";

export const Modal = (props) => {
  /* MODAL REF FUNCTION */
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /* Trigger ouside modal */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.setShowModal(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef} className="modal">
      <Search setShowModal={props.setShowModal} checkModal={true} />
    </div>
  );
};
