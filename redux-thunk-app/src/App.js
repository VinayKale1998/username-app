import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cartActions } from "./Store/cartSlice";
import Notification from "./components/UI/Notification";
import { sendCartData,fetchCartData } from "./Store/cartActions";

import React from "react";

let initial = true;
let initialCounter = 0;
let notInitial = false;
function App() {
  console.log("app called");

  const show = useSelector((state) => state.cart.show);
  const notification = useSelector((state) => state.cart.notification);
  console.log(notification);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => {
    return state.cart.cartItems;
  });

  useEffect(() => {
   
    if (initial) {
      console.log('inside initial')
      dispatch(fetchCartData())
      initial = false;
      return;
    } 
    //code will break here for the first time as we are changing the dependencies here via dispatch and the useeffect will run again, check the return function 
    else if(notInitial)  {
      dispatch(sendCartData(cartItems));
    }
  return ()=>{
    ++initialCounter;
    if (initialCounter>=1)
    {
      notInitial = true;
    }
  }
  
  }, [cartItems,dispatch]);


  useEffect(()=>{
    let timer;
    if ( notification!=null )
    { 
      console.log(notification)
      let time = notification.status=='Success'?1000:3000;
     timer = setTimeout(() => {dispatch(
      cartActions.showNotification(null)
    ); }, time);
  
  }
   
  return ()=>{
    clearTimeout(timer);
  }



  },[notification])

  return (
    <React.Fragment>
      {console.log("inside app return ")}
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {show && <Cart />}

        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
