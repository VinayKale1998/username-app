import { createSlice, configureStore } from "@reduxjs/toolkit";


/// redux slice for displaying movies,slots and seat placeholders-----------------------------------------------------------//
const displaySlice = createSlice({
  name: "displaySlice",
  initialState: {
    movies: [
      "Suraj par mangal bhari",
      "Tenet",
      "The war with grandpa",
      "The personal history of David Copperfield",
      "Come Play",
    ],
    slots: ["10:00 AM", "01:00 PM", "03:00 PM", "08:00 PM"],
    seats: ["A1", "A2", "A3", "A4", "D1", "D2"],
    update:0
  },
  reducers: {},
});


//redux slice for movie actions-----------------------------------------------------------//

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    // clicked: false,

    value: localStorage.getItem("movie") ? localStorage.getItem("movie") : null,
  },
  reducers: {
    setValue(state, action) {
      {
        console.log("inside reducer false");
        // state.clicked = true;
        if (action.payload.movie == state.value) {
          localStorage.setItem("movie", "");
          state.value=null;
        } else {
          localStorage.setItem("movie", action.payload.movie);
          state.value = action.payload.movie;
        }
      }
    },
      clearValue(state)
      {
        state.value=null

      }
  },
});

//redux slice for movie actions-----------------------------------------------------------//

const slotSlice = createSlice({
  name: "slots",
  initialState: {
    clicked: false,
   
    value: localStorage.getItem("slot") ? localStorage.getItem("slot") : null,
  },
  reducers: {
    setValue(state, action) {
      {
        console.log("inside reducer false");
        // state.clicked = true;
        if (action.payload.slot == state.value) {
          localStorage.setItem("slot", "");
          state.value=null;
        } else {
          localStorage.setItem("slot", action.payload.slot);
          state.value = action.payload.slot;
        }
      }
    },
    clearValue(state)
    {
      state.value=null

    }
  },
});


//redux slice for seat actions-----------------------------------------------------------//
const seatSlice = createSlice({
  name: "seats",
  initialState: {
    types: ["A1", "A2", "A3", "A4", "D1", "D2"],
    value: localStorage.getItem("seats")
      ? JSON.parse(localStorage.getItem("seats"))
      : {"A1": 0, "A2": 0, "A3": 0, "A4": 0, "D1": 0, "D2": 0 },
  },
  reducers:{
    setValue(state,action)
    {
      const seat = action.payload.id.slice(1,3)

      state.value[seat]= action.payload.value;
      localStorage.setItem("seats",JSON.stringify(state.value))
    },
    clearValue(state)
    {
      state.value= {"A1": 0, "A2": 0, "A3": 0, "A4": 0, "D1": 0, "D2": 0 }

    }

  }
});

const store = configureStore({
  reducer: {
    display: displaySlice.reducer,
    movies: movieSlice.reducer,
    seats:seatSlice.reducer,
    slots: slotSlice.reducer,
    
  },
  devTools:false
});


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
export default store;
export const displayActions = displaySlice.actions;
export const movieActions = movieSlice.actions;
export const seatActions = seatSlice.actions;
export const slotActions = slotSlice.actions;
