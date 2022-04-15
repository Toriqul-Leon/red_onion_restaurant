import React from "react";
import "./Header.css";
import icon from "../../../images/logo2.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <div className="header-container">
      <img src={icon} alt="" width={"150px"} height={"40px"} />
      <div className="header">
        <div>
          <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </div>
        <div>
          <p>Login</p>
        </div>
        <div className="main-btn">
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
