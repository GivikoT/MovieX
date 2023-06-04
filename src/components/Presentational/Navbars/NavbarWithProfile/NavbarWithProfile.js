import React from "react";
import { NavLink } from "react-router-dom";
import { HOME, MOVIES, FAVORITE_MOVIES } from "../../../../constants/routes";
import Logo from "../../../../images/logo.png";
import ProfileMenu from "../../ProfileMenu/ProfileMenu";
import SearchBarWrapper from "../../../Container/SearchBarWrapper/SearchBarWrapper";

const NavbarWithProfile = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={Logo} alt="logo" />
        <SearchBarWrapper />
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
        </ul>
        <ProfileMenu />
      </nav>
    </div>
  );
};

export default NavbarWithProfile;
