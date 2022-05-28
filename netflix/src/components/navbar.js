import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import "./nav.css";

export default function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${show ? "nav_black" : ""} `}>
      <img className="nav_logo" src={logo} alt="" />
    </div>
  );
}
//https://www.pxpng.com/public/uploads/preview/-11621687998ytrgnduxoh.png
