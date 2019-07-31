const express = require("express");
const app = express();

app.use(function (request, response) {
  response.send("<h2>Hello</h2>");
  // Отправка объекта:
  // response.send({id:6, name: "Tom"});
  // Отправка массива:
  // response.send(["Tom", "Bob", "Sam"]);
  // Отправка объекта:
  // response.send(Buffer.from("Hello Express"));
});

app.listen(3000);
