import { useEffect } from "react";


export const useOutsideAlerter =(ref, action, bool) => {
  useEffect(() => {
    /* Trigger ouside modal */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        action(bool);
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