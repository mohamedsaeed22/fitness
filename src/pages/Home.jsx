import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "./../components/SearchExercises";
import Exercises from "../components/Exercises";
import { useDispatch, useSelector } from "react-redux";
import {
  getBodyParts,
  getExercises,
  getExercisesByBodyPart,
} from "../store/exerciseSlice";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("All");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { exercises, bodyParts ,error } = useSelector((state) => state.exercises);
  useEffect(() => {
    dispatch(getBodyParts());
    dispatch(getExercises()); 
  }, [dispatch]);
  
  useEffect(() => {
    if (bodyPart !== "All") {
      dispatch(getExercisesByBodyPart(bodyPart));
    }
  }, [dispatch, bodyPart]);

  const handleSearch = () => {
    if (search) {
      dispatch(getExercises(search));
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch("");
    }
  };


  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        {...{
          search,
          setSearch,
          handleSearch,
          bodyPart,
          setBodyPart,
          bodyParts,
        }}
        />
        {error?.message}
      <Exercises exercises={exercises} />
    </Box>
  );
};

export default Home;
