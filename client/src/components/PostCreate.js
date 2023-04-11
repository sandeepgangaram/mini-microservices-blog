import { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/posts", {
      title,
    });
    setTitle("");
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="post">Title</label>
          <input
            id="post"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
