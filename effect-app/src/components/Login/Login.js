import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const reducer = (state, action) => {
  if (action.type === "emailInput") {
    return {
      emailEntered: action.val,
      emailValid: action.val.includes("@"),
      pwEntered: state.pwEntered,
      pwValid: state.pwValid,
    };
  }
  if (action.type === "pwInput") {
    return {
      emailEntered: state.emailEntered,
      emailValid: state.emailValid,
      pwEntered: action.val,
      pwValid: action.val.length > 6,
    };
  } else if (action.type === "pwBlur") {
    return {
      emailEntered: state.emailEntered,
      emailValid: state.emailValid,
      pwEntered: state.pwEntered,
      pwValid: false,
    };
  } else if (action.type === "inputBlur") {
    return {
      emailEntered: state.emailEntered,
      emailValid: false,
      pwEntered: state.pwEntered,
      pwValid: state.pwValid,
    };
  }

  return { emailEntered: "", emailValid: false, pwEntered: "", pwValid: false };
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');//[en1,e1]
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const [inputState, dispatchAction] = useReducer(reducer, {
    emailEntered: "",
    emailValid: null,
    pwEntered: "",
    pwValid: null,
  });

  const Timer = (props) => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return <div> {props.time}</div>;
  };

  useEffect(() => {
    const timeHandler = setTimeout(() => {
      console.log("Checking Validity");
      setFormIsValid(
        inputState.emailEntered.includes("@") &&
          inputState.pwEntered.trim().length > 6
      );
    }, 1000);

    return () => {
      console.log("return called");
      clearTimeout(timeHandler);
    };
  }, [inputState]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchAction({ type: "emailInput", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchAction({ type: "pwInput", val: event.target.value });
  };

  const validateEmailHandler = () => {
    if (!inputState.emailValid) dispatchAction({ type: "inputBlur" });
  };

  const validatePasswordHandler = () => {
    if (!inputState.pwValid) dispatchAction({ type: "pwBlur" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(inputState.emailEntered, inputState.pwEntered);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Timer time={time}></Timer>
        <div
          className={`${classes.control} ${
            inputState.emailValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={inputState.emailEntered}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            inputState.pwValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={inputState.pwEntered}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
