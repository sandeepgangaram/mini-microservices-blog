const express = require("express");

const app = express();

app.use(express.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId } = data;
    const comments = posts[postId].comments;
    comments.push({ id, content });
  }

  res.send({ status: "OK" });
});

app.listen(8002, () => {
  console.log("Listening on port 8002");
});
