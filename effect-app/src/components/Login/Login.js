import React, { useState, useEffect, useReducer, useContext, useRef } from "react";
import AuthContext from "../../Store/auth-context";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const reducer = (state, action) => {
  if (action.type === "emailInput") {
    return {
      emailEntered: action.val,
      emailValid: action.val.includes("@"),
      pwEntered: state.pwEntered,
      pwValid: state.pwValid,
      formValid: state.formValid,
    };
  }
  if (action.type === "pwInput") {
    return {
      emailEntered: state.emailEntered,
      emailValid: state.emailValid,
      pwEntered: action.val,
      pwValid: action.val.trim().length > 6,
      formValid: state.formValid,
    };
  } else if (action.type === "pwBlur") {
    return {
      emailEntered: state.emailEntered,
      emailValid: state.emailValid,
      pwEntered: state.pwEntered,
      pwValid: false,
      formValid: state.formValid,
    };
  } else if (action.type === "submit") {
    return {
      emailEntered: state.emailEntered,
      emailValid: state.emailValid,
      pwEntered: state.pwEntered,
      pwValid: state.pwValid,
      formValid: state.emailValid && state.pwValid,
    };
  } else if (action.type === "inputBlur") {
    return {
      emailEntered: state.emailEntered,
      emailValid: false,
      pwEntered: state.pwEntered,
      pwValid: state.pwValid,
      formValid: state.formValid,
    };
  }

  return { emailEntered: "", emailValid: false, pwEntered: "", pwValid: false };
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');//[en1,e1]
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [formIsValid, setFormIsValid] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const [inputState, dispatchAction] = useReducer(reducer, {
    emailEntered: "",
    emailValid: null,
    pwEntered: "",
    pwValid: null,
    formValid: null,
  });

  const ctx = useContext(AuthContext);

  const Timer = (props) => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return <div> {props.time}</div>;
  };

  //dependencies which might changes//
  const { emailValid: emValid } = inputState; //
  const { pwValid: pwalid } = inputState; //true

  useEffect(() => {
    const timeHandler = setTimeout(() => {
      console.log("Checking Validity");
      dispatchAction({ type: "submit" });
    }, 1000);

    return () => {
      console.log("return called");
      clearTimeout(timeHandler);
    };
  }, [emValid, pwalid]);

    const emailRef= useRef()
    const pwRef= useRef()

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
    if(inputState.formValid){
    ctx.onLogin(inputState.emailEntered, inputState.pwEntered);
    }
    else if(!inputState.emailValid){
      emailRef.current.focus();
    }

    else if (!inputState.pwValid)
    {
      pwRef.current.focus();
    }
  };



  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
        ref= {emailRef}
          name="Email"
          value={inputState.emailEntered}
          className={`${classes.control} ${
            inputState.emailValid === false ? classes.invalid : ""
          }`}
          id="Email"
          type="Email"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          placeholder="Enter Email"
        ></Input>
        <Input
        ref= {pwRef}
          name="Password"
          value={inputState.pwEntered}
          className={`${classes.control} ${
            inputState.pwValid === false ? classes.invalid : ""
          }`}
          id="Password"
          type="Password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          placeholder="Enter Password"
        ></Input>
        {/* <div
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
        </div> */}

        {/* <div
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
        </div> */}
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
           
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
