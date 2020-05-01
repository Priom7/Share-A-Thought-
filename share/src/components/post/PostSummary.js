import React from "react"
import moment from 'moment'
// import Icon from '@material-ui/core/Icon'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TimerIcon from '@material-ui/icons/Timer';
import TocIcon from '@material-ui/icons/Toc';









const mystyle = {
  color: "white",
  backgroundColor: "#ffff",
  padding: "10px",
  fontFamily: "Arial"
};


const PostSummary = ({post}) => {
  // console.log(post.title)
  return (
    <div style={mystyle} className="card z-depth-0-post-summary" >
      <div className="card-content grey-text text-darken-3">
        <span className="btn btn-floating blue lighten-1 center">{post.authorFirstName[0]}{post.authorLastName[0]}</span>
          <hr></hr>
          <span className="card-title center"><TocIcon></TocIcon> {post.title}</span>
          <br></br>
           <p> {post.content}</p>
            <br></br>
              <p ><AccountCircleIcon></AccountCircleIcon> Posted By {post.authorFirstName} {post.authorLastName}</p>
              <br></br>
              <p className="gray-text"><TimerIcon></TimerIcon>{moment(post.createdAt.toDate()).calendar()}</p>          
      </div>
    </div>
  );
};

export default PostSummary;
