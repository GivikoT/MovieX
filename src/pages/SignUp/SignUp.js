import React, { useEffect } from "react";
import SignUpWrapper from "../../components/Container/SignUpWrapper/SignUpWrapper";

const SignUp = () => {
  useEffect(() => {
    document.title = "MovieX - Sign Up";

    return () => {
      document.title = "MovieX: Your Premier Destination for Films";
    };
  }, []);

  return (
    <div>
      <SignUpWrapper />
    </div>
  );
};

export default SignUp;
