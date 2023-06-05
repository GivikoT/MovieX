import React from "react";
import Error from "../../../images/error.png";
import styles from "./ErrorHandler.module.css";

const ErrorHandler = () => {
  return (
    <div className={styles.error_container}>
      <h2 className={styles.error_title}>Oops! Something went wrong.</h2>
      <p className={styles.error_message}>
        We apologize for the inconvenience. Please try again later.
      </p>
      <img className={styles.error_image} src={Error} alt="Error" />
    </div>
  );
};

export default ErrorHandler;
