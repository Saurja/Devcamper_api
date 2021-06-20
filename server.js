const express = require("express");
const dotenv = require("dotenv");

// ####### LOAD ENV VARIABLES
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server in running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);