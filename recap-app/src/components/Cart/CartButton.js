import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import Dummy from "../Layout/Dummy";
import { useEffect, useState } from "react";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCounter = cartItems.reduce((init, item) => init + item.qty, 0);
  const [bump, setBump] = useState(false);

  const toggleHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  useEffect(() => {
    if (cartItems.length=== 0) {
      return;
    } else {
      setBump(true);
      let timeout = setTimeout(() => {
        setBump(false);
      }, 300);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [cartCounter]);

  return (
    <button
      className={`${classes.button} ${bump?classes.bump:""}`}
      onClick={toggleHandler}
    >
      <Dummy></Dummy>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCounter}</span>
    </button>
  );
};

export default CartButton;
