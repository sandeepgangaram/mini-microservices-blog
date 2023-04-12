const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    const comments = posts[postId].comments;
    comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;

    const comments = posts[postId].comments;
    const comment = comments.find((comment) => {
      return comment.id === id;
    });

    comment.content = content;
    comment.status = status;
  }
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.send({ status: "OK" });
});

app.listen(8002, async () => {
  console.log("Listening on port 8002");

  try {
    const res = await axios.get("http://localhost:8005/events");

    res.data.forEach((event) => {
      console.log("Processing : ", event.type);
      handleEvent(event.type, event.data);
    });
  } catch (error) {
    console.log(error.message);
  }
});
