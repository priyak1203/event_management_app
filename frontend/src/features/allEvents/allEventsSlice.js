import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllEventsThunk } from './allEventsThunk';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  allEvents: [],
  totalEvents: 0,
};

export const getAllEvents = createAsyncThunk(
  'allEvents/getAllEvents',
  getAllEventsThunk
);

const allEventsSlice = createSlice({
  name: 'allEvents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEvents.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { events, count } = payload;
        state.allEvents = events;
        state.totalEvents = count;
      })
      .addCase(getAllEvents.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default allEventsSlice.reducer;
