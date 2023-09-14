import React from "react"
import classes from "./Button.module.css"
export default function Btn(props)
{

       
    //reusable component
    return(
        <button type="submit" className={classes.button}  onClick={props.onClick}>{props.children} </button>
    )
}