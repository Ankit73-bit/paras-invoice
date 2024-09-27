import { useState, useRef } from "react";
import useValidateInputs from "./useValidateInputs";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { useNavigate } from "react-router";
import { signInUser, signUpUser } from "./authentication";

function useAuthForm(isSignIn, setIsSignIn) {
  const [errorMessage, setErrorMessage] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const {
    validateInputs,
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
  } = useValidateInputs(emailRef, passwordRef);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (!validateInputs(emailValue, passwordValue)) return;

    try {
      if (isSignIn) {
        // Sign In
        const user = await signInUser(emailValue, passwordValue);
        navigate("/invoice-dashboard");
      } else {
        // Sign Up
        const nameValue = nameRef.current.value;
        const user = await signUpUser(emailValue, passwordValue, nameValue);
        dispatch(addUser(user));
        navigate("/invoice-dashboard");
      }
    } catch (error) {
      setErrorMessage(`${error.code} ${error.message}`);
    }
  };

  return {
    handleSubmit,
    nameRef,
    emailRef,
    passwordRef,
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
    errorMessage,
    toggleSignIn: () => setIsSignIn((prev) => !prev),
  };
}

export default useAuthForm;
