// npm install express --save
// npm install jasmine-node --save-dev
// npm uninstall express
// npm uninstall express --save // - чтобы удалить информацию из package.json

// получаем модуль Express
const express = require("express");
// создаем приложение
const app = express();

// устанавливаем обработчик для маршрута "/"
app.get("/", function(request, response) {
  response.end("Hello from Express!");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);
