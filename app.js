const express = require("express");

const app = express();

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

// say hello

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

// get all movies

const getMovies = (req, res) => {
  res.status(200).json(movies);
};

app.get("/api/movies", getMovies);

// get one movie by the ID

const getMoviesById = (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) res.status(404).json({ message: `ID ${id} Not found` });
  else res.status(200).json(movie);
};

app.get("/api/movies/:id", getMoviesById);

module.exports = app;
