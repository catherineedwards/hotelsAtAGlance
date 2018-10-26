const express = require("express");
const hbs = require("express-handlebars");
const routes = require("./routes");

const server = express();
const data = require("./data.json");

server.engine(
  "hbs",
  hbs({
    defaultLayout: "main",
    extname: "hbs"
  })
);
server.set("view engine", "hbs");
const homePage = {
  name: "hotels at a glance",
  list: ""
};



server.get("/", (req, res) => res.render("hotel", homePage));

server.get("/hotel1", (req, res) => res.render("hotel1", homePage));
server.post('/hotel1', (req, res) => {
res.send('Thank you for your review')});

server.get("/hotel2", (req, res) => res.render("hotel1", homePage));
server.post('/hotel2', (req, res) => {
res.send('Thank you for your review')});

server.get("/hotel3", (req, res) => res.render("hotel1", homePage));
server.post('/hotel3', (req, res) => {
res.send('Thank you for your review')});

module.exports = server

