const express = require("express");
const app = express();
const morgan = require("morgan");
const host = "127.0.0.1";
const port = 3000;
const bodyParser = require("body-parser");
const { Liquid } = require("liquidjs");
const engine = new Liquid({
  root: [".", "./views/layouts"], // where the engine will look for .liquid files
  extname: ".liquid", //now we don't have to write .liquid on every while
});
app.engine("liquid", engine.express());
app.use(bodyParser.urlencoded({ extended: true })); //to handle form parsing
app.set("views", "./views");//set the directory where app will look for html/view
app.set("view engine", "liquid");//set the view engine

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Eventlite</h1>`);
});

app.get("/login", (req, res) => {
  res.send(`<h1>Login</h1>`);
});

app.get("/users/account", (req, res) => {
  res.send(`<h1>Account settings </h1>`);
});

app.get("/events/all", (req, res) => {
  res.send(`<h1>All Events<h/1>`);
});

app.get("/events/create", (req, res) => {
  res.send(`<h1>Create a new event</h1>`);
});

app.listen(port, () => {
  console.log("Running on", port);
});
