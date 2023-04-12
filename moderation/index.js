const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    let status = data.content.includes("orange") ? "rejected" : "approved";

    await axios.post("http://localhost:8005/events", {
      type: "CommentModerated",
      data: {
        id: data.id,
        content: data.content,
        postId: data.postId,
        status,
      },
    });
  }

  res.send({ status: "OK" });
});

app.listen(8003, () => {
  console.log("Listening on port 8003");
});
