const express = require("express");

const app = express();

const port = 3000;

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

app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list");
});

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) res.status(404).send(`ID ${id} Not found`);
  else res.send({ movie: movie });
});

app
  .listen(port, () => {
    console.info(
      "\x1b[46m",
      `Server is listening on port ${port}.`,
      "\x1b[0m\n",
      "\x1b[33m",
      `URL : http://localhost:${port}
      : http://localhost:${port}/api/movies
      : http://localhost:${port}/api/movies/1`,
      "\x1b[0m\n"
    );
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
