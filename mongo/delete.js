// deleteMany(): удаляет все документы, которые соответствуют определенному критерию
// deleteOne(): удаляет один документ, который соответствует определенному критерию
// findOneAndDelete(): получает и удаляет один документ, который соответствует определенному критерию
// drop(): удаляет всю коллекцию

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, {
  useNewUrlParser: true
});

mongoClient.connect(function(err, client) {
  if (err) return console.log(err);

  const db = client.db("usersdb");
  db.collection("users").deleteMany({
    name: "Tom"
  }, function(err, result) {
    console.log(result);
    client.close();
  });

  db.collection("users").findOneAndDelete({
    age: 21
  }, function(err, result) {
    console.log(result);
    client.close();
  });
});
