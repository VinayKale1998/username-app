import { createSlice,configureStore } from "@reduxjs/toolkit";



const deckSlice = createSlice({
  name: "deckSlice",
  initialState: [],
  reducers: {
    deckDetailsAdd(state,action) {
        console.log(action.payload)
     state.push(action.payload)
        
    },
    
  },
})

let count=1;
const termsSlice= createSlice({

    name:'terms',
    initialState:[ {
        id:`m${count}`,
        term:'',
        definition:'',
        image:'',
        group:''

    }],
    reducers:{
        
        addTerm(state)
        {
            ++count;
           state.push({
                id:`m${count}`,
                term:'',
                definition:'',
                image:''
        
            })
            
            



        },
        changeHandler(state,action)
        {
            if(action.payload.id)
            { const index= state.findIndex(item=> item.id==action.payload.id)  
            state[index]={
                id:state[index].id,
                term:action.payload.term,
                definition:action.payload.definition,
                image:action.payload.image
                
            }
            }
            else 
            return state;
       
            
        }
    }
})

const store =configureStore({reducer: {deck:deckSlice.reducer,terms:termsSlice.reducer}})

export default store;

export const deckActions = deckSlice.actions;
export const termActions= termsSlice.actions;
 
