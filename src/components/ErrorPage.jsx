import { Box, Button } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "40px" }}>
      <Typography variant="h3">ErrorPage</Typography>
      <Box mt={5}>
        <Link to={"/"}>
          <Button variant="outlined" mt={3}>
            Go Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ErrorPage;
