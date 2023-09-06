require("dotenv").config();

const express = require("express");
const app = express();
const indexRoutes = require("./routes/index");
const PORT = +process.env.PORT || 3000;
const { database } = require("./service/database");

//testing DATABASE
database();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());

app.use("/", indexRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("Listening to port..... " + PORT);
});
