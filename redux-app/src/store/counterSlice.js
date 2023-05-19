
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

export const counterActions = counterSlice.actions;


export default counterSlice.reducer;
