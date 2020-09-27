const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");

// const cors = require("cors");

const path = require("path");
const { ppid } = require("process");

var app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("backend server check");
});

app.listen(port, () => {
  console.log("Server started at port:" + port);
});
// mongoose.connect("mongodb://localhost:27017/Crude", (err) => {
//   if (!err) console.log("MongoDB connection succeeded.");
//   else
//     console.log(
//       "Error in DB connection : " + JSON.stringify(err, undefined, 2)
//     );
// });

// module.exports = mongoose;
