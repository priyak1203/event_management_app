import customFetch from '@/utils/axios';

export const getAllEventsThunk = async (_, thunkAPI) => {
  let url = `/event`;

  try {
    const response = await customFetch.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
