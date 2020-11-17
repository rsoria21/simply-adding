//
const express = require("express");
const bodyParser = require("body-parser");

// body-parser woks with express
const app = express();
// this allows the body-parser to work
app.use(bodyParser.urlencoded({ extended: true }));

// this fixes the error but cant load page : express deprecated res.sendfile: Use res.sendFile instead
// app.get("/", function (req, res) {
//   //get,put,post,delete
//   res.sendFile(__dirname + "/client/views/index.html");
// });

app.get("/", function (req, res) {
  res.sendfile(__dirname + "/index.html");
});

// call back, send back
app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
