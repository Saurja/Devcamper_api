const express = require("express");
const dotenv = require("dotenv");

// ####### Router Modules
const bootcamps = require("./routes/bootcamps");

// ####### LOAD ENV VARIABLES
dotenv.config({ path: "./config/config.env" });

const app = express();

// ####### Mount Router
app.use("/api/v1/bootcamps", bootcamps);

// ####### Server Runtime
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server in running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
