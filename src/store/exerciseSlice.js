import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { exerciseInstance } from "../utils/axiosInstances";

const handleRequest = async (url, thunkAPI) => {
  try {
    const response = await exerciseInstance.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};

export const getExercises = createAsyncThunk(
  "exercise/getExercises",
  async (_, thunkAPI) => {
    return handleRequest("/exercises?limit=12", thunkAPI);
  }
);

export const getBodyParts = createAsyncThunk(
  "exercise/getBodyParts",
  async (_, thunkAPI) => {
    return handleRequest("/exercises/bodyPartList", thunkAPI);
  }
);

export const getExercisesByBodyPart = createAsyncThunk(
  "exercise/getExercisesByBodyPart",
  async (bodyPart, thunkAPI) => {
    return handleRequest(`/exercises/bodyPart/${bodyPart}?limit=12`, thunkAPI);
  }
);

export const getExerciseDetails = createAsyncThunk(
  "exercise/getExerciseDetails",
  async (_id, thunkAPI) => {
    return handleRequest(`/exercises/exercise/${_id}`, thunkAPI);
  }
);

export const getTargetMuscleExercises = createAsyncThunk(
  "exercise/getTargetMuscleExercises",
  async (_target, thunkAPI) => {
    return handleRequest(`/exercises/target/${_target}`, thunkAPI);
  }
);

export const getequipmentMuscleExercises = createAsyncThunk(
  "exercise/getequipmentMuscleExercises",
  async (_equipment, thunkAPI) => {
    return handleRequest(`/exercises/equipment/${_equipment}`, thunkAPI);
  }
);

const initialState = {
  exercises: [],
  exercise: {},
  muscleExercises: [],
  equipmentExercises: [],
  bodyParts: [],
  isLoading: false,
  error: null,
};
const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {},
  extraReducers: {
    // get all exercises
    [getExercises.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getExercises.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.meta.arg) {
        state.exercises = action.payload.filter(
          (exercise) =>
            exercise.name?.toLowerCase().includes(action.meta.arg) ||
            exercise.target?.toLowerCase().includes(action.meta.arg) ||
            exercise.equipment?.toLowerCase().includes(action.meta.arg) ||
            exercise.body?.toLowerCase().includes(action.meta.arg)
        );
      } else {
        state.exercises = action.payload;
      }
    },
    [getExercises.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // get all body parts
    [getBodyParts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBodyParts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bodyParts = ["All", ...action.payload];
    },
    [getBodyParts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // get exercises by body part
    [getExercisesByBodyPart.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getExercisesByBodyPart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.exercises = action.payload;
    },
    [getExercisesByBodyPart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // get exercise details
    [getExerciseDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getExerciseDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.exercise = action.payload;
    },
    [getExerciseDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // get muscle exercises
    [getTargetMuscleExercises.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getTargetMuscleExercises.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.muscleExercises = action.payload;
    },
    [getTargetMuscleExercises.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // get equipment exercises
    [getequipmentMuscleExercises.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getequipmentMuscleExercises.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.equipmentExercises = action.payload;
    },
    [getequipmentMuscleExercises.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default exerciseSlice.reducer;
