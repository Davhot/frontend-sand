const fs = require("fs");

// асинхронное чтение
fs.readFile("hello.txt", "utf8",
  function(error, data) {
    console.log("Асинхронное чтение файла");
    if (error) throw error; // если возникла ошибка
    console.log(data); // выводим считанные данные
  });

// синхронное чтение
console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);

// синхронная запись
console.log("Синхронная запись файла.");
fs.writeFileSync("hello_write1.txt", "Привет ми ми ми!");
let data = fs.readFileSync("hello_write1.txt", "utf8");
console.log(data); // выводим считанные данные

// асинхронная запись
fs.writeFile("hello_write2.txt", "Hello мир!", function(error) {
  if (error) throw error; // если возникла ошибка
  console.log("Асинхронная запись файла завершена. Содержимое файла:");
  let data = fs.readFileSync("hello_write2.txt", "utf8");
  console.log(data); // выводим считанные данные
});

// синхронная дозапись
fs.appendFileSync("hello_append.txt", "Привет ми ми ми!");
// синхронная дозапись
fs.appendFile("hello_append.txt", "Привет МИД!", function(error) {
  if (error) throw error; // если возникла ошибка
  console.log("Запись файла завершена. Содержимое файла:");
  let data = fs.readFileSync("hello.txt", "utf8");
  console.log(data); // выводим считанные данные
});

// синхронное удаление
fs.writeFileSync("hello_remove1.txt", "Привет ми ми ми!");
fs.unlinkSync("hello_remove1.txt")

// аиснхронное удаление
fs.writeFileSync("hello_remove2.txt", "Привет ми ми ми!");
fs.unlink("hello_remove2.txt", (err) => {
  if (err) console.log(err); // если возникла ошибка
  else console.log("hello.txt was deleted");
});


// Stream
let writeableStream = fs.createWriteStream("hello_stream.txt");
writeableStream.write("Привет мир!");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");
let readableStream = fs.createReadStream("hello_stream.txt", "utf8");

readableStream.on("data", function(chunk) {
  console.log(chunk);
});


// pipe (например считать файл, сжать и записать архив)
const zlib = require("zlib");

readableStream = fs.createReadStream("hello.txt", "utf8");
writeableStream = fs.createWriteStream("hello.txt.gz");
let gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writeableStream);
