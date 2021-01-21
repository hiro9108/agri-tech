import React, { useEffect } from "react";
import Navbar from "../UI/Navbar/Navbar";
import AuthForm from "../UI/AuthForm/AuthForm";

import Image from "../../assets/images/auth/signin/signin.jpg";

const LABEL_TEXTS = ["Email"];
const LABEL_PASSWORD = ["Password"];
const LABEL_TITLE = "sign in";
const LABEL_SUBMIT = "Signin";

const Signin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="auth">
      <Navbar />
      <AuthForm
        title={LABEL_TITLE}
        image={Image}
        labelTexts={LABEL_TEXTS}
        password={LABEL_PASSWORD}
        submit={LABEL_SUBMIT}
      />
    </div>
  );
};

export default Signin;
