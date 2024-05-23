import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export function Header() {
  const [btnName, setBtnName] = useState("Login");
  function OnsetBtnName() {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={() => OnsetBtnName()}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
