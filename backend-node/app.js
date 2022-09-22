const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
mongoose
  .connect("mongodb://0.0.0.0:27017/movies-project")
  .then(() => {
    app.listen(port, () => {
      console.info(`start server start listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
