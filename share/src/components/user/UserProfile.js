import React, { Component } from "react";
import PostSummary from "../post/PostSummary"
import {connect} from "react-redux"
import {firestoreConnect } from 'react-redux-firebase'
import {Link} from 'react-router-dom'
import {compose } from 'redux'
import { Redirect } from "react-router-dom";
import "./userProfile.css"
import moment from 'moment'

class UserProfile extends Component {
  render() {
    //  console.log(this.props);
    const { posts, auth, users, profile } = this.props;
    console.log(auth)
    console.log(users)
    console.log(posts)
    console.log(profile)
console.log(auth.createdAt)

    if(!auth.uid){
      return <Redirect to='/signin'/>
    }

  

      return (
      <div className="dashboard container">


        <div className="card center profile_card">
          <div className ="card-image waves-effect waves-block waves-light">

        
            
       
        
          </div>
          <div className="card-content">
          <h1>Your Profile</h1>
          <h3><span className="btn btn-floating blue lighten-1 center text_title">{profile.initial}</span>  {profile.firstName} {profile.lastName}</h3>
            <span className="card-title activator grey-text text-darken-4"><b>Email: </b>{auth.email}</span>
          

          
           
          </div>
          <div className="card-reveal center">
            <span className="card-title grey-text text-darken-4 profile_card">The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/ma</span>
            <p></p>
          </div>
        

        </div>
      

       
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
   console.log(state)
  return{
    posts : state.firestore.ordered.posts,
    auth : state.firebase.auth,
    users : state.firestore.ordered.users,
    profile : state.firebase.profile
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt', 'desc'] },
    { collection: "usres"}
  ])
) (UserProfile);