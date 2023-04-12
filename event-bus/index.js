const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const events = [];

app.get("/events", (req, res) => {
  res.send(events);
});

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios
    .post("http://localhost:8000/events", event)
    .catch((err) => console.log(err.message));
  axios
    .post("http://localhost:8001/events", event)
    .catch((err) => console.log(err.message));
  axios
    .post("http://localhost:8002/events", event)
    .catch((err) => console.log(err.message));
  axios
    .post("http://localhost:8003/events", event)
    .catch((err) => console.log(err.message));

  res.send({ status: "OK" });
});

app.listen(8005, () => {
  console.log("Listening on port 8005");
});
