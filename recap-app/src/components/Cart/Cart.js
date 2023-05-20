import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const Cart = (props) => {
  const show = useSelector((state) => state.cart.show);
  const cartItems= useSelector((state)=>state.cart.cartItems)
  const cartTotal= useSelector((state=>state.cart.cartTotal))
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {<Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
    {cartItems.length===0 &&<h1 className={classes.total}>No items added yet</h1>}
           { cartItems.map(item=><CartItem item ={item} key={item.id}
             
             />)} 
          </ul>
          <div className={classes.total}><span><h1>Cart Total</h1> </span><span><h1>${cartItems.reduce((initial,item)=>initial+item.price*item.qty,0)}.00</h1></span></div>
        </Card>
      }
    </React.Fragment>
  );
};

export default Cart;
