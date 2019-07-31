const express = require("express");

const app = express();
app.get("/", function(request, response) {
  response.send("<h1>Главная страница</h1>");
});

// http://localhost:3000/1?id=3&name=Tome
app.use("/1", function(request, response) {
  let id = request.query.id;
  let userName = request.query.name;
  response.send("<h1>Информация</h1><p>id=" + id + "</p><p>name=" + userName + "</p>");
});

// Массив http://localhost:3000/2?name=Tome&name=Bob
app.use("/2", function(request, response) {
  console.log(request.query);
  let names = request.query.name;
  let responseText = "<ul>";
  for (let i = 0; i < names.length; i++) {
    responseText += "<li>" + names[i] + "</li>";
  }
  responseText += "</ul>";
  response.send(responseText);
});

// объект http://localhost:3000/3?user[id]=7&user[name]=Tom
app.use("/3", function(request, response) {
  console.log(request.query);
  let id = request.query.user.id;
  let name = request.query.user.name;
  response.send("<h3>id:" + id + "<br>name: " + name + "</h3>");
});

app.listen(3000);
