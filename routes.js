let express = require("express");
// var fs = require("fs");
let router = express.Router();

// let data = fs.readFile("./data.json");

router.get("/", function(req, res) {
    res.send("Hello world!")
})



module.exports = router;

