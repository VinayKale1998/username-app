import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContent = createAsyncThunk(
  "fetchMeasurements",
  async (id) => {
    try {
      const res = await axios.get(`https://api.openaq.org/v2/latest/${id}`);
      const data = await res.data;
      return data;
    } catch (err) {
      return err.message;
    }
  }
);
const measurements = createSlice({
  name: "measurements",
  initialState: {
    isLoading: false,
    error: null,
    content: [],
  },
  reducers: {
    addMeasurement(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchContent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.content.push(action.payload);

        console.log(state.content[0]);
      }),
      builder.addCase(fetchContent.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const store = configureStore({
  reducer: { measurements: measurements.reducer },
});
