const express = require("express");
const dotenv = require("dotenv");

// ####### LOAD ENV VARIABLES
dotenv.config({ path: "./config/config.env" });

const app = express();

// ####### Routes
app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Show All BootCamps" });
});

app.get("/api/v1/bootcamp/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Display bootcamp ${req.params.id}` });
});

app.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Create new BootCamp" });
});

app.put("/api/v1/bootcamp/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

app.delete("/api/v1/bootcamp/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

// ####### Server Runtime
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server in running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
