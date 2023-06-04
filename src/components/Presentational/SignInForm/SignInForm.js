import React, { useState } from "react";
import styles from "./signInForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { HOME, SIGN_UP } from "../../../constants/routes";
import { signIn } from "../../../api/auth";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { logIn } from "../../../context/auth/actions/AuthContextActionsCreators";
import { useFormik } from "formik";

const SignInForm = () => {
  const { dispatch } = useAuthContext();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (values) => {
    setIsLoading(true);
    signIn(values)
      .then((data) => {
        dispatch(logIn(data));
        navigate(HOME);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit,
  });

  return (
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
              <Link className={styles.link} to={SIGN_UP}>
                Sign Up
              </Link>
            </div>
            {errorMessage && (
              <p className={styles.errorHandler}>{errorMessage}</p>
            )}
            {isLoading && <div className={styles.custom_loader}></div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignInForm;
