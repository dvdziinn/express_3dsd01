const express = require("express");
const app = express();

const PORT = 3333;

app.get("/", function (req, res) {
  res.send("joy soi un atacante");
});

app.listen(PORT, () => {
  console.log("running... " + PORT);
});
