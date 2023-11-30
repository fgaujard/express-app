const express = require("express");

const app = express();
app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

// Création des routes users

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);

// Route pour poster un film

app.post("/api/movies", movieControllers.postMovie);

// Route pour poster un user

app.post("/api/users", userControllers.postUser);

module.exports = app;
