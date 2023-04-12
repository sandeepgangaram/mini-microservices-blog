const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/posts", (req, res) => {
  axios.post("http://localhost:8000/posts");
  axios.post("http://localhost:8001/posts");
  axios.post("http://localhost:8002/posts");

  res.send({ status: "OK" });
});

app.listen(8005, () => {
  console.log("Listening on port 8005");
});
