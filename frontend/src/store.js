import { configureStore } from '@reduxjs/toolkit';

import userSlice from './features/user/userSlice';
import allEvents from './features/allEvents/allEventsSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    allEvents: allEvents,
  },
});
