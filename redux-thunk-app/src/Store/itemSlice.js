
import {createSlice} from "@reduxjs/toolkit"


const itemSlice = createSlice({

    name:"items",
    initialState:[],
    reducers:{


    }
})

export default   itemSlice.reducer;
export const itemActions = itemSlice.actions;