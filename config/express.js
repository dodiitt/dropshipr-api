const express = require("express");
const cors = require("cors");

const routes = require("../route");
const config = require("./config");

const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// Use middleware to set the default Content-Type
app.use(function(req, res, next) {
  res.header("Content-Type", "application/json");
  next();
});

app.get("/", (req, res) => res.send("Dropshipr API"));
app.use("/api", routes);

module.exports = app;
