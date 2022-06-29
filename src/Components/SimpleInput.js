import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    reset: resetNameInput,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurhandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    reset: resetEmailInput,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurhandler,
  } = useInput(value => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitNameHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput();

    resetEmailInput();
  };

  const inputNameClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  const inputEmailClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitNameHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurhandler}
          onChange={nameChangeHandler}
          value={enteredName}
        />
        {nameHasError && (
          <p className="error-text">Name field must not be empty</p>
        )}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onBlur={emailBlurhandler}
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">Please Enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
