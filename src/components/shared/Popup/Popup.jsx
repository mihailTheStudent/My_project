import React from "react";
import "./Popup.css";

export default function Popup ({ open, setOpen, children }) {
  return (
    <div
      className={open ? "popup active" : "popup"}
      onClick={() => setOpen(false)}
    >
      <div
        className={open ? "popup__content active" : "popup__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
