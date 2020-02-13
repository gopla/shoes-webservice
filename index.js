const express = require("express");
const cors = require("cors");

const router = require("./config/routes");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("It works");
});
app.use(router);

app.listen(3000, function() {
  console.log(" -> Server listening on port 3000");
});
