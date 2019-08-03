const express = require("express");
const app = express();
 
app.use("/home/foo/bar",function (request, response) {
  response.sendStatus(404);
  // response.status(404).send(`Ресурс не найден`);
});
 
app.listen(3000);
