import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "./../components/ExerciseVideos";
import SimilarExercises from "./../components/SimilarExercises";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getExerciseDetails,
  getTargetMuscleExercises,
  getequipmentMuscleExercises,
} from "../store/exerciseSlice";
import { getVideosExercise } from "../store/videoSlice";
const ExerciseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { exercise, muscleExercises, equipmentExercises ,isLoading} = useSelector(
    (state) => state.exercises
  );
  const { videosExercise , isLoading:isLoadingVideos} = useSelector((state) => state.videos);
  useEffect(() => {
    if (exercise?.name) {
      dispatch(getVideosExercise(exercise.name));
      dispatch(getTargetMuscleExercises(exercise.target));
      dispatch(getequipmentMuscleExercises(exercise.equipment));
    }
  }, [dispatch, exercise]);

  useEffect(() => {
    dispatch(getExerciseDetails(id));
  }, [dispatch, id]);

  return (
    <Box>
      <Detail exerciseDetail={exercise} />
      <ExerciseVideos exerciseVideos={videosExercise} name={exercise.name} isLoadingVideos={isLoadingVideos}/>
      <SimilarExercises
        targetMuscleExercises={muscleExercises}
        equipmentExercises={equipmentExercises}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default ExerciseDetail;
