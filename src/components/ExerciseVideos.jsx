import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name, isLoadingVideos }) => {
  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography variant="h4" mb="33px">
        Watch
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {" "}
          {name}{" "}
        </span>
        exercise videos
      </Typography>
      <Stack
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { sm: "row" },
          gap: { sm: "90px", xs: "20px" },
        }}
      >
        {isLoadingVideos ? (
          <Loader />
        ) : (
          exerciseVideos?.map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video?.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.video?.thumbnails[0].url}
                alt={item.video?.title}
              />
              <Box>
                <Typography variant="h5" color="#ccc">
                  {item.video?.title.slice(0, 40)}...
                </Typography>
                <Typography variant="h6" color="#333">
                  {item.video?.channelName}
                </Typography>
              </Box>
            </a>
          ))
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
