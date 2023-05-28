import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deckName: "",
  description: "",
  image: "",
  terms: [],
};

const deckSlice = createSlice({
  name: "deckSlice",
  initalState: "",
  reducers: {
    deckDetailsAdd(state,action) {
        
        let newState={
            deckName:action.deckName,
            description:action.description,
            image:action.image,
            terms:state.terms
        }

    },
  },
})

export default deckSlice.reducer;

export const deckActions = deckSlice.actions;
;
