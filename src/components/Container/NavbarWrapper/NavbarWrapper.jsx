import React from "react";
import { useAppContext } from "../../../context/AppContext";
import NavbarWithProfile from "../../Presentational/Navbars/NavbarWithProfile/NavbarWithProfile";
import NavbarWithAuth from "../../Presentational/Navbars/NavbarWithAuth/NavbarWithAuth";

const NavbarWrapper = () => {
  const { state } = useAppContext();
  const { isAuthenticated } = state;

  return (
    <div>{isAuthenticated ? <NavbarWithProfile /> : <NavbarWithAuth />}</div>
  );
};

export default NavbarWrapper;
