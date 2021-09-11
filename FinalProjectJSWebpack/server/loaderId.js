const express = require("express");
const fs = require("fs");
const handlerId = require("./handler").handlerId;
const routerId = express.Router();

//работает
routerId.get("/", (req, res) => {
  fs.readFile("./server./db/openPage.json", "utf-8", (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

routerId.put("/", (req, res) => {
  handlerId(req, res, "./server./db/openPage.json");
});
//app.put(); // UPDATE
module.exports = routerId;
