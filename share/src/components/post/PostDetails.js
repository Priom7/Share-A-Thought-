import React from "react";

function PostDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section post-details">
      <div className="card z-depth-0-post-details">
        <div className="card-content">
          <span className="card-title">Project Title - {id} </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quisquam illum, earum culpa soluta iure aut id rerum modi nobis amet
            architecto, recusandae officiis consectetur quaerat corporis
            cupiditate quidem tempora!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Priom</div>
          <div>25th January, 9.58pm</div>
        </div>
      </div>
    </div>
  );
}
export default PostDetails;
