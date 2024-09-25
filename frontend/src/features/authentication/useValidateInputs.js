import { useState } from "react";

const useValidateInputs = (emailValue, passwordValue) => {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  let isValid = true;

  if (!emailValue || !/\S+@\S+\.\S+/.test(emailValue)) {
    setEmailError(true);
    setEmailErrorMessage("Please enter a valid email address.");
    isValid = false;
  } else {
    setEmailError(false);
    setEmailErrorMessage("");
  }

  if (!passwordValue || passwordValue.length < 6) {
    setPasswordError(true);
    setPasswordErrorMessage("Password must be at least 6 characters long.");
    isValid = false;
  } else {
    setPasswordError(false);
    setPasswordErrorMessage("");
  }

  return {
    isValid,
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
  };
};

export default useValidateInputs;
