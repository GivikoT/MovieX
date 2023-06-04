/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer, initialState } from "./AuthContextReducer";
import { handleFetch } from "../effects";
import { authenticated } from "./actions/AuthContextActionsCreators";
import { isTokenValid } from "../../utils/jwt";

const authContext = createContext();

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token && isTokenValid(token)) {
      dispatch(authenticated(token));
    }
  }, []);

  useEffect(() => {
    handleFetch(dispatch);
  }, []);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (authContext) {
    return context;
  }
  throw new Error("authContext Error");
};

export default AuthContext;
