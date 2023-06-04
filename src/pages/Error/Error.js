import React, { useEffect } from "react";
import styles from "./Error.module.css";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../constants/routes";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "MovieX - Page Not Found";

    return () => {
      document.title = "MovieX: Your Premier Destination for Films";
    };
  }, []);

  return (
    <div className={styles.not_found}>
      <h1 className={styles.not_found__title}>404</h1>
      <p className={styles.not_found__message}>Oops! Page not found</p>
      <button
        className={styles.not_found__button}
        onClick={() => navigate(HOME)}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Error;
