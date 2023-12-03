import { Stack, Typography, Box, TextField } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { Button } from "@mui/material";

const SearchExercises = ({
  search,
  setSearch,
  handleSearch,
  bodyPart,
  setBodyPart,
  bodyParts,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box position="relative" mb="72px" textAlign="center">
          <TextField
            sx={{
              input: {
                fontWeight: "700",
                border: "none",
                borderRadius: "4px",
              },
              width: { lg: "800px", xs: "300px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            height="76px"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              display: { xs: "none", lg: "inline" },
              bgcolor: "#ff2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </form>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          isBodyParts={true}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
