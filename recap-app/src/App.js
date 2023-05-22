import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cartActions } from "./Store/cartSlice";
import Notification from "./components/UI/Notification";

import React from "react";

let counter = 0;
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
    counter++;
    const sendCartData = async () => {
      console.log("first action sent");
      dispatch(
        cartActions.showNotification({
          title: "Sending",
          status: "pending",
          message: "sending cart data",
        })
      );
      const response = await fetch(
        "https://redux-app-68661-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItems),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      } else {
        console.log("second action sent");
        console.log(notification);
        dispatch(
          cartActions.showNotification({
            title: "Items Added",
            status: "Success",
            message: "Items Successfully added into the cart",
          })
        );
        console.log("third action sent");
        console.log(notification);
        dispatch(
          cartActions.showNotification({
            title: "Items Added",
            status: "Success",
            message: "Items Successfully added into the cart",
          })
        );
        console.log("fourth action sent");
        console.log(notification);
        dispatch(
          cartActions.showNotification({
            title: "Items done",
            status: "Success",
            message: "Items Successfully added into the cunt",
          })
        );
        setTimeout(() => {
          console.log("notification from timeout")
          console.log(notification)
          dispatch(
            cartActions.showNotification(null)
          );
        }, 1000);
      }
    };

    if (counter != 1) {
      console.log("use effected called");
      console.log("inside send");
      sendCartData().catch((error) => {
        dispatch(
          cartActions.showNotification({
            title: "Error",
            status: "Error",
            message: "Sending data failed",
          })
        );

      });
    }
  }, [cartItems, dispatch]);

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
