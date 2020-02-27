import React, { Component } from "react";
import Notifications from "./Notifications";
import PostList from "../post/PostList";
import {connect} from "react-redux"

class Dashboard extends Component {
  render() {
    //  console.log(this.props);
    const { posts } = this.props;
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
  return{
    posts : state.post.posts
  }
}

export default connect(mapStateToProps) (Dashboard);
