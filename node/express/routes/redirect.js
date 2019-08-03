const express = require("express");
const app = express();

app.use("/home",function (request, response) {
  response.redirect("about")
});
app.use("/about", function (request, response) {
  response.send("<h1>About</h1>");
});

// на http://localhost:3000/home/foo/about
// app.use("/home/foo/bar",function (request, response) {
//   response.redirect("./about")
// });

// на http://localhost:3000/home/about
// app.use("/home/foo/bar",function (request, response) {
//   response.redirect("../about")
// });

app.listen(3000);
