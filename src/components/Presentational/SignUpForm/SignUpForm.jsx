/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import styles from "./signUpForm.module.css";

const SignUpForm = ({
  isLoading,
  errorMessage,
  formik,
  passwordVisible,
  togglePasswordVisibility,
  confirmPasswordVisible,
  toggleConfirmPasswordVisibility,
}) => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    formik;

  return (
    <div>
      {isLoading ? (
        <div className={styles.wrapper}>
          <div className={styles.custom_loader}></div>
        </div>
      ) : (
        <section className={styles.signup_section}>
          <div className={styles.signup_form}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className={styles.form_field}>
                <label htmlFor="username">Username</label>
                <input
                  value={values.userName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="userName"
                  type="text"
                />
              </div>
              {errors.userName && touched.userName && (
                <p className={styles.error}>{errors.userName}</p>
              )}
              <div className={styles.form_field}>
                <label htmlFor="email">Email</label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  type="email"
                />
              </div>
              {errors.email && touched.email && (
                <p className={styles.error}>{errors.email}</p>
              )}
              <div className={styles.form_field}>
                <label htmlFor="password">Password</label>
                <div className={styles.password_input}>
                  <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="password"
                    type={passwordVisible ? "text" : "password"}
                  />
                  <i
                    className={`${
                      passwordVisible
                        ? `${styles.password_toggle} ${styles.active}`
                        : styles.password_toggle
                    }`}
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>
              </div>
              {errors.password && touched.password && (
                <p className={styles.error}>{errors.password}</p>
              )}
              <div className={styles.form_field}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className={styles.password_input}>
                  <input
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="confirmPassword"
                    type={confirmPasswordVisible ? "text" : "password"}
                  />
                  <i
                    className={`${
                      confirmPasswordVisible
                        ? `${styles.password_toggle} ${styles.active}`
                        : styles.password_toggle
                    }`}
                    onClick={toggleConfirmPasswordVisibility}
                  ></i>
                </div>
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className={styles.error}>{errors.confirmPassword}</p>
              )}
              <button className={styles.bbutton} type="submit">
                Sign Up
              </button>
            </form>
            {errorMessage && (
              <h1 className={styles.errorHandles}>{errorMessage}</h1>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default SignUpForm;
