import React, { useState } from "react";
import styles from "./signUpForm.module.css";
import { signUp } from "../../../api/auth";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../../constants/routes";
import { useFormik } from "formik";
import { basicSchema } from "../../../schemas";

const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (values) => {
    setIsLoading(true);
    signUp(values)
      .then(() => {
        navigate(SIGN_IN, { state: { success: true } });
      })
      .catch((err) => setErrorMessage(err.message))
      .finally(() => setIsLoading(false));
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div>
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
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"
                type="password"
              />
            </div>
            {errors.password && touched.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
            <div className={styles.form_field}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                id="confirmPassword"
                type="password"
              />
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
          {isLoading && <div className={styles.custom_loader}></div>}
        </div>
      </section>
    </div>
  );
};

export default SignUpForm;
