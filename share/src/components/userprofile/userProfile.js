import React, { Component } from "react";
import PostList from "../post/PostList";
import PostSummary from "../post/PostSummary"
import {connect} from "react-redux"
import {firestoreConnect } from 'react-redux-firebase'
import {Link} from 'react-router-dom'
import {compose } from 'redux'
import { Redirect } from "react-router-dom";

class UserProfile extends Component {
  render() {
    //  console.log(this.props);
    const { posts, auth } = this.props;

    if(!auth.uid){
      return <Redirect to='/signin'/>
    }

  

      return (
        <div className="dashboard container">

        
            {posts && posts.map(post =>{
              if( auth.uid===post.authoId)
              return(
                <Link to={'/post/' + post.id} key={post.id}>


                  <PostSummary post={post}  />
                 
                </Link>
              
              )
            })}
       
        </div>
      );

 

  }
}
const mapStateToProps = (state)=> {
  // console.log(state)
  return{
    posts : state.firestore.ordered.posts,
    auth : state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt', 'desc'] }
  ])
) (UserProfile);