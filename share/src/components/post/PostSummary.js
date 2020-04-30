import React from "react";
import moment from 'moment'


const mystyle = {
  color: "white",
  backgroundColor: "#080808",
  padding: "10px",
  fontFamily: "Arial"
};


const PostSummary = ({post}) => {
  // console.log(post.title)
  return (
    <div style={mystyle} className="card z-depth-0-post-summary" >
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>{post.content}</p>
  <p>Posted By {post.authorFirstName} {post.authorLastName}</p>
        <p className="gray-text">{moment(post.createdAt.toDate()).calendar()}</p>          
      </div>
    </div>
  );
};

export default PostSummary;
