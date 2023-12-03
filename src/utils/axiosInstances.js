import axios from "axios";

export const exerciseInstance = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});

export const youtubeInstance = axios.create({
  baseURL: "https://youtube-search-and-download.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});
