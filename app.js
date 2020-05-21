var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));

//Routes
app.get("/", function (req, res) {
  res.render("formpage");
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.redirect("/choose");
});

app.get("/choose", function (req, res) {
  res.render("choose");
});

app.listen(3000, function () {
  console.log("Server has started");
});
