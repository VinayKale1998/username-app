

import {createSlice, configureStore,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchContent = createAsyncThunk(
    'fetchMeasurements',
    async(id)=>{
        try{
            const res = await axios.get(`https://api.openaq.org/v2/latest/${id}`);
            const data = await res.json();
            return data;
        }
        catch(err){
            return err;
        }
       

    }
)
const measurements = createSlice({

    name:"measurements",
    intialState:{
        isLoading:false,
        error:null,
        content:[]

    },
    reducers:{

        addMeasurement(state,action)

        {
            state.push(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchContent.pending,(state)=>{
            state.isLoading=true;
        }),
        builder.addCase(fetchContent.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.contents.push(action.payload);

        }),
        builder.addCase(fetchContent.rejected,(state,action)=>{

            state.error= action.error.message;

        })
    }
})



const store = configureStore({reducer:{measurements:measurements.reducer}});

