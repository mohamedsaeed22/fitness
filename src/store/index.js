import { configureStore } from "@reduxjs/toolkit";
import exercises from "./exerciseSlice";
import videos from "./videoSlice";

export default configureStore({
  reducer: {
    exercises,
    videos,
  },
});
