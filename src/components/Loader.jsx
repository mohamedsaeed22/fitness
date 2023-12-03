import React from "react";
import { Stack } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <CircularProgress color="secondary" />

    </Stack>
  );
};

export default Loader;
