var assert = require("assert");
var operations = require("./operations");

it("should multiply two numbers", function() {
  var expectedResult = 15;
  var result = operations.multiply(3, 5);
  assert.equal(result, expectedResult);
});
it("should add two numbers", function() {
  var expectedResult = 16;
  var result = operations.add(9, 7);
  assert.equal(result, expectedResult);
});

// Тестирование асинхронной функции
it("shoud async multiply two numbers", function(done) {
  var expectedResult = 12;
  operations.multiplyAsync(4, 3, function(result) {
    assert.equal(result, expectedResult);
    done();
  });
});
