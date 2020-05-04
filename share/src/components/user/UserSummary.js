import React from "react"

const mystyle = {
  backgroundColor: '#2F2F31',
  padding: "10px",
  fontFamily: "Arial"
};


const UserSummary = ({user}) => {
  // console.log(post.title)
  return (
    <div className="section">
    <div style={mystyle} className="card z-depth-0-post-summary post_summary " >
      <div className="card-content grey-text text-darken-3 ">
        <span className="btn btn-floating blue lighten-1 center text_title">{user.firstName[0]}{user.lastName[0]}</span>
          <hr></hr>
          <p className="content">
          <b>{user.firstName} {user.lastName}</b></p>
          <br></br>
         
          <a class="waves-effect waves-light btn">Follow</a>
          
         
          
                    
      </div>
    </div>
    </div>
  );
};

export default UserSummary;
