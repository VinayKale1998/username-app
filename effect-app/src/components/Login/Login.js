import React, { useState,useEffect, useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


const reducer=(state,action)=>{

  if (action.type==="emailInput"){
    return {emailEntered:action.val,emailValid:action.val.includes('@')}
  }
  else if(action.type==='inputBlur')
  {
    return {emailEntered:state.emailEntered,emailValid:state.emailValid}
  }

  return {emailEntered:"" , emailValid:false}
}
const Login = (props) => {

  // const [enteredEmail, setEnteredEmail] = useState('');//[en1,e1]
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [time,setTime]= useState(new Date().toLocaleTimeString())

 const [emailState, dispatchAction]=  useReducer( reducer,{emailEntered:'',emailValid:null})


const Timer =(props)=>{

    setInterval(()=>{ setTime(new Date().toLocaleTimeString())
     
    },1000)
    return (<div> {props.time}</div>)
}

  useEffect(()=>{
  
    const timeHandler =setTimeout(()=>{
      console.log("Checking Validity")
      setFormIsValid(emailState.emailEntered.includes('@') && enteredPassword.trim().length > 6)},100)
    
    return ()=>{console.log("return called")
      clearTimeout(timeHandler)
    }
      
  },[emailState,enteredPassword])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchAction({type:"emailInput", val:event.target.value})

    
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    
  };

  const validateEmailHandler = () => {
    dispatchAction({type:'inputBlur'});
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.emailEntered, enteredPassword);
  };

  return (

    <Card className={classes.login}>
      
      <form onSubmit={submitHandler}>
      <Timer time={time}></Timer>
        <div
          className={`${classes.control} ${
            emailState.emailValid === false ? classes.invalid : ''
          }`}
        >
         
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.emailEntered}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
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
