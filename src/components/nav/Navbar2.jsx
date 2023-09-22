import React, { useState } from "react";
import "./Navbar2.scss";
import Header from "../header/Header";
const Navbar2 = ({ setpg }) => {
  return (
    <nav class="navbar">
      <Header />
      <ul class="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">
          &#9776;
        </label>
        <div class="menu">
          <li
            onClick={() => {
              setpg(1);
              document.getElementById("checkbox_toggle").checked = false;
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              setpg(2);
              document.getElementById("checkbox_toggle").checked = false;
            }}
          >
            Know me
          </li>
          <li
            onClick={() => {
              setpg(3);
              document.getElementById("checkbox_toggle").checked = false;
            }}
          >
            Reach me
          </li>
          <li
            onClick={() => {
              // setpg(4)
              document.getElementById("checkbox_toggle").checked = false;
            }}
          >
            Resume
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar2;
