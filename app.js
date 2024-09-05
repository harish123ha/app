const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("working well harish kumar upadhyay");
});

app.listen(port, () => {
  console.log("app is listening in port 3000");
});
