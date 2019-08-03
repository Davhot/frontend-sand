const http = require("http");
const os = require("os");
const greeting = require("./greeting");
const User = require("./user.js");

// Несмотря на то, что нет такого файла как welcome.js,
// но если в проекте есть каталог, который содержит файл с
// именем index.js, то мы можем обращаться к модулю по
// имени каталога, как в данном случае.
const welcome = require("./welcome");

const greeting2 = require("./greeting2");

global.name = 'david2'

http.createServer(function(request, response) {

  response.end("Hello NodeJS!");
  let userName = os.userInfo().username;
  console.log(userName);
  console.log(`Дата запроса: ${greeting.date}`);
  console.log(greeting.getMessage(userName));

  let david = new User("David", 22);
  david.sayHi();

  welcome.getMorningMessage();
  welcome.getEveningMessage();

  global.console.log(date);
  console.log(greeting2.getMessage());

}).listen(3000, "127.0.0.1", function() {
  console.log("Сервер начал прослушивание запросов на порту 3000");
});
