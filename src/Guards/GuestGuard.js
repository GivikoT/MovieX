/* eslint-disable react/prop-types */
import React from "react";
import { useAuthContext } from "../context/auth/AuthContext";
import { HOME } from "../constants/routes";
import { Navigate } from "react-router-dom";

const GuestGuard = ({ children }) => {
  const {
    state: { isAuthenticated },
  } = useAuthContext();

  return <>{isAuthenticated ? <Navigate to={HOME} /> : children}</>;
};

export default GuestGuard;
