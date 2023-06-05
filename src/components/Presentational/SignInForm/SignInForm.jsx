/* eslint-disable react/prop-types */

import React from "react";
import styles from "./signInForm.module.css";
import { Link } from "react-router-dom";

const SignInForm = ({ isLoading, errorMessage, formik, signUpLink }) => {
  const { values, handleBlur, handleChange, handleSubmit } = formik;

  return (
    <div>
      {isLoading ? (
        <div className={styles.wrapper}>
          <div className={styles.custom_loader}></div>
        </div>
      ) : (
        <div className={styles.formWrapper}>
          <section>
            <div className={styles.form_box}>
              <div className={styles.form_value}>
                <form onSubmit={handleSubmit}>
                  <h2>Sign In</h2>
                  <div className={styles.inputbox}>
                    <i className="fa-solid fa-user"></i>
                    <input
                      type="text"
                      autoComplete="true"
                      name="userName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userName}
                    />
                    <label htmlFor="usernameInput">Username</label>
                  </div>
                  <div className={styles.inputbox}>
                    <i className="fa-solid fa-lock"></i>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <label htmlFor="passwordInput">Password</label>
                  </div>
                  <button className={styles.login_button}>Login</button>
                  <div className={styles.signup_link}>
                    Not a member?
                    <Link className={styles.link} to={signUpLink}>
                      Sign Up
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {errorMessage && (
            <p className={styles.errorHandler}>{errorMessage}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SignInForm;
