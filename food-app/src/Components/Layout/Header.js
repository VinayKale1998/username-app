

import React from "react"
import classes from "./Header.module.css"
import image from "../../Assets/image.jpg"
import HeaderButton from "./HeaderButton"

const Header = props=>{

    return (<React.Fragment>
        <header className={classes["header"]}>
            <h1>Zomato</h1>
            <HeaderButton >Cart</HeaderButton>
        </header>
        
           
           
      
        <div className={classes["main-image"]} >
            <img src={image} alt="Finger Licking Good!" ></img>
        </div>
    </React.Fragment>)
}

export  default Header;