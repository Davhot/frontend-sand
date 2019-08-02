// updateOne(), updateMany(), findByIdAndUpdate(), findOneAndUpdate

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb", {
  useNewUrlParser: true
});

const userScheme = new Schema({
  name: String,
  age: Number
}, {
  versionKey: false
});
const User = mongoose.model("User", userScheme);

User.updateOne({
  name: "Tom"
}, {
  name: "Tom Smith"
}, function(err, result) {
  mongoose.disconnect();
  if (err) return console.log(err);
  console.log(result);
});
