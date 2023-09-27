const fs = require("fs");

fs.readFile("./firstTen.csv", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
