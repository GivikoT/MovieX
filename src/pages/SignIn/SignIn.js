import React, { useEffect } from "react";
import SignInForm from "../../components/Presentational/SignInForm/SignInForm";
import { useLocation } from "react-router-dom";
import styles from "./signIn.module.css";

const SignIn = () => {
  const location = useLocation();
  const success = location?.state?.success;

  useEffect(() => {
    document.title = "MovieX - Sign In";

    return () => {
      document.title = "MovieX: Your Premier Destination for Films";
    };
  }, []);

  return (
    <div className={styles.container}>
      {success && (
        <h1 className={styles.sign_in_title}>
          You have successfully Signed Up!
        </h1>
      )}
      <SignInForm />
    </div>
  );
};

export default SignIn;
