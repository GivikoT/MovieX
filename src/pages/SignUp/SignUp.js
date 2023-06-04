import React, { useEffect } from "react";
import SignUpForm from "../../components/Presentational/SignUpForm/SignUpForm";

const SignUp = () => {
  useEffect(() => {
    document.title = "MovieX - Sign Up";

    return () => {
      document.title = "MovieX: Your Premier Destination for Films";
    };
  }, []);

  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
