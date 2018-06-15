const { helloWorld } = require("../src/index.js");

test("my first test", () => {
  const string = "Constructor Labs";
  const result = helloWorld(string);
  expect(result).toBe("Welcome to the Constructor Labs boilerplate");
});
