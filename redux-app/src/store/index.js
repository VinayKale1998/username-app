import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice= createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state,action) {

        console.log("inside")
        
     state.counter+=action.payload
    },

    toggle(state,action) {
        state.toggle= !state.toggle
    },
  },
});


const authSlice = createSlice({
    name:"auth",
    initialState:{isLogin:+localStorage.getItem("loggedIn")},
    reducers:{
        login(state){
          
          state.isLogin=1;
          localStorage.setItem("loggedIn","1")
           
        },
        logout(state)
        {
            state.isLogin=0;
            localStorage.setItem("loggedIn","0")
        }
    }
})

const store = configureStore({
  reducer: {counter:counterSlice.reducer, auth:authSlice.reducer}

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

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
