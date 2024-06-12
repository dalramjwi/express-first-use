const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.sendFile("/index.html");
});
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});
app.listen(port, () => console.log(`server is running ${port}`));
