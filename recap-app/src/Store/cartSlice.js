import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [
     
    ],
    show: false,
  },
  reducers: {
    
    transformCart(state,action)
    {
      state.cartItems=[...action.payload]
    },


    addItem(state, action) {
      const index= state.cartItems.findIndex(item=>item.id===action.payload.id)
      if(index!=-1)
      {
        state.cartItems[index].qty++
      }
      else{ state.cartItems.push(action.payload)}
     
     
    },
    removeItem(state, action) {
      
      const index = state.cartItems.findIndex((item)=>{return item.id===action.payload });
      const item =  state.cartItems[index];
      
      if(item.qty===1)
      {
        state.cartItems = state.cartItems.filter(
          (item) => item.id != action.payload
        );

      }
      else{
        item.qty-=1
        state.cartItems[index]=item
      }
     
     
    },

    addByone(state,action) {
    
      const index = state.cartItems.findIndex((item)=>{return item.id===action.payload });
      console.log(index)
      state.cartItems[index].qty+= 1
    },

    toggleCart(state) {
      console.log("toggled");
      state.show = !state.show;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
