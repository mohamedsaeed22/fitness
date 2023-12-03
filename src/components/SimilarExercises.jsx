import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises ,isLoading}) => {
  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "100px", xs: "0" },
      }}
    >
      <Typography variant="h3" mb={5} ml={2}>
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        {!isLoading ? (
          <HorizontalScrollbar
            data={targetMuscleExercises}
            isBodyParts={false}
          />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5} ml={2}>
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction="row"
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        {!isLoading ? (
          <HorizontalScrollbar data={equipmentExercises} isBodyParts={false} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
