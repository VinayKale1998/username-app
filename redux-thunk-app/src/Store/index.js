
import {configureStore} from "@reduxjs/toolkit"


import itemReducer from "./itemSlice"
import cartReducer from "./cartSlice"


const store = configureStore({
    reducer:{cart:cartReducer, item:itemReducer}
})

export default store;