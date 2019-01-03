const express = require("express");
const routes = require("../route");
const config = require("./config");

const app = express();

app.get("/", (req, res) => res.send("Dropshipr API"));

app.use("/api", routes);

module.exports = app;
