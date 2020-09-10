const fs = require("fs");
const name = "Adrian";

fs.writeFile("first.txt", name, (error) => {
  error ? console.log("there is an error") : console.log("no error");
});
