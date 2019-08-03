// npm install nodemon -g // g - global позволяет установить зависимость
// nodemon глобально для всех проектов на данной локальной машине

// nodemon app.js // если вдруг после запуска сервера мы изменим его код,
// например, поменяем переменную message с "Hello World!" на "Привет мир!",
// то сервер автоматически будет перезапущен

const http = require("http");

let message = "Hello there!";
http.createServer(function(request, response) {
  console.log(message);
  response.end(message);
}).listen(3000, "127.0.0.1", () => {
  console.log("Сервер начал прослушивание запросов");
});
