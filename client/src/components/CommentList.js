const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content = comment.content;

    if (comment.status === "pending") {
      content = "pending approval";
    }

    if (comment.status === "rejected") {
      content = "comment rejected";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
