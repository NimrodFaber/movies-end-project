const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const cors = require("cors");
const port = 3001;
const noteRoute = require("./routes/notes");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);
app.use("/notes", noteRoute);
mongoose
  .connect("mongodb://0.0.0.0:27017/movies-project")
  .then(() => {
    app.listen(port, () => {
      console.info(`start server start listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
