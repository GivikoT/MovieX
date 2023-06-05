/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import { SIGN_IN, SIGN_UP } from "../constants/routes";
import styles from "./AuthGuard.module.css";
import { useAppContext } from "../context/AppContext";

const AuthGuard = ({ children }) => {
  const { state } = useAppContext();
  const { isAuthenticated } = state;
  const navigate = useNavigate();
  return (
    <>
      {isAuthenticated ? (
        children
      ) : (
        <div className={styles.auth_guard_container}>
          <h1 className={styles.auth_guard_title}>
            Oops, you are not logged in!
          </h1>
          <p className={styles.auth_guard_description}>
            Please sign in or sign up to access the website.
          </p>
          <div className={styles.auth_guard_buttons}>
            <button
              className={styles.auth_guard_button}
              onClick={() => navigate(SIGN_IN)}
            >
              Sign In
            </button>
            <button
              className={styles.auth_guard_button}
              onClick={() => navigate(SIGN_UP)}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthGuard;
