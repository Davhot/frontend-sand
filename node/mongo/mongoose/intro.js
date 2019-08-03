// npm install mongoose --save
// https://mongoosejs.com

// типы:
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// Objectid
// Array
// Decimal128
// Map

// Валидация:
// required: требует обязательного наличия значения для свойства
// min и max: задают минимальное и максимальное значения для числовых данных
// minlength и maxlength: задают минимальную и максимальную длину для строк
// enum: строка должна представлять одно из значений в указанном массиве строк
// match: строка должна соответствовать регулярному выражению

// По умолчанию при сохранении данных Mongoose добавляет специальное поле __v,
// которое указывает на версию документа
// Можно отключить:
// const userScheme = new Schema({
//   name: String,
//   age: Number
// }, {
//   versionKey: false // отключение
// });

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const userScheme = new Schema({
  name: {
    type: String,
    default: "NoName", // значение по умолчанию
    required: true, // валидация
    minlength: 3, // валидация
    maxlength: 20 // валидация
  },
  age: Number
});

// подключение
mongoose.connect("mongodb://localhost:27017/usersdb", {
  useNewUrlParser: true
});

const User = mongoose.model("User", userScheme);
const user = new User({
  name: "Bill",
  age: 41
});

user.save(function(err) {
  mongoose.disconnect(); // отключение от базы данных

  if (err) return console.log(err);
  console.log("Сохранен объект", user);
});
