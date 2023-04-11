import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:8000/posts");
    setPosts(res.data);
  };
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {Object.values(posts).map((post) => {
        return (
          <div
            key={post.id}
            className="card"
            style={{
              width: "30%",
              marginBottom: "20px",
            }}
          >
            <div className="card-body">
              <h4>{post.title}</h4>
              <CommentList id={post.id} />
              <CommentCreate id={post.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
