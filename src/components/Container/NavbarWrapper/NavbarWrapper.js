import React from "react";
import { useAuthContext } from "../../../context/auth/AuthContext";
import NavbarWithProfile from "../../Presentational/Navbars/NavbarWithProfile/NavbarWithProfile";
import NavbarWithAuth from "../../Presentational/Navbars/NavbarWithAuth/NavbarWithAuth";

const NavbarWrapper = () => {
  const { state } = useAuthContext();
  const { isAuthenticated } = state;

  return (
    <div>{isAuthenticated ? <NavbarWithProfile /> : <NavbarWithAuth />}</div>
  );
};

export default NavbarWrapper;
