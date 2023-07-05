import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="header-nav">
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
        <ul className="header-ul">
        
          <li>

          <Link to="/logout" className="logout">
            logout
          </Link>
          </li>
            
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
