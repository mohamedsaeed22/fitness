import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { youtubeInstance } from "../utils/axiosInstances";

const handleRequest = async (url, thunkAPI) => {
  try {
    const response = await youtubeInstance.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};

export const getVideosExercise = createAsyncThunk(
  "videos/getVideosExercise",
  async (_search, thunkAPI) => {
    return handleRequest(`/search?query=${_search}`, thunkAPI);
  }
);

const initialState = {
  videosExercise: [],
  isLoading: false,
  error: null,
};
const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: {
    // get all exercises
    [getVideosExercise.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getVideosExercise.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.videosExercise = action.payload.contents.slice(0,3);
    },
    [getVideosExercise.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default videoSlice.reducer;
