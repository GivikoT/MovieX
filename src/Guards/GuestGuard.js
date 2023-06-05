/* eslint-disable react/prop-types */
import React from "react";
import { HOME } from "../constants/routes";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const GuestGuard = ({ children }) => {
  const {
    state: { isAuthenticated },
  } = useAppContext();

  return <>{isAuthenticated ? <Navigate to={HOME} /> : children}</>;
};

export default GuestGuard;
