import classes from "./Input.module.css"

import { useState } from "react";
const Input = (props) => {



    const changeHandler =(event)=>{
        props.onSetValue(event.target.value);
    }


  return (
    <div className={classes.input} >
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} onChange={changeHandler} value={props.value}></input>
    </div>
  );
};

export default Input