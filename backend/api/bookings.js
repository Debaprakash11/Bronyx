const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/api/bookings", (req, res) => {
  console.log("Received Data:", req.body);
  res.json({ message: "Booking received", data: req.body });
});

module.exports = app;
