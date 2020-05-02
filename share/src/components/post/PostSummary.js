import React from "react"
import moment from 'moment'
import './PostSummary.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TimerIcon from '@material-ui/icons/Timer';
import TocIcon from '@material-ui/icons/Toc';


const mystyle = {
  backgroundColor: '#2F2F31',
  padding: "10px",
  fontFamily: "Arial"
};


const PostSummary = ({post}) => {
  // console.log(post.title)
  return (
    <div style={mystyle} className="card z-depth-0-post-summary post_summary" >
      <div className="card-content grey-text text-darken-3 ">
        <span className="btn btn-floating blue lighten-1 center text_title">{post.authorFirstName[0]}{post.authorLastName[0]}</span>
          <hr></hr>
          <span className="card-title center text_title "><TocIcon></TocIcon> {post.title}</span>
          <br></br>
           <p className="text_title "> {post.content}</p>
            <br></br>
              <p className="text_title "><AccountCircleIcon></AccountCircleIcon> Posted By {post.authorFirstName} {post.authorLastName}</p>
              <br></br>
              <p className="gray-text text_title "><TimerIcon></TimerIcon>{moment(post.createdAt.toDate()).calendar()}</p>          
      </div>
    </div>
  );
};

export default PostSummary;
