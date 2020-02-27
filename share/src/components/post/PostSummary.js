import React from "react";

const PostSummary = ({post}) => {
  console.log(post.title)
  return (
    <div className="card z-depth-0-post-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>{post.content}</p>
        <p className="gray-text">25th, January, 9.30am</p>
      </div>
    </div>
  );
};

export default PostSummary;
