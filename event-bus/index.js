const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/events", (req, res) => {
  axios.post("http://localhost:8000/events");
  axios.post("http://localhost:8001/events");
  axios.post("http://localhost:8002/events");

  res.send({ status: "OK" });
});

app.listen(8005, () => {
  console.log("Listening on port 8005");
});
