import { useState } from "react";

const useValidateInputs = () => {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  // Accept emailValue and passwordValue instead of refs
  const validateInputs = (emailValue, passwordValue) => {
    let isValid = true;

    // Validate email
    if (!emailValue || !/\S+@\S+\.\S+/.test(emailValue)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    // Validate password
    if (!passwordValue || passwordValue.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  return {
    validateInputs,
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
  };
};

export default useValidateInputs;
