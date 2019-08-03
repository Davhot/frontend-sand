const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

// Можно так, тогда путь до файла http://localhost:3000/static/about.html
// app.use("/static", express.static(__dirname + "/public"));

app.use("/", function(request, response) {
  response.send("<h1>Главная страница</h1>");
});
app.listen(3000);
