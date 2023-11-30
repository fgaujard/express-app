const app = require("./src/app");
require("dotenv").config();

const port = 3000;

app
  .listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
