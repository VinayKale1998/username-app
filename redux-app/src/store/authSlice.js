import { createSlice, configureStore } from "@reduxjs/toolkit";


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

export const authActions = authSlice.actions
export default authSlice.reducer;

