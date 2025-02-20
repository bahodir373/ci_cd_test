const express = require("express");
const app = express();
const port = 3000;

app.use(require('cors')())

app.get("/", (req, res) => {
  res.send("Hello, World! Testing github action");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});