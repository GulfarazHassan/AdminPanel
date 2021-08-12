import React from "react";
import SignIn from "../../pages/SignIn";
import { useHistory } from "react-router-dom";

const SigninScreen = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/Signup");
  }
  return <SignIn onLogin={handleClick} />;
};

export default SigninScreen;
