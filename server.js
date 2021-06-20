const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

// @description: The path variables are imported here
dotenv.config({ path: "./config/config.env" });

// @Description: The router module are imported here
const bootcamps = require("./routes/bootcamps");

const app = express();

// @Description: Body parser
app.use(express.json());
app.use(express.urlencoded());

// @Description: Connect to database
connectDB();

// @description:  Dev logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// @description:  The router is mounted here
app.use("/api/v1/bootcamps", bootcamps);

// @description:  The servers runtimes starts here
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server in running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue
  )
);

// @description: Handle unhanded promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close and exit server immediately
  server.close(() => process.exit(1));
});
