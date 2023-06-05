import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HOME, SIGN_UP } from "../../../constants/routes";
import { signIn } from "../../../api/auth";
import { useAppContext } from "../../../context/AppContext";
import { logIn } from "../../../context/actions/AppContextActionsCreators";
import { useFormik } from "formik";
import SignInForm from "../../Presentational/SignInForm/SignInForm";

const SignInWrapper = () => {
  const { dispatch } = useAppContext();
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

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <SignInForm
      isLoading={isLoading}
      errorMessage={errorMessage}
      formik={formik}
      signUpLink={SIGN_UP}
    />
  );
};

export default SignInWrapper;
