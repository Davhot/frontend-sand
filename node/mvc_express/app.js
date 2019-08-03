// npm install express --save
// npm install --save body-parser hbs
// npm install mongoose --save

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/user_router.js");
const homeRouter = require("./routes/home_router.js");

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use("/users", userRouter);;
app.use("/", homeRouter);

app.use(function(req, res, next) {
  res.status(404).send("Not Found")
});

mongoose.connect("mongodb://localhost:27017/usersdb", {
  useNewUrlParser: true
}, function(err) {
  if (err) return console.log(err);
  app.listen(3000, function() {
    console.log("Сервер ожидает подключения...");
  });
});
