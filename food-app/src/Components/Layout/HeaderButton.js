import CartIcon from "../Cart/CartIcon";
import classes from  './HeaderCartButton.module.css'
import React,{useState,useContext, useEffect} from "react"
import ReactDOM from "react-dom"
import Cart from "../Cart/Cart";
import InputContext from "../../Store/InputContext";

const HeaderButton = (props) => {
    


const ctx=useContext(InputContext);

const [buttonBump, setBump]= useState(false)
const items= ctx.cartItems;
const btnClasses= `${classes.button} ${buttonBump?classes.bump:""}`


useEffect(()=>{
  if(items.length===0)
  {return}
  
  else{
   
  setBump(true)
   let timeout = setTimeout(()=>{
   setBump(false)
  },300)

  return ()=>{
    clearTimeout(timeout)
  }
  }
  
  
},[items])

  return (
    <React.Fragment>
       
    <button className={btnClasses} onClick={props.onClick} > 
      <span className={classes.icon}>
        <CartIcon></CartIcon>{" "}
      </span>

      <span >Cart</span>
      <span className={classes.badge}>{items.reduce((initial,item)=>{return initial +Number(item.amount) },0)}</span>

      
    </button>
    </React.Fragment>

  );
};

export default HeaderButton;