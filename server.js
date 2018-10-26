const express = require("express");
const hbs = require("express-handlebars");
const routes = require("./routes");
const FS = require("fs");
const server = express();
const data = require("./data.json");
const answersFile = require("./answers.json");
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
  const answers = req.body;
  answers.hotelId = req.params.id;
  console.log(answers);
  res.send("Thank you for your review");
  updateAnswers(answers);
});
function updateAnswers(answersFile) {
  FS.writeFile(
    "./answers.json",
    JSON.stringify(answersFile, null, "\t"),
    err => {
      if (err) {
        console.log("error call", err);
      }
    }
  );
  return;
}

module.exports = server;
