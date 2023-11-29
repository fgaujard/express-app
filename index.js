const app = require("./app");

const port = 3000;

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
