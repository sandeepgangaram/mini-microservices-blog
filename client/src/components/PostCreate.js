import { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const submitHandler = async (e) => {
    e.preventDeault();
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
          <label>Title</label>
          <input
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
