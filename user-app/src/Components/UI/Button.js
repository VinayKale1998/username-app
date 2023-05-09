import React from "react"
import classes from "./Button.module.css"
export default function Button(props)
{

       
    
    return(
        <button type="submit" className={classes.button}  onClick={props.onClick}>{props.children} </button>
    )
}