const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

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

  res.send({ status: "OK" });
});

app.listen(8002, () => {
  console.log("Listening on port 8002");
});
