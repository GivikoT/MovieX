import React, { useState } from "react";
import { signUp } from "../../../api/auth";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../../constants/routes";
import { useFormik } from "formik";
import { basicSchema } from "../../../schemas";
import SignUpForm from "../../Presentational/SignUpForm/SignUpForm";

const SignUpWrapper = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

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

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <SignUpForm
      isLoading={isLoading}
      errorMessage={errorMessage}
      formik={formik}
      passwordVisible={passwordVisible}
      togglePasswordVisibility={togglePasswordVisibility}
      confirmPasswordVisible={confirmPasswordVisible}
      toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility}
    />
  );
};

export default SignUpWrapper;
