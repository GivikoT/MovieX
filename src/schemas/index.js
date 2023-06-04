import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const basicSchema = yup.object().shape({
  userName: yup
    .string()
    .max(8, "Username can be a maximum of 8 characters")
    .required("Username Required"),
  email: yup
    .string()
    .email("Please Enter a Valid Email")
    .required("Email Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(passwordRules, {
      message:
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 digit",
    })
    .required("Password Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password Required"),
});
