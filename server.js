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

server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => res.render("hotel", homePage));

server.get("/hotel/:id", (req, res) =>
  res.render("hotel" + req.params.id, homePage)
);
server.post("/hotel/:id", (req, res) => {
  let answers = req.body;
  answers.hotelId = req.params.id;
  console.log(answers);
  res.send("Thank you for your review");
});

module.exports = server;
