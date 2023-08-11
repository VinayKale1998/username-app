import { createSlice, configureStore } from "@reduxjs/toolkit";

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
  },
  reducers: {},
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    clicked: false,
    movies: "bg-white",
    value: localStorage.getItem("movie") ? localStorage.getItem("movie") : null,
  },
  reducers: {
    setValue(state, action) {
      {
        console.log("inside reducer false");
        state.clicked = true;

        localStorage.setItem("movie", action.payload.movie);
        state.value = action.payload.movie;
      }
    },
  },
});

const slotSlice = createSlice({
  name: "slots",
  initialState: {
    clicked: false,
    movies: "bg-white",
    value: localStorage.getItem("slot") ? localStorage.getItem("slot") : null,
  },
  reducers: {
    setValue(state, action) {
      {
        console.log("inside reducer false");
        state.clicked = true;

        localStorage.setItem("slot", action.payload.movie);
        state.value = action.payload.movie;
      }
    },
  },
});

const store = configureStore({
  reducer: { display: displaySlice.reducer, movies: movieSlice.reducer,slots:slotSlice.reducer },
});

export default store;

export const displayActions = displaySlice.actions;
export const movieActions = movieSlice.actions;

export const slotActions = slotSlice.actions;
