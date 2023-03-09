require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./src/routes");
const cors = require("cors");
const databaseConnection = require("./src/config/database")


app.use(cors());
app.use("/api", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server started on " + port);
  databaseConnection();
});

