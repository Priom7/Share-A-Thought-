import React from "react";
import {connect} from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect } from "react-router-dom";
import moment from 'moment'

function PostDetails(props) {

  const {post, auth} = props; 
  if(!auth.uid){
    return <Redirect to="/signin"></Redirect>
  }
  if(post){
    return (
      <div className="container section post-details">
        <div className="card z-depth-0-post-details">
          <div className="card-content">
            <span className="card-title">{post.title} </span>
            <p>
              {post.content}
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted By {post.authorFirstName} {post.authorLastName}</div>
            <div>{moment(post.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );

  }
  else{
    return(
     <div className="container center">
       <p>Loading Post....</p>
     </div>
    )
  }
  
}

const mapStateToProps = (state, ownProps)=>{
  // console.log(state)
  const id = ownProps.match.params.id
  const posts = state.firestore.data.posts
  const post = posts ? posts[id] : null
  return{
  
  post : post,
  auth : state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
) (PostDetails);
