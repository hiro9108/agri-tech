import React, { useEffect } from "react";
import AuthForm from "../UI/AuthForm/AuthForm";

import Image from "../../assets/images/auth/signup/signup.jpg";

const LABEL_TEXTS = ["First Name", "Last Name", "Email"];
const LABEL_PASSWORD = ["Password", "Confirmed Password"];
const LABEL_TITLE = "sign up";
const LABEL_SUBMIT = "Signup";

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AuthForm
        title={LABEL_TITLE}
        image={Image}
        labelTexts={LABEL_TEXTS}
        password={LABEL_PASSWORD}
        submit={LABEL_SUBMIT}
      />
    </>
  );
};

export default Signup;
