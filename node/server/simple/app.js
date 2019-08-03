const http = require("http");

http.createServer(function(request, response) {
  response.setHeader("Content-Type", "text/html; charset=utf-8;");

  // Простейшая маршрутизация
  if (request.url === "/home" || request.url === "/") {
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello Node.js</title>");
    response.write("<meta charset=\"utf-8\" />");
    response.write("</head>");
    var str = "<body>" +
              "<h2>Привет мир</h2>" +
              "<h2>Home</h2>" +
              "<a href='/about'>about</a><br/>" +
              "<a href='/contact'>contact</a><br/>" +
              "<a href='/redirect_page'>page for redirect</a><br/>" +
              "</body>"
    response.write(str);
    response.write("</html>");
  } else if (request.url == "/about") {
    response.write("<h2>About</h2>");
    response.write("<a href='/'>home</a><br/>");
    response.write("<a href='/contact'>contact</a><br/>");
    response.write("<a href='/redirect_page'>page for redirect</a><br/>");
  } else if (request.url == "/contact") {
    response.write("<h2>Contacts</h2>");
    response.write("<a href='/'>home</a><br/>");
    response.write("<a href='/about'>about</a><br/>");
    response.write("<a href='/redirect_page'>page for redirect</a><br/>");
  } else if (request.url == "/redirect_page") {
    response.statusCode = 302; // временная переадресация
    response.setHeader("Location", "/newpage");
  } else if (request.url == "/newpage") {
    response.write("<h2>Some Page</h2>");
    response.write("<a href='/'>home</a><br/>");
    response.write("<a href='/about'>about</a><br/>");
    response.write("<a href='/contact'>contact</a><br/>");
    response.write("<a href='/redirect_page'>page for redirect</a><br/>");
  } else {
    response.write("<a href='/'>home</a>");
    response.write("<h2>Not found</h2>");
  }
  response.end();
}).listen(3000);
