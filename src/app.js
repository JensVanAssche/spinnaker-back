var express = require("express");
const routes = require("./routes/index");

const app = express();

app.get("/", (_req, res) => res.send("server running..."));

app.use(`/api`, routes);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
