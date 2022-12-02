const express = require("express")
const morgan = require("morgan");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});
app.use(
  cors({
    origin: "*",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);

module.exports = app;