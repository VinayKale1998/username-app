import { createSlice, configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice"
import authReducer from "./authSlice"




const store = configureStore({
  reducer: {counter:counterReducer ,auth:authReducer}

  /*if we had multiple state slices 
    reducer:{ key1:reducer1, key2:reducer}*/
});

// const reducer=(state= defaultState,action)=>{

//     if(action.type==="ADD")
//     {
//         console.log(action.amount)
//         return {

//             counter: state.counter+action.amount,
//             showCounter:state.showCounter
//         }
//     }

//     if(action.type==="SUBTRACT")
//     {
//         return {
//             counter:state.counter-action.amount,
//             showCounter:state.showCounter
//         }
//     }

//     if(action.type==="TOGGLE")
//     {
//         return {
//             counter:state.counter,
//             showCounter:!state.showCounter
//         }
//     }
//     return state;

// }



export default store;
