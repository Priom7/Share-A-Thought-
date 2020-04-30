import React, { Component } from "react";
import Notifications from "./Notifications";
import PostList from "../post/PostList";
import {connect} from "react-redux"
import {firestoreConnect } from 'react-redux-firebase'
import {compose } from 'redux'
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    //  console.log(this.props);
    const { posts, auth } = this.props;

    if(!auth.uid){
      return <Redirect to='/signin'/>
    }

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <PostList posts = { posts }  />







            
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
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
    { collection: 'posts' }
  ])
) (Dashboard);
