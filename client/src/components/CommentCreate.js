import { useState } from "react";
import axios from "axios";

const CommentCreate = ({ id }) => {
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8001/posts/${id}/comments`, {
      content,
    });

    setContent("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="comment">New Comment</label>
          <input
            type="text"
            className="form-control"
            id="comment"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
