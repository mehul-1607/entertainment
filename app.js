var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
app.set("view engine", "ejs");

const puppeteer = require("puppeteer");

async function asyncCall() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.netflix.com/in/Login");
  await page.type("#id_userLoginId", "phhd@jsi.disj");
  await page.type("#id_password", "0000");

  await Promise.all([
    page.waitForNavigation(),
    page.click("button .btn login-button btn-submit btn-small"),
  ]);
  //await page.screenshot({ path: "example.png" });

  //await browser.close();
}

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));

var emailid = "";

//Routes
app.get("/", function (req, res) {
  res.render("formpage");
});

/*app.get("https://www.google.com/", function (req, res) {
  var searchbar = this.document.getElementsByClassName("gLFyf gsfi");
  searchbar.value = emailid;
  res.redirect("https://www.google.com/");
});*/

app.post("/", function (req, res) {
  emailid = req.body.email;
  asyncCall();
  res.redirect("https://www.netflix.com/in");
});

app.get("/choose", function (req, res) {
  res.render("choose");
});

app.listen(3000, function () {
  console.log("Server has started");
});
