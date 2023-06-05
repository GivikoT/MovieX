import React from "react";
import Logo from "../../../../images/logo.png";
import "./navbarWithAuth.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FAVORITE_MOVIES,
  HOME,
  MOVIES,
  SIGN_IN,
  SIGN_UP,
} from "../../../../constants/routes";

const NavbarWithAuth = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar">
        <img src={Logo} alt="logo" />

        <ul className="navbar_list">
          <li>
            <NavLink to={HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={MOVIES}>Movies</NavLink>
          </li>
          <li>
            <NavLink to={FAVORITE_MOVIES}>Favorites</NavLink>
          </li>
          <li>
            <button className="nav_button" onClick={() => navigate(SIGN_IN)}>
              Sign In
            </button>
          </li>
          <li>
            <button className="nav_button" onClick={() => navigate(SIGN_UP)}>
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarWithAuth;
