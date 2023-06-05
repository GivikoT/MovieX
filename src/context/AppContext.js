/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer, initialState } from "./AuthContextReducer";
import { handleFetch } from "./effects";
import { authenticated } from "./actions/AppContextActionsCreators";
import { isTokenValid } from "../utils/jwt";

const appContext = createContext();

const AppContext = ({ children }) => {
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
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (appContext) {
    return context;
  }
  throw new Error("AppContext Error");
};

export default AppContext;
