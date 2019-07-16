const Emitter = require("events");

let emitter = new Emitter();
let eventName = "greet";
emitter.on(eventName, function() {
  console.log("Hello all!");
});

emitter.on(eventName, function() {
  console.log("Привет!");
});

emitter.emit(eventName);


// передача параметров событию
emitter = new Emitter();
emitter.on(eventName, function(data) {
  console.log(data);
});

emitter.emit(eventName, "Привет пир!");


// наследование от emitter
let EventEmitter = require("events");
class User extends EventEmitter {
  sayHi(data) {
    this.emit(eventName, data);
  }
}

let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, function(data) {
  console.log(data);
});

user.sayHi("Мне нужна твоя одежда...");
