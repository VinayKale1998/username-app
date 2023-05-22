import { useEffect } from "react";
import {cartActions} from "./cartSlice"

export const sendCartData=(cartItems)=>{
    return (dispatch)=>{
      dispatch(
        cartActions.showNotification({
          title: "Sending",
          status: "pending",
          message: "sending cart data",
        })
      );
    
      const  sendData=async()=>{
        const response = await fetch(
          "https://redux-app-68661-default-rtdb.firebaseio.com/cartItems.json",
          {
            method: "PUT",
            body: JSON.stringify(cartItems),
          }
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        else {
           
          dispatch(
            cartActions.showNotification({
              title: "Items done",
              status: "Success",
              message: "Items Successfully added into the cunt",
            })
          );

         
       
          
        
        }
      }
    
     
        sendData().catch(error=>{
          dispatch(
            cartActions.showNotification({
              title: "Error",
              status: "Error",
              message: "Sending data failed",
            })
          );
    
        })
      
    
    }
    }


export const fetchCartData=()=>{
 return (dispatch)=>{

    const getData =async ()=>{

        const response = await fetch("https://redux-app-68661-default-rtdb.firebaseio.com/cartItems.json")

        if (!response.ok)
        {
            throw new Error("something went wrong ")
        }

        const data = await response.json();
        const cartItems = data?data:[]
        console.log(cartItems )
        console.log('from the API')
        dispatch(cartActions.transformCart(cartItems))

    }

    getData().catch(error=>
        {
            dispatch(
                cartActions.showNotification({
                  title: "Error",
                  status: "Error",
                  message: "data fetch failed",
                })
              );
        })


 }
}
