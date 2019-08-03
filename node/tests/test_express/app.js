// npm install supertest --save-dev

const express = require("express");
var app = express();
app.get("/", function(request, response) {
  response.send("Hello Test");
});
app.get("/error", function(request, response) {
  response.status(404).send("NotFound");
});
app.get("/user", function(request, response) {
  response.send({
    name: "Tom",
    age: 22
  });
});
app.listen(3000);

// чтобы задействовать данное приложение в тесте, оно оформляется в виде модуля
module.exports.app = app;
